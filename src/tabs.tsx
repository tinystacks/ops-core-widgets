import { BaseWidget } from '@tinystacks/ops-core';
import {
  Tabs as ChakraTabs, TabList as ChakraTabList, TabPanel as ChakraTabPanel, Tab as ChakraTab,
  TabPanels as ChakraTabPanels
} from '@chakra-ui/react';
import React from 'react';
import { Widget } from '@tinystacks/ops-model';
import isEmpty from 'lodash.isempty';

type TabsProps = Widget & { tabNames?: string[] };

export class Tabs extends BaseWidget {
  tabNames: string[];
  constructor (props: TabsProps) {
    super(props);
    this.tabNames = props.tabNames || [];
  }

  static fromJson (object: Widget): Tabs {
    return new Tabs(object);
  }

  toJson (): TabsProps {
    return { ...super.toJson(), tabNames: this.tabNames };
  }

  getData (): void { return; }

  render (children?: (Widget & { renderedElement: JSX.Element })[]): JSX.Element {
    if (!children || isEmpty(children)) {
      throw new Error('Children are not defined!');
    }

    if (this.tabNames.length !== children.length) {
      throw new Error('Mismatch between tabName and children lengths');
    }

    return (
      <ChakraTabs style={{ width: '100%' }} data-testid='tabs'>
        <ChakraTabList style={{ width: '100%' }}>
          {(this.tabNames).map(tabName => (
            <ChakraTab key={tabName + '-tabnames'}>{tabName}</ChakraTab>
          ))}
        </ChakraTabList>
        <ChakraTabPanels>
          {children.map((tab, i) => (
            <ChakraTabPanel className='widgetContainer' key={this.tabNames[i] + '-tab'}>
              {tab.renderedElement}
            </ChakraTabPanel>
          ))}
        </ChakraTabPanels>
      </ChakraTabs>
    );
  }
}