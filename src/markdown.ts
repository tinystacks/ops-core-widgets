import { Markdown as MarkdownType } from '@tinystacks/ops-model';
import Widget from './temporary-classes/widget';

class Markdown extends Widget implements MarkdownType {
  text: string;

  constructor (
    id: string,
    displayName: string,
    type: string,
    text: string,
    showDisplayName?: boolean,
    description?: string,
    showDescription?: boolean
  ) {
    super(
      id,
      displayName,
      type,
      undefined,
      showDisplayName,
      description,
      showDescription
    );
    this.text = text;
  }

  static fromJson (object: MarkdownType): Markdown {
    const {
      id,
      displayName,
      type,
      text,
      showDisplayName,
      description,
      showDescription
    } = object;
    return new Markdown(
      id,
      displayName,
      type,
      text,
      showDisplayName,
      description,
      showDescription
    );
  }

  toJson (): MarkdownType {
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
}

export default Markdown;