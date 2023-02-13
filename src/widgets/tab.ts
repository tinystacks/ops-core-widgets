import Widget from '../temporary-classes/widget';

/* Holding onto this to replace use of any below
type TabType = {
  id: string;
  displayName: string;
  type: string;
  tabDisplayName: string;
  widgetIds: string[];
  showDisplayName?: boolean;
  description?: string;
  showDescription?: boolean;
  providerId: string;
}
*/

export class Tab extends Widget {
  tabDisplayName: string;
  widgetIds: string[];

  constructor (
    id: string,
    displayName: string,
    type: string,
    tabDisplayName: string,
    widgetIds: string[] = [],
    showDisplayName?: boolean,
    description?: string,
    showDescription?: boolean
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
    this.tabDisplayName = tabDisplayName;
    this.widgetIds = widgetIds;
  }

  static fromJson (object: any): Tab {
    const {
      id,
      displayName,
      type,
      tabDisplayName,
      widgetIds,
      showDisplayName,
      description,
      showDescription
    } = object;
    return new Tab(
      id,
      displayName,
      type,
      tabDisplayName,
      widgetIds,
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
      tabDisplayName,
      widgetIds,
      showDisplayName,
      description,
      showDescription,
      providerId
    } = this;
    return {
      id,
      displayName,
      type,
      tabDisplayName,
      widgetIds,
      showDisplayName,
      description,
      showDescription,
      providerId
    };
  }

  getData (): void { return; }
}