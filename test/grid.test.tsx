import React from "react";
import { Grid } from '../src/grid';
import { render, cleanup, screen } from '@testing-library/react';

let container;

describe('Grid', () => {
  afterEach(cleanup);
  
  describe('data', () => {
    it('Grid initialized successfully', () => {
      const gridProps = {
        id: 'MockWidget',
        type: 'Grid',
        displayName: 'mock widget'
      };

      const grid = Grid.fromJson(gridProps);
      expect(grid.toJson()).toStrictEqual({
        ...gridProps,
        childrenIds: undefined,
        description: undefined,
        displayOptions: undefined,
        columns: undefined,
        providerIds: undefined
      });
    });
    
    it ('getData does nothing', () => {
      const gridProps = {
        id: 'MockWidget',
        type: 'Grid',
        displayName: 'mock widget'
      };

      const grid = Grid.fromJson(gridProps);
      grid.getData();
      expect(grid.toJson()).toStrictEqual({
        ...gridProps,
        childrenIds: undefined,
        description: undefined,
        displayOptions: undefined,
        columns: undefined,
        providerIds: undefined
      });
    });
  });

  describe('render', () => {
    it ('render throws when children are empty or undefined', () => {
      const gridProps = {
        id: 'MockWidget',
        type: 'Grid',
        displayName: 'mock widget'
      };
  
      const grid = Grid.fromJson(gridProps);
      let error;
      try {
        render(grid.render(), container);
      } catch (e) {
        error = e;
      }
      expect(error.message).toBe("Children are not defined!");
      try {
        render(grid.render([]), container);
      } catch (e) {
        error = e;
      }
      expect(error.message).toBe("Children are not defined!");
    });

    it ('render renders outer stack and inner element', async () => {
      const gridProps = {
        id: 'MockWidget',
        type: 'Grid',
        displayName: 'mock widget'
      };
  
      const grid = Grid.fromJson(gridProps);
      const renderedGrid = grid.render([{
        id: 'FakeWidget',
        type: 'Fake',
        displayName: 'fake widget',
        renderedElement: <div data-testid='test-contents'>Contents</div>
      }]);
      render(renderedGrid, container);
      const testDiv = await (screen.findByTestId('test-contents'));
      expect(testDiv.textContent).toBe("Contents");

      const gridDiv = await screen.findByTestId('grid-widget');
      expect(gridDiv).toBeTruthy();
    });
  });
});