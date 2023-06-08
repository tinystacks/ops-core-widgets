[@tinystacks/ops-core-widgets](../README.md) / [Exports](../modules.md) / Panel

# Class: Panel

## Hierarchy

- `BaseWidget`

  ↳ **`Panel`**

## Table of contents

### Constructors

- [constructor](Panel.md#constructor)

### Properties

- [childrenIds](Panel.md#childrenids)
- [description](Panel.md#description)
- [displayName](Panel.md#displayname)
- [displayOptions](Panel.md#displayoptions)
- [id](Panel.md#id)
- [orientation](Panel.md#orientation)
- [providerIds](Panel.md#providerids)
- [type](Panel.md#type)

### Methods

- [getData](Panel.md#getdata)
- [render](Panel.md#render)
- [toJson](Panel.md#tojson)
- [fromJson](Panel.md#fromjson)

## Constructors

### constructor

• **new Panel**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`Panel`](../modules/OpsTypes.md#panel) |

#### Overrides

BaseWidget.constructor

#### Defined in

[src/panel.tsx:10](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/panel.tsx#L10)

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

### orientation

• **orientation**: `string`

#### Defined in

[src/panel.tsx:9](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/panel.tsx#L9)

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

[src/panel.tsx:26](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/panel.tsx#L26)

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

[src/panel.tsx:27](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/panel.tsx#L27)

___

### toJson

▸ **toJson**(): `Object`

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `additionalProperties?` | `any` | - |
| `childrenIds?` | `string`[] | - |
| `description?` | `string` | - |
| `displayName` | `string` | A human-readable display name, usually used to title a widget |
| `displayOptions?` | { `showDescription?`: `boolean` ; `showDisplayName?`: `boolean`  } | - |
| `displayOptions.showDescription?` | `boolean` | Whether to show the description |
| `displayOptions.showDisplayName?` | `boolean` | Whether to show the display name |
| `id` | `string` | Unique Id for this widget. |
| `orientation` | `string` | - |
| `providerIds?` | `string`[] | - |
| `type` | `string` | This describes how this widget should be rendered. The "type" should be equivalent to the Object definition's name of the widget you are trying to render. |

#### Overrides

BaseWidget.toJson

#### Defined in

[src/panel.tsx:19](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/panel.tsx#L19)

___

### fromJson

▸ `Static` **fromJson**(`object`): [`Panel`](Panel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Widget` |

#### Returns

[`Panel`](Panel.md)

#### Overrides

BaseWidget.fromJson

#### Defined in

[src/panel.tsx:15](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/panel.tsx#L15)
