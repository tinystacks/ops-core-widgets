import { Models } from '@tinystacks/ops-core';
import { GithubAction, Github as GithubType } from '../ops-types.js';

import Widget = Models.Widget;

class Github extends Widget implements GithubType {
  host?: string;
  organization: string;
  repository: string;
  actions?: GithubAction[];

  constructor (props: GithubType) {
    super(props);
    const {
      host,
      organization,
      repository,
      actions
    } = props;
    this.host = host;
    this.organization = organization;
    this.repository = repository;
    this.actions = actions || [];
  }

  static fromJson (object: GithubType, _dependencySource?: string): Github {
    return new Github(object);
  }

  toJson (): GithubType {
    return {
      ...super.toJson(),
      host: this.host,
      organization: this.organization,
      repository: this.repository,
      actions: this.actions
    };
  }
}

export {
  Github
};