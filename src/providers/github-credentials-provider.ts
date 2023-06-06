import { BaseProvider } from '@tinystacks/ops-core';
import { OtherProperties } from '@tinystacks/ops-core/dist/types.js';
import { CliEnvironmentProvider } from './cli-environment-provider.js';
import { CredentialsProvider } from './credentials-provider.js';
import {
  GithubCredentials,
  GithubCredentialsProvider as GithubCredentialsProviderType
} from '../ops-types.js';


class GithubCredentialsProvider extends BaseProvider implements CliEnvironmentProvider, CredentialsProvider, GithubCredentialsProviderType {
  static type = 'GithubCredentialsProvider';
  credentials: GithubCredentials;
  host?: string;

  constructor (props: GithubCredentialsProviderType) {
    super({
      ...props,
      type: GithubCredentialsProvider.type
    });
    this.credentials = props.credentials;
    this.host = props.host;
  }

  static fromJson (object: GithubCredentialsProviderType): GithubCredentialsProvider {
    return new GithubCredentialsProvider(object);
  }

  getCredentials (): GithubCredentials {
    return this.credentials;
  }

  getCliEnvironment (envVars: OtherProperties = {}): OtherProperties {
    if (this.host) {
      envVars['GH_HOST'] = this.host;
    }

    if (this.host && !this.host?.includes('github.com')) {
      envVars['GH_ENTERPRISE_TOKEN'] = this.credentials.token;
    } else {
      envVars['GH_TOKEN'] = this.credentials.token;
    }
    return envVars;
  }

}

export {
  GithubCredentialsProvider
};