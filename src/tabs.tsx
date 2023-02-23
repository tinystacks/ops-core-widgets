import { BaseWidget } from '@tinystacks/ops-core';
import {
  Tabs as ChakraTabs, TabList as ChakraTabList, TabPanel as ChakraTabPanel, Tab as ChakraTab,
  TabPanels as ChakraTabPanels
} from '@chakra-ui/react';
import React from 'react';
import { Widget } from '@tinystacks/ops-model';
import isEmpty from 'lodash.isempty';
import { Tab } from './tab.js';

export class Tabs extends BaseWidget {
  constructor (props: Widget) {
    super(props);
  }

  static fromJson (object: Widget): Tabs {
    return new Tabs(object);
  }

  getData (): void { return; }

  render (children?: BaseWidget[]): JSX.Element {
    if (!children) {
      throw new Error('Children are not defined!');
    }

    const nonTabKiddos = children.filter(c => c.type !== 'Tab');
    if (!isEmpty(nonTabKiddos)) {
      throw new Error(`Found non-tab child(ren). ${nonTabKiddos.map(c => '\niwidget id: ' + c.id)}`);
    }

    return (
      <ChakraTabs>
        <ChakraTabList>
          {(children as Tab[]).map((child: Tab) => (
            <ChakraTab>{child.tabDisplayName}</ChakraTab>
          ))}
        </ChakraTabList>
        <ChakraTabPanels>
          {children.map(tab => (
            <ChakraTabPanel>
              {tab.render()}
            </ChakraTabPanel>
          ))}
        </ChakraTabPanels>
      </ChakraTabs>
    );
  }
}