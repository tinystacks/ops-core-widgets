import { BaseWidget } from '@tinystacks/ops-core';
import {
  Tabs as ChakraTabs, TabList as ChakraTabList, TabPanel as ChakraTabPanel, Tab as ChakraTab,
  TabPanels as ChakraTabPanels
} from '@chakra-ui/react';
import React from 'react';
import { Widget } from '@tinystacks/ops-model';

type TabsProps = Widget & { tabNames?: string[] };

export class Tabs extends BaseWidget {
  tabNames: string[];
  constructor (props: TabsProps) {
    super(props);
    this.tabNames = props.tabNames;
  }

  static fromJson (object: Widget): Tabs {
    return new Tabs(object);
  }

  toJson (): TabsProps {
    return { ...super.toJson(), tabNames: this.tabNames || [] };
  }

  getData (): void { return; }

  render (children?: (Widget & { renderedElement: JSX.Element })[]): JSX.Element {
    if (!children) {
      throw new Error('Children are not defined!');
    }

    if (this.tabNames.length !== children.length) {
      throw new Error('Mismatch between tabName and children lengths');
    }

    return (
      <ChakraTabs style={{ width: '100%' }}>
        <ChakraTabList style={{ width: '100%' }}>
          {(this.tabNames).map(tabName => (
            <ChakraTab>{tabName}</ChakraTab>
          ))}
        </ChakraTabList>
        <ChakraTabPanels>
          {children.map(tab => (
            <ChakraTabPanel className='widgetContainer'>
              {tab.renderedElement}
            </ChakraTabPanel>
          ))}
        </ChakraTabPanels>
      </ChakraTabs>
    );
  }
}