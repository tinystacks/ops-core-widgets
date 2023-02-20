import { Widget } from '@tinystacks/ops-core';
import React from 'react';
/* Holding onto this to replace use of any below
type MarkdownType = {
  id: string,
  displayName: string,
  type: string,
  text: string,
  showDisplayName?: boolean,
  description?: string,
  showDescription?: boolean,
  providerId: string
}
*/

export class Markdown extends Widget {
  text: string;

  constructor (
    id: string,
    displayName: string,
    type: string,
    providerId: string,
    text: string,
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
    this.text = text;
  }

  static fromJson (object: any): Markdown {
    const {
      id,
      displayName,
      type,
      text,
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
      text,
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
      text,
      showDisplayName,
      description,
      showDescription,
      providerId
    } = this;
    return {
      id,
      displayName,
      type,
      text,
      showDisplayName,
      description,
      showDescription,
      providerId
    };
  }

  getData (): void { return; }
  
  render (): JSX.Element {
    return React.createElement('div', null, this.text);
  }
}