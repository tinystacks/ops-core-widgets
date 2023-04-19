import { render, screen } from '@testing-library/react';
import React from 'react';
import { JsonFilter } from '../src/json-filter';

describe('JsonFilter', () => {
  const jsonObject = {
    name: 'John Doe',
    age: 25,
    address: {
      city: 'New York',
      country: 'USA',
    },
  };

  const paths = [
    { pathDisplayName: 'Name', path: 'name' },
    { pathDisplayName: 'Age', path: 'age' },
    { pathDisplayName: 'City', path: 'address.city' },
    { pathDisplayName: 'Country', path: 'address.country' },
  ];

  it('should render prettified JSON with filtered data', async () => {
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
