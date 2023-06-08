[@tinystacks/ops-core-widgets](../README.md) / [Exports](../modules.md) / OpsTypes

# Namespace: OpsTypes

## Table of contents

### Type Aliases

- [Cli](OpsTypes.md#cli)
- [Github](OpsTypes.md#github)
- [GithubAction](OpsTypes.md#githubaction)
- [GithubCredentials](OpsTypes.md#githubcredentials)
- [GithubCredentialsProvider](OpsTypes.md#githubcredentialsprovider)
- [Grid](OpsTypes.md#grid)
- [JsonFilter](OpsTypes.md#jsonfilter)
- [Markdown](OpsTypes.md#markdown)
- [Panel](OpsTypes.md#panel)
- [Tabs](OpsTypes.md#tabs)

## Type Aliases

### Cli

Ƭ **Cli**: `Widget` & { `command`: `string` ; `commandResult?`: { `stderr`: `string` ; `stdout`: `string`  } ; `environmentVariables?`: { `[key: string]`: `string`;  } ; `hasRun?`: `boolean` ; `runOnStart?`: `boolean`  }

#### Defined in

[src/ops-types.ts:15](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/ops-types.ts#L15)

___

### Github

Ƭ **Github**: `Widget` & { `actions?`: [`GithubAction`](OpsTypes.md#githubaction)[] ; `host?`: `string` ; `organization`: `string` ; `repository`: `string`  }

#### Defined in

[src/ops-types.ts:31](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/ops-types.ts#L31)

___

### GithubAction

Ƭ **GithubAction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lastExecuted` | `Date` |
| `name` | `string` |
| `status` | `string` |
| `trigger` | `string` |
| `url` | `string` |

#### Defined in

[src/ops-types.ts:23](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/ops-types.ts#L23)

___

### GithubCredentials

Ƭ **GithubCredentials**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Defined in

[src/ops-types.ts:3](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/ops-types.ts#L3)

___

### GithubCredentialsProvider

Ƭ **GithubCredentialsProvider**: `Provider` & { `credentials`: [`GithubCredentials`](OpsTypes.md#githubcredentials) ; `host?`: `string`  }

#### Defined in

[src/ops-types.ts:7](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/ops-types.ts#L7)

___

### Grid

Ƭ **Grid**: `Widget` & { `columns?`: `number`  }

#### Defined in

[src/ops-types.ts:38](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/ops-types.ts#L38)

___

### JsonFilter

Ƭ **JsonFilter**: `Widget` & { `filteredJson?`: { `json`: `any` ; `pathDisplayName`: `string`  }[] ; `jsonObject`: { `[key: string]`: `any`;  } ; `paths`: { `path`: `string` ; `pathDisplayName`: `string`  }[]  }

#### Defined in

[src/ops-types.ts:40](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/ops-types.ts#L40)

___

### Markdown

Ƭ **Markdown**: `Widget` & { `markdown`: `string`  }

#### Defined in

[src/ops-types.ts:52](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/ops-types.ts#L52)

___

### Panel

Ƭ **Panel**: `Widget` & { `orientation?`: ``"horizontal"`` \| ``"vertical"``  }

#### Defined in

[src/ops-types.ts:54](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/ops-types.ts#L54)

___

### Tabs

Ƭ **Tabs**: `Widget` & { `tabNames?`: `string`[]  }

#### Defined in

[src/ops-types.ts:56](https://github.com/tinystacks/ops-core-widgets/blob/cdfd6a3/src/ops-types.ts#L56)
