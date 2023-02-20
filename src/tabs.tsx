import { Widget } from '@tinystacks/ops-core';
import { Tab } from './tab';
import {
  Tabs as ChakraTabs, TabList as ChakraTabList, TabPanel as ChakraTabPanel, Tab as ChakraTab,
  TabPanels as ChakraTabPanels
} from '@chakra-ui/react';
import React from 'react';

export class Tabs extends Widget {
  tabs: {
    [id: string]: Tab
  };

  constructor (
    id: string,
    displayName: string,
    type: string,
    providerId?: string,
    showDisplayName?: boolean,
    description?: string,
    showDescription?: boolean,
    tabs: {
      [id: string]: Tab
    } = {}
  ) {
    super(
      id,
      displayName,
      type,
      providerId,
      showDisplayName,
      description,
      showDescription
    );
    this.tabs = tabs;
  }

  static fromJson (object: any): Tabs {
    const {
      id,
      displayName,
      type,
      showDisplayName,
      description,
      showDescription,
      tabs: tabsObject = {},
      providerId
    } = object;
    
    const tabs = Tabs.getTabs(tabsObject);
    return new Tabs(
      id,
      displayName,
      type,
      providerId,
      showDisplayName,
      description,
      showDescription,
      tabs
    );
  }

  private static getTabs (tabsObject: any) {
    return Object.entries(tabsObject).reduce<{ [id: string]: Tab }>((acc, [tabId, tabObject]) => {
      acc[tabId] = Tab.fromJson(tabObject);
      return acc;
    }, {});
  }

  toJson (): any {
    const tabs = Tabs.getTabs(this.tabs);

    const {
      id,
      displayName,
      type,
      providerId,
      showDisplayName,
      description,
      showDescription
    } = this;
    return {
      id,
      displayName,
      type,
      showDisplayName,
      description,
      showDescription,
      providerId,
      tabs
    };
  }

  getData (): void { return; }

  render (): JSX.Element {
    return (
      <ChakraTabs>
        <ChakraTabList>
          {Object.keys(this.tabs).map(tabId => (
            <ChakraTab>{tabId}</ChakraTab>
          ))}
        </ChakraTabList>
        <ChakraTabPanels>
          {Object.values(this.tabs).map(tab => (
            <ChakraTabPanel>
              {tab.render()}
            </ChakraTabPanel>
          ))}
        </ChakraTabPanels>
      </ChakraTabs>
    );
  }
}