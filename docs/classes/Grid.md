[@tinystacks/ops-core-widgets](../README.md) / [Exports](../modules.md) / Grid

# Class: Grid

## Hierarchy

- `BaseWidget`

  ↳ **`Grid`**

## Table of contents

### Constructors

- [constructor](Grid.md#constructor)

### Properties

- [childrenIds](Grid.md#childrenids)
- [columns](Grid.md#columns)
- [description](Grid.md#description)
- [displayName](Grid.md#displayname)
- [displayOptions](Grid.md#displayoptions)
- [id](Grid.md#id)
- [providerIds](Grid.md#providerids)
- [type](Grid.md#type)

### Methods

- [getData](Grid.md#getdata)
- [render](Grid.md#render)
- [toJson](Grid.md#tojson)
- [fromJson](Grid.md#fromjson)

## Constructors

### constructor

• **new Grid**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`Grid`](../modules/OpsTypes.md#grid) |

#### Overrides

BaseWidget.constructor

#### Defined in

[src/grid.tsx:10](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/grid.tsx#L10)

## Properties

### childrenIds

• `Optional` **childrenIds**: `string`[]

#### Inherited from

BaseWidget.childrenIds

#### Defined in

node_modules/@tinystacks/ops-core/dist/base-widget.d.ts:11

___

### columns

• **columns**: `number`

#### Defined in

[src/grid.tsx:9](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/grid.tsx#L9)

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

[src/grid.tsx:26](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/grid.tsx#L26)

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

[src/grid.tsx:27](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/grid.tsx#L27)

___

### toJson

▸ **toJson**(): `Object`

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `additionalProperties?` | `any` | - |
| `childrenIds?` | `string`[] | - |
| `columns` | `number` | - |
| `description?` | `string` | - |
| `displayName` | `string` | A human-readable display name, usually used to title a widget |
| `displayOptions?` | { `showDescription?`: `boolean` ; `showDisplayName?`: `boolean`  } | - |
| `displayOptions.showDescription?` | `boolean` | Whether to show the description |
| `displayOptions.showDisplayName?` | `boolean` | Whether to show the display name |
| `id` | `string` | Unique Id for this widget. |
| `providerIds?` | `string`[] | - |
| `type` | `string` | This describes how this widget should be rendered. The "type" should be equivalent to the Object definition's name of the widget you are trying to render. |

#### Overrides

BaseWidget.toJson

#### Defined in

[src/grid.tsx:19](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/grid.tsx#L19)

___

### fromJson

▸ `Static` **fromJson**(`object`): [`Grid`](Grid.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Widget` |

#### Returns

[`Grid`](Grid.md)

#### Overrides

BaseWidget.fromJson

#### Defined in

[src/grid.tsx:15](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/grid.tsx#L15)
