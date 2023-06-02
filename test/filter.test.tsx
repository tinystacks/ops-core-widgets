import { jest } from '@jest/globals';
import get from 'lodash.get';

const mockGet = jest.fn();
jest.unstable_mockModule('lodash.get', () => ({ default: mockGet }));

import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { TinyStacksError } from '@tinystacks/ops-core';
const { JsonFilter } = await import('../src/json-filter');

describe('JsonFilter', () => {
  beforeEach(() => {
    mockGet.mockImplementation(get);
  });

  afterEach(() => {
    cleanup();
    // for mocks
    jest.resetAllMocks();

    // for spies
    jest.restoreAllMocks();
  });
  const jsonObject = {
    name: 'John Doe',
    age: 25,
    address: {
      city: 'New York',
      country: 'USA',
      null: null
    },
  };

  const paths = [
    { pathDisplayName: 'Name', path: 'name' },
    { pathDisplayName: 'Age', path: 'age' },
    { pathDisplayName: 'City', path: 'address.city' },
    { pathDisplayName: 'Country', path: 'address.country' },
  ];

  it('fromJson', () => {
    const props = {
      id: 'fromJson',
      type: 'JsonFilter',
      displayName: 'fromJson',
      jsonObject,
      paths
    };

    const result = JsonFilter.fromJson(props);

    expect(result instanceof JsonFilter).toBe(true);
    expect(result).toHaveProperty('id', props.id);
    expect(result).toHaveProperty('type', props.type);
    expect(result).toHaveProperty('displayName', props.displayName);
    expect(result).toHaveProperty('jsonObject', props.jsonObject);
    expect(result).toHaveProperty('paths', props.paths);
    expect(result).toHaveProperty('toJson');
    expect(result).toHaveProperty('getData');
    expect(result).toHaveProperty('render');
  });
  it('toJson', () => {
    const props = {
      id: 'fromJson',
      type: 'JsonFilter',
      displayName: 'fromJson',
      jsonObject,
      paths
    };

    const jsonFilter = JsonFilter.fromJson(props);
    const result = jsonFilter.toJson();

    expect(result instanceof JsonFilter).toBe(false);
    expect(result).toHaveProperty('id', props.id);
    expect(result).toHaveProperty('type', props.type);
    expect(result).toHaveProperty('displayName', props.displayName);
    expect(result).toHaveProperty('jsonObject', props.jsonObject);
    expect(result).toHaveProperty('paths', props.paths);
    expect(result).not.toHaveProperty('toJson');
    expect(result).not.toHaveProperty('getData');
    expect(result).not.toHaveProperty('render');
  });
  
  describe('getData', () => {
    it('assigns filtered json to self', () => {

      const testPaths = [
        { pathDisplayName: 'Name', path: 'name' },
        { pathDisplayName: 'Country', path: 'address.country' },
        { pathDisplayName: 'Does not exist', path: 'dne[0].dne' },
        { pathDisplayName: 'Null', path: 'address.null' }
      ];
      const props = {
        id: 'fromJson',
        type: 'JsonFilter',
        displayName: 'fromJson',
        jsonObject,
        paths: testPaths
      };
      
      const jsonFilter = JsonFilter.fromJson(props);
      
      expect(jsonFilter.filteredJson).toEqual([]);
      
      jsonFilter.getData();
      
      expect(jsonFilter.filteredJson).toEqual([
        {
          pathDisplayName: 'Name',
          json: 'John Doe'
        },
        {
          pathDisplayName: 'Country',
          json: 'USA'
        },
        {
          pathDisplayName: 'Does not exist',
          json: 'Value dne[0].dne does not exist on source object'
        },
        {
          pathDisplayName: 'Null',
          json: 'Value address.null does not exist on source object'
        }
      ]);
    });
    it('catches errors and throws a 500', () => {
      mockGet.mockClear();
      mockGet.mockReset();
      mockGet.mockImplementation(() => { throw new Error('Error!'); });

      const testPaths = [
        { pathDisplayName: 'Name', path: 'name' },
        { pathDisplayName: 'Country', path: 'address.country' }
      ];
      const props = {
        id: 'fromJson',
        type: 'JsonFilter',
        displayName: 'fromJson',
        jsonObject,
        paths: testPaths
      };
      
      const jsonFilter = JsonFilter.fromJson(props); 
      let thrownError;
      try {
        jsonFilter.getData();
      } catch (error) {
        thrownError = error;
      } finally {
        expect(jsonFilter.filteredJson).toEqual([]);

        expect(thrownError instanceof TinyStacksError).toBe(true);
        expect(thrownError).toHaveProperty('name', 'TinyStacksError');
        expect(thrownError).toHaveProperty('type', 'InternalServerError');
        expect(thrownError).toHaveProperty('status', 500);
        expect(thrownError).toHaveProperty('message', 'Error getting data for json tree widget fromJson!');
      }
    });
  });

  it('render', async () => {
    const filteredJson = [
      { pathDisplayName: 'Name', json: 'John Doe' },
      { pathDisplayName: 'Age', json: 25 },
      { pathDisplayName: 'City', json: 'New York' },
      { pathDisplayName: 'Country', json: 'USA' },
    ];

    const props = { jsonObject, paths, filteredJson, id: 'rendered', displayName: 'rendered', type: 'JsonFilter' };
    render(new JsonFilter(props).render());

    expect(await screen.getByText(/name/i)).toBeDefined();
    // expect(screen.getByText(/john doe/i)).toBeInTheDocument();

    // expect(screen.getByText(/age/i)).toBeInTheDocument();
    // expect(screen.getByText(/25/i)).toBeInTheDocument();

    // expect(screen.getByText(/city/i)).toBeInTheDocument();
    // expect(screen.getByText(/new york/i)).toBeInTheDocument();

    // expect(screen.getByText(/country/i)).toBeInTheDocument();
    // expect(screen.getByText(/usa/i)).toBeInTheDocument();
  });

  // it('should render error message when data cannot be fetched', () => {
  //   const paths = [{ pathDisplayName: 'InvalidPath', path: 'invalid.path' }];
  //   const props = { jsonObject, paths };

  //   console.error = jest.fn();
  //   render(<JsonFilter {...props} />);

  //   expect(console.error).toHaveBeenCalledTimes(1);
  //   expect(
  //     screen.getByText(/Error getting data for json tree widger/i)
  //   ).toBeInTheDocument();
  // });
});
