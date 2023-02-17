import { Tab } from '../../src/widgets/tab';

describe('fromJson', () => {
  it('creates Tab object with provided widgetIds', () => {
    const mockFromJsonArgs = {
      id: 'test-tab',
      displayName: 'test-tab-display-name',
      type: 'test-tab-type',
      tabDisplayName: 'test-tab-display-name',
      widgetIds: [] as string[],
      showDisplayName: true,
      description: 'test-tab-description',
      showDescription: true
    };


    const mockFromJsonResult = new Tab(
      'test-tab',
      'test-tab-display-name',
      'test-tab-type',
      'test-tab-display-name',
      [],
      true,
      'test-tab-description',
      true
    );

    const result = Tab.fromJson(mockFromJsonArgs);
    expect(result).toBeInstanceOf(Tab);
    expect(result).toEqual(mockFromJsonResult);
  });
  it('creates Tab object without provided widgetIds', () => {
    const mockFromJsonArgs = {
      id: 'test-tab',
      displayName: 'test-tab-display-name',
      type: 'test-tab-type',
      tabDisplayName: 'test-tab-display-name',
      showDisplayName: true,
      description: 'test-tab-description',
      showDescription: true
    };


    const mockFromJsonResult = new Tab(
      'test-tab',
      'test-tab-display-name',
      'test-tab-type',
      'test-tab-display-name',
      [],
      true,
      'test-tab-description',
      true
    );

    const result = Tab.fromJson(mockFromJsonArgs);
    expect(result).toBeInstanceOf(Tab);
    expect(result).toEqual(mockFromJsonResult);
  });
});

describe('toJson', () => {
  it('creates raw JSON from TabPanel object', () => {
    const mockTabObject = new Tab(
      'test-tab',
      'test-tab-display-name',
      'test-tab-type',
      'test-tab-display-name',
      [],
      true,
      'test-tab-description',
      true
    );

    const mockToJsonResult = {
      id: 'test-tab',
      displayName: 'test-tab-display-name',
      type: 'test-tab-type',
      tabDisplayName: 'test-tab-display-name',
      widgetIds: [] as string[],
      showDisplayName: true,
      description: 'test-tab-description',
      showDescription: true,
      providerId: ''
    }
    const result = mockTabObject.toJson();
    expect(result).toEqual(mockToJsonResult);
  });
});

describe('getData', () => {
  it('does nothing', () => {
    const mockTabObject = new Tab(
      'test-tab',
      'test-tab-display-name',
      'test-tab-type',
      'test-tab-display-name',
      [],
      true,
      'test-tab-description',
      true
    );

    const result = mockTabObject.getData();
    expect(result).toBeUndefined();
  });
});