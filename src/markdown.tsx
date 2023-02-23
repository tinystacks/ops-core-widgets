import { BaseWidget } from '@tinystacks/ops-core';
import { Widget } from '@tinystacks/ops-model';
import React from 'react';
import { default as ReactMarkdown } from 'react-markdown';
import { default as ChakraUIRenderer } from 'chakra-ui-markdown-renderer';

type MarkdownProps = Widget & { markdown: string }

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
    return (
      <div style={{ padding: '20px', width: '100%' }}>
        <div className='widgetContainer'>
          <ReactMarkdown components={ChakraUIRenderer()} children={this.markdown} skipHtml />
        </div>
      </div>
    );
  }
}