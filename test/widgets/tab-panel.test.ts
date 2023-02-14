import { TabPanel } from '../../src/widgets/tab-panel';
import { Tab } from '../../src/widgets/tab';

describe('fromJson', () => {
  it('creates TabPanel object with provided tabs', () => {
    const mockFromJsonArgs = {
      id: 'test-tab-panel',
      displayName: 'test-tab-panel-display-name',
      type: 'test-tab-panel-type',
      showDisplayName: true,
      description: 'test-tab-panel-description',
      showDescription: true,
      tabs: {
        "test-tab": {
          id: 'test-tab',
          displayName: 'test-tab-display-name',
          type: 'test-tab-type',
          tabDisplayName: 'test-tab-display-name',
          widgetIds: [],
          showDisplayName: true,
          description: 'test-tab-description',
          showDescription: true
        }
      }
    }
     

    const mockTab = new Tab(
      'test-tab',
      'test-tab-display-name',
      'test-tab-type',
      'test-tab-display-name',
      [],
      true,
      'test-tab-description',
      true
    );
    const mockFromJsonResult = new TabPanel(
      'test-tab-panel',
      'test-tab-panel-display-name',
      'test-tab-panel-type',
      true,
      'test-tab-panel-description',
      true,
      {
        'test-tab': mockTab
      }
    );

    const result = TabPanel.fromJson(mockFromJsonArgs);
    expect(result).toBeInstanceOf(TabPanel);
    expect(result).toEqual(mockFromJsonResult);
  });
  it('creates TabPanel object without provided tabs', () => {
    const mockFromJsonArgs = {
      id: 'test-tab-panel',
      displayName: 'test-tab-panel-display-name',
      type: 'test-tab-panel-type',
      showDisplayName: true,
      description: 'test-tab-panel-description',
      showDescription: true
    };

    const mockFromJsonResult = new TabPanel(
      'test-tab-panel',
      'test-tab-panel-display-name',
      'test-tab-panel-type',
      true,
      'test-tab-panel-description',
      true
    );

    const result = TabPanel.fromJson(mockFromJsonArgs);
    expect(result).toBeInstanceOf(TabPanel);
    expect(result).toEqual(mockFromJsonResult);
  });
});

describe('toJson', () => {
  it('creates raw JSON from TabPanel object', () => {
    const mockTab = new Tab(
      'test-tab',
      'test-tab-display-name',
      'test-tab-type',
      'test-tab-display-name',
      [],
      true,
      'test-tab-description',
      true
    );
    const mockTabPanelObject = new TabPanel(
      'test-tab-panel',
      'test-tab-panel-display-name',
      'test-tab-panel-type',
      true,
      'test-tab-panel-description',
      true,
      {
        'test-tab': mockTab
      }
    );

    const mockToJsonResult = {
      id: 'test-tab-panel',
      displayName: 'test-tab-panel-display-name',
      type: 'test-tab-panel-type',
      showDisplayName: true,
      description: 'test-tab-panel-description',
      showDescription: true,
      tabs: {
        "test-tab": {
          id: 'test-tab',
          displayName: 'test-tab-display-name',
          type: 'test-tab-type',
          tabDisplayName: 'test-tab-display-name',
          widgetIds: [],
          showDisplayName: true,
          description: 'test-tab-description',
          showDescription: true,
          providerId: ''
        }
      },
      providerId: ''
    }
    const result = mockTabPanelObject.toJson();
    expect(result).toEqual(mockToJsonResult);
  });
});

describe('getData', () => {
  it('does nothing', () => {
    const mockTab = new Tab(
      'test-tab',
      'test-tab-display-name',
      'test-tab-type',
      'test-tab-display-name',
      [],
      true,
      'test-tab-description',
      true
    );
    const mockTabPanelObject = new TabPanel(
      'test-tab-panel',
      'test-tab-panel-display-name',
      'test-tab-panel-type',
      true,
      'test-tab-panel-description',
      true,
      {
        'test-tab': mockTab
      }
    );

    const result = mockTabPanelObject.getData();
    expect(result).toBeUndefined();
  });
});