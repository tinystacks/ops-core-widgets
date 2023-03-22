import React from "react";
import { Panel } from '../src/panel';
import { render, cleanup, screen } from '@testing-library/react';

let container;

describe('Panel', () => {
  afterEach(cleanup);
  
  describe('data', () => {
    it('Panel initialized successfully', () => {
      const panelProps = {
        id: 'MockWidget',
        type: 'Panel',
        displayName: 'mock widget'
      };

      const panel = Panel.fromJson(panelProps);
      expect(panel.toJson()).toStrictEqual({
        ...panelProps,
        childrenIds: undefined,
        description: undefined,
        displayOptions: undefined,
        orientation: 'vertical',
        providerIds: undefined
      });
    });
    
    it ('getData does nothing', () => {
      const panelProps = {
        id: 'MockWidget',
        type: 'Panel',
        displayName: 'mock widget'
      };

      const panel = Panel.fromJson(panelProps);
      panel.getData();
      expect(panel.toJson()).toStrictEqual({
        ...panelProps,
        childrenIds: undefined,
        description: undefined,
        displayOptions: undefined,
        orientation: 'vertical',
        providerIds: undefined
      });
    });
  });

  describe('render', () => {
    it ('render throws when children are empty or undefined', () => {
      const panelProps = {
        id: 'MockWidget',
        type: 'Panel',
        displayName: 'mock widget'
      };
  
      const panel = Panel.fromJson(panelProps);
      let error;
      try {
        render(panel.render(), container);
      } catch (e) {
        error = e;
      }
      expect(error.message).toBe("Children are not defined!");
      try {
        render(panel.render([]), container);
      } catch (e) {
        error = e;
      }
      expect(error.message).toBe("Children are not defined!");
    });

    it ('render renders outer stack and inner element', async () => {
      const panelProps = {
        id: 'MockWidget',
        type: 'Panel',
        displayName: 'mock widget'
      };
  
      const panel = Panel.fromJson(panelProps);
      const renderedPanel = panel.render([{
        id: 'FakeWidget',
        type: 'Fake',
        displayName: 'fake widget',
        renderedElement: <div data-testid='test-contents'>Contents</div>
      }]);
      render(renderedPanel, container);
      const testDiv = await (screen.findByTestId('test-contents'));
      expect(testDiv.textContent).toBe("Contents");

      const panelDiv = await screen.findByTestId('vertical-panel');
      expect(panelDiv.classList.contains('chakra-stack')).toBeTruthy();
    });

    it ('render renders outer stack and inner element on horiz stack', async () => {
      const panelProps = {
        id: 'MockWidget',
        type: 'Panel',
        displayName: 'mock widget',
        orientation: 'horizontal'
      };
  
      const panel = Panel.fromJson(panelProps);
      const renderedPanel = panel.render([{
        id: 'FakeWidget',
        type: 'Fake',
        displayName: 'fake widget',
        renderedElement: <div data-testid='test-contents'>Contents</div>
      }]);
      render(renderedPanel, container);
      const testDiv = await (screen.findByTestId('test-contents'));
      expect(testDiv.textContent).toBe("Contents");

      const panelDiv = await screen.findByTestId('horizontal-panel');
      expect(panelDiv.classList.contains('chakra-stack')).toBeTruthy();
    });
  });
});