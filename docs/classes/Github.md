[@tinystacks/ops-core-widgets](../README.md) / [Exports](../modules.md) / Github

# Class: Github

## Hierarchy

- `BaseWidget`

  ↳ **`Github`**

## Implements

- [`Github`](../modules/OpsTypes.md#github)

## Table of contents

### Constructors

- [constructor](Github.md#constructor)

### Properties

- [actions](Github.md#actions)
- [childrenIds](Github.md#childrenids)
- [description](Github.md#description)
- [displayName](Github.md#displayname)
- [displayOptions](Github.md#displayoptions)
- [host](Github.md#host)
- [id](Github.md#id)
- [organization](Github.md#organization)
- [providerIds](Github.md#providerids)
- [repository](Github.md#repository)
- [type](Github.md#type)

### Methods

- [getData](Github.md#getdata)
- [render](Github.md#render)
- [toJson](Github.md#tojson)
- [fromJson](Github.md#fromjson)

## Constructors

### constructor

• **new Github**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`Github`](../modules/OpsTypes.md#github) |

#### Overrides

BaseWidget.constructor

#### Defined in

[src/github.tsx:37](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/github.tsx#L37)

## Properties

### actions

• `Optional` **actions**: [`GithubAction`](../modules/OpsTypes.md#githubaction)[]

#### Implementation of

GithubType.actions

#### Defined in

[src/github.tsx:35](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/github.tsx#L35)

___

### childrenIds

• `Optional` **childrenIds**: `string`[]

#### Implementation of

GithubType.childrenIds

#### Inherited from

BaseWidget.childrenIds

#### Defined in

node_modules/@tinystacks/ops-core/dist/base-widget.d.ts:11

___

### description

• `Optional` **description**: `string`

#### Implementation of

GithubType.description

#### Inherited from

BaseWidget.description

#### Defined in

node_modules/@tinystacks/ops-core/dist/base-widget.d.ts:12

___

### displayName

• **displayName**: `string`

#### Implementation of

GithubType.displayName

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

#### Implementation of

GithubType.displayOptions

#### Inherited from

BaseWidget.displayOptions

#### Defined in

node_modules/@tinystacks/ops-core/dist/base-widget.d.ts:9

___

### host

• `Optional` **host**: `string`

#### Implementation of

GithubType.host

#### Defined in

[src/github.tsx:32](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/github.tsx#L32)

___

### id

• **id**: `string`

#### Implementation of

GithubType.id

#### Inherited from

BaseWidget.id

#### Defined in

node_modules/@tinystacks/ops-core/dist/base-widget.d.ts:6

___

### organization

• **organization**: `string`

#### Implementation of

GithubType.organization

#### Defined in

[src/github.tsx:33](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/github.tsx#L33)

___

### providerIds

• `Optional` **providerIds**: `string`[]

#### Implementation of

GithubType.providerIds

#### Inherited from

BaseWidget.providerIds

#### Defined in

node_modules/@tinystacks/ops-core/dist/base-widget.d.ts:10

___

### repository

• **repository**: `string`

#### Implementation of

GithubType.repository

#### Defined in

[src/github.tsx:34](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/github.tsx#L34)

___

### type

• **type**: `string`

#### Implementation of

GithubType.type

#### Inherited from

BaseWidget.type

#### Defined in

node_modules/@tinystacks/ops-core/dist/base-widget.d.ts:7

## Methods

### getData

▸ **getData**(`providers?`, `overrides?`, `_parameters?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `providers?` | `BaseProvider`[] |
| `overrides` | `GithubOverrides` |
| `_parameters?` | `OtherProperties` |

#### Returns

`Promise`<`void`\>

#### Overrides

BaseWidget.getData

#### Defined in

[src/github.tsx:65](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/github.tsx#L65)

___

### render

▸ **render**(`_children?`, `_overridesCallback?`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_children?` | `Widget` & { `renderedElement`: `Element`  }[] |
| `_overridesCallback?` | (`overrides`: `any`) => `void` |

#### Returns

`Element`

#### Overrides

BaseWidget.render

#### Defined in

[src/github.tsx:126](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/github.tsx#L126)

___

### toJson

▸ **toJson**(): [`Github`](../modules/OpsTypes.md#github)

#### Returns

[`Github`](../modules/OpsTypes.md#github)

#### Overrides

BaseWidget.toJson

#### Defined in

[src/github.tsx:55](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/github.tsx#L55)

___

### fromJson

▸ `Static` **fromJson**(`object`, `_dependencySource?`): [`Github`](Github.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`Github`](../modules/OpsTypes.md#github) |
| `_dependencySource?` | `string` |

#### Returns

[`Github`](Github.md)

#### Overrides

BaseWidget.fromJson

#### Defined in

[src/github.tsx:51](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/github.tsx#L51)
