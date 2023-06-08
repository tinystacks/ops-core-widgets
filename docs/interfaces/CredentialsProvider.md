[@tinystacks/ops-core-widgets](../README.md) / [Exports](../modules.md) / CredentialsProvider

# Interface: CredentialsProvider

## Hierarchy

- `Provider`

  ↳ **`CredentialsProvider`**

## Implemented by

- [`GithubCredentialsProvider`](../classes/GithubCredentialsProvider.md)

## Table of contents

### Properties

- [id](CredentialsProvider.md#id)
- [type](CredentialsProvider.md#type)

### Methods

- [getCredentials](CredentialsProvider.md#getcredentials)

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

### getCredentials

▸ **getCredentials**(`...args`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`any`

#### Defined in

[src/providers/credentials-provider.ts:4](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/providers/credentials-provider.ts#L4)
