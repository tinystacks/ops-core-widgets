import React from 'react';
import isEmpty from 'lodash.isempty';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { BaseWidget } from '@tinystacks/ops-core';
import { Widget } from '@tinystacks/ops-model';
import { Grid as GridProps } from './ops-types.js';

export class Grid extends BaseWidget {
  columns: number | undefined;
  constructor (props: GridProps) {
    super(props);
    this.columns = props.columns;
  }

  static fromJson (object: Widget): Grid {
    return new Grid(object);
  }

  toJson () {
    return {
      ...super.toJson(),
      columns: this.columns
    };
  }

  getData (): void { return; }
  render (children?: (Widget & { renderedElement: JSX.Element })[]): JSX.Element {
    if (!children || isEmpty(children)) {
      throw new Error('Children are not defined!');
    }

    return (
      <SimpleGrid className='widgetContainer' data-testid='grid-widget' columns={this.columns || 2}>
        {children.map(c => <Box key={c.id}>{c.renderedElement}</Box>)}
      </SimpleGrid>
    );
  }
}