[@tinystacks/ops-core-widgets](../README.md) / [Exports](../modules.md) / JsonFilter

# Class: JsonFilter

## Hierarchy

- `BaseWidget`

  ↳ **`JsonFilter`**

## Table of contents

### Constructors

- [constructor](JsonFilter.md#constructor)

### Properties

- [childrenIds](JsonFilter.md#childrenids)
- [description](JsonFilter.md#description)
- [displayName](JsonFilter.md#displayname)
- [displayOptions](JsonFilter.md#displayoptions)
- [filteredJson](JsonFilter.md#filteredjson)
- [id](JsonFilter.md#id)
- [jsonObject](JsonFilter.md#jsonobject)
- [paths](JsonFilter.md#paths)
- [providerIds](JsonFilter.md#providerids)
- [type](JsonFilter.md#type)
- [type](JsonFilter.md#type-1)

### Methods

- [getData](JsonFilter.md#getdata)
- [render](JsonFilter.md#render)
- [toJson](JsonFilter.md#tojson)
- [fromJson](JsonFilter.md#fromjson)

## Constructors

### constructor

• **new JsonFilter**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`JsonFilter`](../modules/OpsTypes.md#jsonfilter) |

#### Overrides

BaseWidget.constructor

#### Defined in

[src/json-filter.tsx:21](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/json-filter.tsx#L21)

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

### filteredJson

• **filteredJson**: { `json`: `string` ; `pathDisplayName`: `string`  }[]

#### Defined in

[src/json-filter.tsx:15](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/json-filter.tsx#L15)

___

### id

• **id**: `string`

#### Inherited from

BaseWidget.id

#### Defined in

node_modules/@tinystacks/ops-core/dist/base-widget.d.ts:6

___

### jsonObject

• **jsonObject**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[src/json-filter.tsx:10](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/json-filter.tsx#L10)

___

### paths

• **paths**: { `path`: `string` ; `pathDisplayName`: `string`  }[]

#### Defined in

[src/json-filter.tsx:11](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/json-filter.tsx#L11)

___

### providerIds

• `Optional` **providerIds**: `string`[]

#### Inherited from

BaseWidget.providerIds

#### Defined in

node_modules/@tinystacks/ops-core/dist/base-widget.d.ts:10

___

### type

• **type**: `string`

#### Inherited from

BaseWidget.type

#### Defined in

node_modules/@tinystacks/ops-core/dist/base-widget.d.ts:7

___

### type

▪ `Static` **type**: `string` = `'JsonFilter'`

#### Defined in

[src/json-filter.tsx:9](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/json-filter.tsx#L9)

## Methods

### getData

▸ **getData**(): `void`

#### Returns

`void`

#### Overrides

BaseWidget.getData

#### Defined in

[src/json-filter.tsx:43](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/json-filter.tsx#L43)

___

### render

▸ **render**(): `Element`

#### Returns

`Element`

#### Overrides

BaseWidget.render

#### Defined in

[src/json-filter.tsx:67](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/json-filter.tsx#L67)

___

### toJson

▸ **toJson**(): [`JsonFilter`](../modules/OpsTypes.md#jsonfilter)

#### Returns

[`JsonFilter`](../modules/OpsTypes.md#jsonfilter)

#### Overrides

BaseWidget.toJson

#### Defined in

[src/json-filter.tsx:33](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/json-filter.tsx#L33)

___

### fromJson

▸ `Static` **fromJson**(`object`): [`JsonFilter`](JsonFilter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`JsonFilter`](../modules/OpsTypes.md#jsonfilter) |

#### Returns

[`JsonFilter`](JsonFilter.md)

#### Overrides

BaseWidget.fromJson

#### Defined in

[src/json-filter.tsx:28](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/json-filter.tsx#L28)
