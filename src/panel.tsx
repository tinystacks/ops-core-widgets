import React from 'react';
import isEmpty from 'lodash.isempty';
import { Box, HStack, Stack } from '@chakra-ui/react';
import { Controllers, Models, Views } from '@tinystacks/ops-core';
import { Widget } from '@tinystacks/ops-model';
import { Panel as PanelProps } from './ops-types.js';

import WidgetController = Controllers.Widget;
import WidgetModel = Models.Widget;
import WidgetView = Views.Widget;

export class Panel extends WidgetModel implements WidgetController, WidgetView {
  orientation: string;
  constructor (props: PanelProps) {
    super(props);
    this.orientation = props.orientation || 'vertical';
  }

  static fromJson (object: Widget): Panel {
    return new Panel(object);
  }

  toJson () {
    return {
      ...super.toJson(),
      orientation: this.orientation
    };
  }

  getData (): void { return; }
  render (children?: (Widget & { renderedElement: JSX.Element })[]): JSX.Element {
    if (!children || isEmpty(children)) {
      throw new Error('Children are not defined!');
    }

    if (this.orientation === 'vertical') {
      return (
        <Stack className='widgetContainer' data-testid='vertical-panel'>
          {children.map(c => <Box key={c.id}>{c.renderedElement}</Box>)}
        </Stack>
      );
    }

    return (
      <HStack className='widgetContainer' data-testid='horizontal-panel'>
        {children.map(c => <Box key={c.id}>{c.renderedElement}</Box>)}
      </HStack>
    );
  }
}