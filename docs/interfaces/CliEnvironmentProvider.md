[@tinystacks/ops-core-widgets](../README.md) / [Exports](../modules.md) / CliEnvironmentProvider

# Interface: CliEnvironmentProvider

## Hierarchy

- `Provider`

  ↳ **`CliEnvironmentProvider`**

## Implemented by

- [`GithubCredentialsProvider`](../classes/GithubCredentialsProvider.md)

## Table of contents

### Properties

- [id](CliEnvironmentProvider.md#id)
- [type](CliEnvironmentProvider.md#type)

### Methods

- [getCliEnvironment](CliEnvironmentProvider.md#getclienvironment)

## Properties

### id

• **id**: `string`

#### Inherited from

Provider.id

#### Defined in

node_modules/@tinystacks/ops-model/dist/models/Provider.d.ts:2

___

### type

• **type**: `string`

This describes the type of the provider

#### Inherited from

Provider.type

#### Defined in

node_modules/@tinystacks/ops-model/dist/models/Provider.d.ts:6

## Methods

### getCliEnvironment

▸ **getCliEnvironment**(`...args`): { `[key: string]`: `string`;  } \| `Promise`<{ `[key: string]`: `string`;  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

{ `[key: string]`: `string`;  } \| `Promise`<{ `[key: string]`: `string`;  }\>

#### Defined in

[src/providers/cli-environment-provider.ts:4](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/providers/cli-environment-provider.ts#L4)
