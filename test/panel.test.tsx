import React from "react";
import { Panel } from '../src/panel';
import { Box, Stack } from "@chakra-ui/react";
import { render, fireEvent, cleanup } from '@testing-library/react';

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

    it ('render renders outer stack and inner element', () => {
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
        renderedElement: <div>Contents</div>
      }]);
      render(renderedPanel, container);
      expect(container.textContent).toBe("Contents");
    });
    
  });
});