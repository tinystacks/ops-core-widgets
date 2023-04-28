import React from "react";
// import { jest } from '@jest/globals'
import { Markdown as MarkdownWidget, MarkdownProps } from '../src/markdown';
import { render, cleanup, screen } from '@testing-library/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

let container;

// const mockChakraUiRenderer = jest.fn();
// jest.mock('chakra-ui-markdown-renderer', () => ({
//   default: mockChakraUiRenderer
// }));

describe('Markdown', () => {
  afterEach(cleanup);
  
  describe('data', () => {
    it('Markdown initialized successfully', () => {
      const markdownProps = {
        id: 'MockWidget',
        type: 'MarkdownWidget',
        displayName: 'mock widget',
        markdown: 'some markdown'
      };

      const markdown = MarkdownWidget.fromJson(markdownProps);
      expect(markdown.toJson()).toStrictEqual({
        ...markdownProps,
        childrenIds: undefined,
        description: undefined,
        displayOptions: undefined,
        providerIds: undefined
      });
    });
    
    it ('getData does nothing', () => {
      const markdownProps = {
        id: 'MockWidget',
        type: 'Markdown',
        displayName: 'mock widget',
        markdown: 'some markdown'
      };

      const markdown = MarkdownWidget.fromJson(markdownProps);
      markdown.getData();
      expect(markdown.toJson()).toStrictEqual({
        ...markdownProps,
        childrenIds: undefined,
        description: undefined,
        displayOptions: undefined,
        providerIds: undefined
      });
    });
  });

  /*describe('render', () => {
    it ('render renders outer stack and inner element', async () => {
      const markdownProps = {
        id: 'MockWidget',
        type: 'MarkdownWidget',
        displayName: 'mock widget',
        markdown: 'some markdown'
      };
      
    
      const markdown = MarkdownWidget.fromJson(markdownProps);
      const renderedMarkdownWidget = markdown.render();
      const { getByText, getByTestId } = render(renderedMarkdownWidget, container);
      const markdownElement = getByTestId('markdown');
      expect(markdownElement).toBeInTheDocument();
      expect(getByText('some markdown')).toBeInTheDocument();

      //const testDiv = await (screen.findByText('some markdown'));
      //expect(testDiv.textContent).toBe("some markdown");
    });
  });*/
});
