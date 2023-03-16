import { Box, SimpleGrid } from '@chakra-ui/react';
import { BaseWidget } from '@tinystacks/ops-core';
import { Widget } from '@tinystacks/ops-model';
import React from 'react';

export type GridProps = Widget & { columns?: number };

export class Grid extends BaseWidget {
  columns?: number;
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
      orientation: this.columns
    };
  }

  getData (): void { return; }
  render (children?: (Widget & { renderedElement: JSX.Element })[]): JSX.Element {
    if (!children) {
      throw new Error('Children are not defined!');
    }

    return (
      <SimpleGrid className='widgetContainer' columns={this.columns || 2}>
        {children.map(c => <Box key={c.id}>{c.renderedElement}</Box>)}
      </SimpleGrid>
    );
  }
}