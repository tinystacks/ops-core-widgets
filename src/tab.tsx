import { BaseWidget } from '@tinystacks/ops-core';
import { Widget } from '@tinystacks/ops-model';
import React from 'react';

type TabProps = Widget & { tabDisplayName?: string };

export class Tab extends BaseWidget {
  tabDisplayName: string;

  constructor (props: TabProps) {
    super(props);
    this.tabDisplayName = props.tabDisplayName;
  }

  static fromJson (object: TabProps): Tab {
    return new Tab(object);
  }

  toJson (): any {
    return { ...super.toJson, tabDisplayName: this.tabDisplayName };
  }

  getData (): void { return; }
  render (children?: BaseWidget[]): JSX.Element {
    if (!children) {
      throw new Error('Children are not defined!');
    }
    return (
      <div>
        {children.map(c => c.render())}
      </div>
    );
  }
}