import { Widget } from '@tinystacks/ops-core';
import * as React from 'react';
import { default as ReactMarkdown } from 'react-markdown';
import { default as ChakraUIRenderer } from 'chakra-ui-markdown-renderer';

export class Markdown extends Widget {
  markdown: string;
    
  constructor (
    id: string,
    displayName: string,
    type: string,
    providerId: string,
    markdown: string,
    showDisplayName?: boolean,
    description?: string,
    showDescription?: boolean
  ) {
    super(
      id,
      displayName,
      type,
      providerId,
      showDisplayName,
      description,
      showDescription
    );
    this.markdown = markdown;
  }

  static fromJson (object: any): Markdown {
    const {
      id,
      displayName,
      type,
      markdown,
      showDisplayName,
      description,
      showDescription,
      providerId
    } = object;
    return new Markdown(
      id,
      displayName,
      type,
      providerId,
      markdown,
      showDisplayName,
      description,
      showDescription
    );
  }

  toJson (): any {
    const {
      id,
      displayName,
      type,
      markdown,
      showDisplayName,
      description,
      showDescription,
      providerId
    } = this;
    return {
      id,
      displayName,
      type,
      markdown,
      showDisplayName,
      description,
      showDescription,
      providerId
    };
  }

  getData (): void { return; }
  
  render (): JSX.Element {
    return (
      <div style={{ padding: '20px' }}>
        <div className='widgetContainer'>
          <ReactMarkdown components={ChakraUIRenderer()} children={this.markdown} skipHtml />
        </div>
      </div>
    );
  }
}