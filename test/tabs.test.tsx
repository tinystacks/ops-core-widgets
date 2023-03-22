import React from "react";
import { Tabs } from '../src/tabs';
import { render, cleanup, screen } from '@testing-library/react';

let container;

describe('Tabs', () => {
  afterEach(cleanup);
  
  describe('data', () => {
    it('Tabs initialized successfully', () => {
      const tabsProps = {
        id: 'MockWidget',
        type: 'Tabs',
        displayName: 'mock widget'
      };

      const tabs = Tabs.fromJson(tabsProps);
      expect(tabs.toJson()).toStrictEqual({
        ...tabsProps,
        childrenIds: undefined,
        description: undefined,
        displayOptions: undefined,
        providerIds: undefined,
        tabNames: []
      });
    });
    
    it ('getData does nothing', () => {
      const tabsProps = {
        id: 'MockWidget',
        type: 'Tabs',
        displayName: 'mock widget'
      };

      const tabs = Tabs.fromJson(tabsProps);
      tabs.getData();
      expect(tabs.toJson()).toStrictEqual({
        ...tabsProps,
        childrenIds: undefined,
        description: undefined,
        displayOptions: undefined,
        providerIds: undefined,
        tabNames: []
      });
    });
  });

  describe('render', () => {
    it ('render throws when children are empty or undefined', () => {
      const tabsProps = {
        id: 'MockWidget',
        type: 'Tabs',
        displayName: 'mock widget'
      };
  
      const tabs = Tabs.fromJson(tabsProps);
      let error;
      try {
        render(tabs.render(), container);
      } catch (e) {
        error = e;
      }
      expect(error.message).toBe("Children are not defined!");
      try {
        render(tabs.render([]), container);
      } catch (e) {
        error = e;
      }
      expect(error.message).toBe("Children are not defined!");
    });

    it ('render throws when children and tabNames mismatch', () => {
      const tabsProps = {
        id: 'MockWidget',
        type: 'Tabs',
        displayName: 'mock widget',
        tabNames: []
      };
  
      const tabs = Tabs.fromJson(tabsProps);
      let error;
      try {
        render(tabs.render([{
          id: 'FakeWidget',
          type: 'Fake',
          displayName: 'fake widget',
          renderedElement: <div data-testid='test-contents'>Contents</div>
        }]), container);
      } catch (e) {
        error = e;
      }
      expect(error.message).toBe("Mismatch between tabName and children lengths");
    });

    it ('render renders outer stack and inner element', async () => {
      const tabsProps = {
        id: 'MockWidget',
        type: 'Tabs',
        displayName: 'mock widget',
        tabNames: ['faketab']
      };
  
      const tabs = Tabs.fromJson(tabsProps);
      const renderedTabs = tabs.render([{
        id: 'FakeWidget',
        type: 'Fake',
        displayName: 'fake widget',
        renderedElement: <div data-testid='test-contents'>Contents</div>
      }]);
      render(renderedTabs, container);
      const testDiv = await (screen.findByTestId('test-contents'));
      expect(testDiv.textContent).toBe("Contents");

      const tabsDiv = await screen.findByTestId('tabs');
      expect(tabsDiv).toBeTruthy();
    });
  });
});