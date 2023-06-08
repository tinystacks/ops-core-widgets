[@tinystacks/ops-core-widgets](../README.md) / [Exports](../modules.md) / Tabs

# Class: Tabs

## Hierarchy

- `BaseWidget`

  ↳ **`Tabs`**

## Table of contents

### Constructors

- [constructor](Tabs.md#constructor)

### Properties

- [childrenIds](Tabs.md#childrenids)
- [description](Tabs.md#description)
- [displayName](Tabs.md#displayname)
- [displayOptions](Tabs.md#displayoptions)
- [id](Tabs.md#id)
- [providerIds](Tabs.md#providerids)
- [tabNames](Tabs.md#tabnames)
- [type](Tabs.md#type)

### Methods

- [getData](Tabs.md#getdata)
- [render](Tabs.md#render)
- [toJson](Tabs.md#tojson)
- [fromJson](Tabs.md#fromjson)

## Constructors

### constructor

• **new Tabs**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`Tabs`](../modules/OpsTypes.md#tabs) |

#### Overrides

BaseWidget.constructor

#### Defined in

[src/tabs.tsx:13](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/tabs.tsx#L13)

## Properties

### childrenIds

• `Optional` **childrenIds**: `string`[]

#### Inherited from

BaseWidget.childrenIds

#### Defined in

node_modules/@tinystacks/ops-core/dist/base-widget.d.ts:11

___

### description

• `Optional` **description**: `string`

#### Inherited from

BaseWidget.description

#### Defined in

node_modules/@tinystacks/ops-core/dist/base-widget.d.ts:12

___

### displayName

• **displayName**: `string`

#### Inherited from

BaseWidget.displayName

#### Defined in

node_modules/@tinystacks/ops-core/dist/base-widget.d.ts:8

___

### displayOptions

• `Optional` **displayOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `showDescription?` | `boolean` | Whether to show the description |
| `showDisplayName?` | `boolean` | Whether to show the display name |

#### Inherited from

BaseWidget.displayOptions

#### Defined in

node_modules/@tinystacks/ops-core/dist/base-widget.d.ts:9

___

### id

• **id**: `string`

#### Inherited from

BaseWidget.id

#### Defined in

node_modules/@tinystacks/ops-core/dist/base-widget.d.ts:6

___

### providerIds

• `Optional` **providerIds**: `string`[]

#### Inherited from

BaseWidget.providerIds

#### Defined in

node_modules/@tinystacks/ops-core/dist/base-widget.d.ts:10

___

### tabNames

• **tabNames**: `string`[]

#### Defined in

[src/tabs.tsx:12](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/tabs.tsx#L12)

___

### type

• **type**: `string`

#### Inherited from

BaseWidget.type

#### Defined in

node_modules/@tinystacks/ops-core/dist/base-widget.d.ts:7

## Methods

### getData

▸ **getData**(): `void`

#### Returns

`void`

#### Overrides

BaseWidget.getData

#### Defined in

[src/tabs.tsx:26](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/tabs.tsx#L26)

___

### render

▸ **render**(`children?`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `children?` | `Widget` & { `renderedElement`: `Element`  }[] |

#### Returns

`Element`

#### Overrides

BaseWidget.render

#### Defined in

[src/tabs.tsx:28](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/tabs.tsx#L28)

___

### toJson

▸ **toJson**(): [`Tabs`](../modules/OpsTypes.md#tabs)

#### Returns

[`Tabs`](../modules/OpsTypes.md#tabs)

#### Overrides

BaseWidget.toJson

#### Defined in

[src/tabs.tsx:22](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/tabs.tsx#L22)

___

### fromJson

▸ `Static` **fromJson**(`object`): [`Tabs`](Tabs.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Widget` |

#### Returns

[`Tabs`](Tabs.md)

#### Overrides

BaseWidget.fromJson

#### Defined in

[src/tabs.tsx:18](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/tabs.tsx#L18)
