import { Box } from '@chakra-ui/react';
import { BaseWidget } from '@tinystacks/ops-core';
import { Widget } from '@tinystacks/ops-model';
import React from 'react';

export class ColumnPanel extends BaseWidget {
  static fromJson (object: Widget): ColumnPanel {
    return new ColumnPanel(object);
  }

  getData (): void { return; }
  render (children?: (Widget & { renderedElement: JSX.Element })[]): JSX.Element {
    if (!children) {
      throw new Error('Children are not defined!');
    }

    return (
      <Box className='widgetContainer'>
        {children.map(c => <div key={c.id}>{c.renderedElement}</div>)}
      </Box>
    );
  }
}