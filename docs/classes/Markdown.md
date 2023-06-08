[@tinystacks/ops-core-widgets](../README.md) / [Exports](../modules.md) / Markdown

# Class: Markdown

## Hierarchy

- `BaseWidget`

  ↳ **`Markdown`**

## Table of contents

### Constructors

- [constructor](Markdown.md#constructor)

### Properties

- [childrenIds](Markdown.md#childrenids)
- [description](Markdown.md#description)
- [displayName](Markdown.md#displayname)
- [displayOptions](Markdown.md#displayoptions)
- [id](Markdown.md#id)
- [markdown](Markdown.md#markdown)
- [providerIds](Markdown.md#providerids)
- [type](Markdown.md#type)

### Methods

- [getData](Markdown.md#getdata)
- [render](Markdown.md#render)
- [toJson](Markdown.md#tojson)
- [fromJson](Markdown.md#fromjson)

## Constructors

### constructor

• **new Markdown**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`Markdown`](../modules/OpsTypes.md#markdown) |

#### Overrides

BaseWidget.constructor

#### Defined in

[src/markdown.tsx:11](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/markdown.tsx#L11)

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

### markdown

• **markdown**: `string`

#### Defined in

[src/markdown.tsx:9](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/markdown.tsx#L9)

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

## Methods

### getData

▸ **getData**(): `void`

#### Returns

`void`

#### Overrides

BaseWidget.getData

#### Defined in

[src/markdown.tsx:24](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/markdown.tsx#L24)

___

### render

▸ **render**(): `Element`

#### Returns

`Element`

#### Overrides

BaseWidget.render

#### Defined in

[src/markdown.tsx:26](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/markdown.tsx#L26)

___

### toJson

▸ **toJson**(): `any`

#### Returns

`any`

#### Overrides

BaseWidget.toJson

#### Defined in

[src/markdown.tsx:20](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/markdown.tsx#L20)

___

### fromJson

▸ `Static` **fromJson**(`object`): [`Markdown`](Markdown.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`Markdown`](../modules/OpsTypes.md#markdown) |

#### Returns

[`Markdown`](Markdown.md)

#### Overrides

BaseWidget.fromJson

#### Defined in

[src/markdown.tsx:16](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/markdown.tsx#L16)
