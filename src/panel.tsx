import { Box, HStack, Stack } from '@chakra-ui/react';
import { BaseWidget } from '@tinystacks/ops-core';
import { Widget } from '@tinystacks/ops-model';
import isEmpty from 'lodash.isempty';
import React from 'react';

export type PanelProps = Widget & { orientation?: 'horizontal' | 'vertical' };

export class Panel extends BaseWidget {
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