[@tinystacks/ops-core-widgets](../README.md) / [Exports](../modules.md) / GithubCredentialsProvider

# Class: GithubCredentialsProvider

## Hierarchy

- `BaseProvider`

  ↳ **`GithubCredentialsProvider`**

## Implements

- [`CliEnvironmentProvider`](../interfaces/CliEnvironmentProvider.md)
- [`CredentialsProvider`](../interfaces/CredentialsProvider.md)
- [`GithubCredentialsProvider`](../modules/OpsTypes.md#githubcredentialsprovider)

## Table of contents

### Constructors

- [constructor](GithubCredentialsProvider.md#constructor)

### Properties

- [credentials](GithubCredentialsProvider.md#credentials)
- [host](GithubCredentialsProvider.md#host)
- [id](GithubCredentialsProvider.md#id)
- [type](GithubCredentialsProvider.md#type)
- [type](GithubCredentialsProvider.md#type-1)

### Methods

- [getCliEnvironment](GithubCredentialsProvider.md#getclienvironment)
- [getCredentials](GithubCredentialsProvider.md#getcredentials)
- [toJson](GithubCredentialsProvider.md#tojson)
- [fromJson](GithubCredentialsProvider.md#fromjson)

## Constructors

### constructor

• **new GithubCredentialsProvider**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GithubCredentialsProvider`](../modules/OpsTypes.md#githubcredentialsprovider) |

#### Overrides

BaseProvider.constructor

#### Defined in

[src/providers/github-credentials-provider.ts:16](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/providers/github-credentials-provider.ts#L16)

## Properties

### credentials

• **credentials**: [`GithubCredentials`](../modules/OpsTypes.md#githubcredentials)

#### Implementation of

GithubCredentialsProviderType.credentials

#### Defined in

[src/providers/github-credentials-provider.ts:13](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/providers/github-credentials-provider.ts#L13)

___

### host

• `Optional` **host**: `string`

#### Implementation of

GithubCredentialsProviderType.host

#### Defined in

[src/providers/github-credentials-provider.ts:14](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/providers/github-credentials-provider.ts#L14)

___

### id

• **id**: `string`

#### Implementation of

[CredentialsProvider](../interfaces/CredentialsProvider.md).[id](../interfaces/CredentialsProvider.md#id)

#### Inherited from

BaseProvider.id

#### Defined in

node_modules/@tinystacks/ops-core/dist/base-provider.d.ts:3

___

### type

• **type**: `string`

This describes the type of the provider

#### Implementation of

[CredentialsProvider](../interfaces/CredentialsProvider.md).[type](../interfaces/CredentialsProvider.md#type)

#### Inherited from

BaseProvider.type

#### Defined in

node_modules/@tinystacks/ops-core/dist/base-provider.d.ts:4

___

### type

▪ `Static` **type**: `string` = `'GithubCredentialsProvider'`

#### Defined in

[src/providers/github-credentials-provider.ts:12](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/providers/github-credentials-provider.ts#L12)

## Methods

### getCliEnvironment

▸ **getCliEnvironment**(`envVars?`): `OtherProperties`

#### Parameters

| Name | Type |
| :------ | :------ |
| `envVars` | `OtherProperties` |

#### Returns

`OtherProperties`

#### Implementation of

[CliEnvironmentProvider](../interfaces/CliEnvironmentProvider.md).[getCliEnvironment](../interfaces/CliEnvironmentProvider.md#getclienvironment)

#### Defined in

[src/providers/github-credentials-provider.ts:33](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/providers/github-credentials-provider.ts#L33)

___

### getCredentials

▸ **getCredentials**(): [`GithubCredentials`](../modules/OpsTypes.md#githubcredentials)

#### Returns

[`GithubCredentials`](../modules/OpsTypes.md#githubcredentials)

#### Implementation of

[CredentialsProvider](../interfaces/CredentialsProvider.md).[getCredentials](../interfaces/CredentialsProvider.md#getcredentials)

#### Defined in

[src/providers/github-credentials-provider.ts:29](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/providers/github-credentials-provider.ts#L29)

___

### toJson

▸ **toJson**(): `Provider`

#### Returns

`Provider`

#### Inherited from

BaseProvider.toJson

#### Defined in

node_modules/@tinystacks/ops-core/dist/base-provider.d.ts:7

___

### fromJson

▸ `Static` **fromJson**(`object`): [`GithubCredentialsProvider`](GithubCredentialsProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`GithubCredentialsProvider`](../modules/OpsTypes.md#githubcredentialsprovider) |

#### Returns

[`GithubCredentialsProvider`](GithubCredentialsProvider.md)

#### Overrides

BaseProvider.fromJson

#### Defined in

[src/providers/github-credentials-provider.ts:25](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/providers/github-credentials-provider.ts#L25)
