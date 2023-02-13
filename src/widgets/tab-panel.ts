import Widget from '../temporary-classes/widget';
import { Tab } from './tab';

/* Holding onto this to replace use of any below
type TabPanelType = {
  id: string;
  displayName: string;
  type: string;
  showDisplayName?: boolean;
  description?: string;
  showDescription?: boolean;
  tabs: {
    [id: string]: TabType
  };
}
*/

export class TabPanel extends Widget {
  tabs: {
    [id: string]: Tab
  };

  constructor (
    id: string,
    displayName: string,
    type: string,
    showDisplayName?: boolean,
    description?: string,
    showDescription?: boolean,
    tabs: {
      [id: string]: Tab
    } = {}
  ) {
    super(
      id,
      displayName,
      type,
      '',
      showDisplayName,
      description,
      showDescription
    );
    this.tabs = tabs;
  }

  static fromJson (object: any): TabPanel {
    const {
      id,
      displayName,
      type,
      showDisplayName,
      description,
      showDescription,
      tabs: tabsObject = {}
    } = object;
    const tabs = Object.entries(tabsObject).reduce<{ [id: string]: Tab }>((acc, [id, tabObject]) => {
      acc[id] = Tab.fromJson(tabObject);
      return acc;
    }, {});
    return new TabPanel(
      id,
      displayName,
      type,
      showDisplayName,
      description,
      showDescription,
      tabs
    );
  }

  toJson (): any {
    const tabs = Object.entries(this.tabs).reduce<{ [id: string]: any }>((acc, [id, tab]) => {
      acc[id] = tab.toJson();
      return acc;
    }, {});

    const {
      id,
      displayName,
      type,
      showDisplayName,
      description,
      showDescription,
      providerId
    } = this;
    return {
      id,
      displayName,
      type,
      showDisplayName,
      description,
      showDescription,
      providerId,
      tabs
    };
  }

  getData (): void { return; }
}