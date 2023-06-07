import React from 'react';
import { BaseWidget } from '@tinystacks/ops-core';
import { default as ReactMarkdown } from 'react-markdown';
import { default as ChakraUIRenderer } from 'chakra-ui-markdown-renderer';
import { Box } from '@chakra-ui/react';
import { Markdown as MarkdownProps } from './ops-types.js';

export class Markdown extends BaseWidget {
  markdown: string;
    
  constructor (props: MarkdownProps) {
    super(props);
    this.markdown = props.markdown;
  }

  static fromJson (object: MarkdownProps): Markdown {
    return new Markdown(object);
  }

  toJson (): any {
    return { ...super.toJson(), markdown: this.markdown };
  }

  getData (): void { return; }
  
  render (): JSX.Element {
    if (!this.markdown) {
      throw new Error('Markdown not provided. Please add a \'markdown\' field to your widget configuration.');
    }
    return (
      <Box className='paddedWidgetContents'>
        <ReactMarkdown components={ChakraUIRenderer()} children={this.markdown} skipHtml />
      </Box>
    );
  }
}