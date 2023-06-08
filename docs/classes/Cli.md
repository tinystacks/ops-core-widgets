[@tinystacks/ops-core-widgets](../README.md) / [Exports](../modules.md) / Cli

# Class: Cli

## Hierarchy

- `BaseWidget`

  ↳ **`Cli`**

## Table of contents

### Constructors

- [constructor](Cli.md#constructor)

### Properties

- [childrenIds](Cli.md#childrenids)
- [command](Cli.md#command)
- [commandResult](Cli.md#commandresult)
- [description](Cli.md#description)
- [displayName](Cli.md#displayname)
- [displayOptions](Cli.md#displayoptions)
- [environmentVariables](Cli.md#environmentvariables)
- [hasRun](Cli.md#hasrun)
- [id](Cli.md#id)
- [providerIds](Cli.md#providerids)
- [runOnStart](Cli.md#runonstart)
- [type](Cli.md#type)
- [type](Cli.md#type-1)

### Methods

- [envVarMapper](Cli.md#envvarmapper)
- [getData](Cli.md#getdata)
- [render](Cli.md#render)
- [toJson](Cli.md#tojson)
- [fromJson](Cli.md#fromjson)

## Constructors

### constructor

• **new Cli**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`Cli`](../modules/OpsTypes.md#cli) |

#### Overrides

BaseWidget.constructor

#### Defined in

[src/cli.tsx:21](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/cli.tsx#L21)

## Properties

### childrenIds

• `Optional` **childrenIds**: `string`[]

#### Inherited from

BaseWidget.childrenIds

#### Defined in

node_modules/@tinystacks/ops-core/dist/base-widget.d.ts:11

___

### command

• **command**: `string`

#### Defined in

[src/cli.tsx:15](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/cli.tsx#L15)

___

### commandResult

• **commandResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `stderr` | `string` |
| `stdout` | `string` |

#### Defined in

[src/cli.tsx:17](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/cli.tsx#L17)

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

### environmentVariables

• **environmentVariables**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/cli.tsx:19](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/cli.tsx#L19)

___

### hasRun

• **hasRun**: `boolean`

#### Defined in

[src/cli.tsx:18](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/cli.tsx#L18)

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

### runOnStart

• **runOnStart**: `boolean`

#### Defined in

[src/cli.tsx:16](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/cli.tsx#L16)

___

### type

• **type**: `string`

#### Inherited from

BaseWidget.type

#### Defined in

node_modules/@tinystacks/ops-core/dist/base-widget.d.ts:7

___

### type

▪ `Static` **type**: `string` = `'Cli'`

#### Defined in

[src/cli.tsx:14](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/cli.tsx#L14)

## Methods

### envVarMapper

▸ **envVarMapper**(`envVars`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `envVars` | `Object` |

#### Returns

`string`[]

#### Defined in

[src/cli.tsx:37](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/cli.tsx#L37)

___

### getData

▸ **getData**(`providers?`, `overrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `providers?` | `BaseProvider`[] |
| `overrides?` | `CliOverrides` |

#### Returns

`Promise`<`void`\>

#### Overrides

BaseWidget.getData

#### Defined in

[src/cli.tsx:52](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/cli.tsx#L52)

___

### render

▸ **render**(`_children?`, `overridesCallback?`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_children?` | `any` |
| `overridesCallback?` | (`overrides`: `CliOverrides`) => `void` |

#### Returns

`Element`

#### Overrides

BaseWidget.render

#### Defined in

[src/cli.tsx:101](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/cli.tsx#L101)

___

### toJson

▸ **toJson**(): [`Cli`](../modules/OpsTypes.md#cli)

#### Returns

[`Cli`](../modules/OpsTypes.md#cli)

#### Overrides

BaseWidget.toJson

#### Defined in

[src/cli.tsx:41](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/cli.tsx#L41)

___

### fromJson

▸ `Static` **fromJson**(`object`): [`Cli`](Cli.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`Cli`](../modules/OpsTypes.md#cli) |

#### Returns

[`Cli`](Cli.md)

#### Overrides

BaseWidget.fromJson

#### Defined in

[src/cli.tsx:33](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/cli.tsx#L33)
