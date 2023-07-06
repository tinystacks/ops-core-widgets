import { GithubCredentialsProvider } from '../../src/core/github-credentials-provider';
import { GithubCredentialsProvider as GithubCredentialsProviderType } from '../../src/ops-types';

describe('GithubCredentialsProvider', () => {
  it('fromJson', () => {
    const input: GithubCredentialsProviderType = {
      credentials: {
        token: 'mock-token'
      },
      id: 'my-gh-provider',
      type: 'GithubCredentialsProvider',
      host: 'github.com'
    };

    const ghProvider = GithubCredentialsProvider.fromJson(input);

    expect(ghProvider instanceof GithubCredentialsProvider).toBe(true);
    expect(ghProvider).toHaveProperty('id', 'my-gh-provider');
    expect(ghProvider).toHaveProperty('type', 'GithubCredentialsProvider');
    expect(ghProvider).toHaveProperty('host', 'github.com');
    expect(ghProvider).toHaveProperty('credentials', {
      token: 'mock-token'
    });
  });
  it('getCredentials', () => {
    const input: GithubCredentialsProviderType = {
      credentials: {
        token: 'mock-token'
      },
      id: 'my-gh-provider',
      type: 'GithubCredentialsProvider'
    };

    const ghProvider = GithubCredentialsProvider.fromJson(input);

    const creds = ghProvider.getCredentials();

    expect(creds).toHaveProperty('token', 'mock-token');
  });
  describe('getCliEnvironment', () => {
    it('no host', () => {
      const input: GithubCredentialsProviderType = {
        credentials: {
          token: 'mock-token'
        },
        id: 'my-gh-provider',
        type: 'GithubCredentialsProvider'
      };
  
      const ghProvider = GithubCredentialsProvider.fromJson(input);

      const cliEnv = ghProvider.getCliEnvironment();

      expect(cliEnv).toEqual({
        GH_TOKEN: 'mock-token'
      });
    });
    it('specified host', () => {
      const input: GithubCredentialsProviderType = {
        credentials: {
          token: 'mock-token'
        },
        id: 'my-gh-provider',
        type: 'GithubCredentialsProvider',
        host: 'api.github.com'
      };
  
      const ghProvider = GithubCredentialsProvider.fromJson(input);

      const cliEnv = ghProvider.getCliEnvironment();

      expect(cliEnv).toEqual({
        GH_HOST: 'api.github.com',
        GH_TOKEN: 'mock-token'
      });
    });
    it('github enterprise host', () => {
      const input: GithubCredentialsProviderType = {
        credentials: {
          token: 'mock-token'
        },
        id: 'my-gh-provider',
        type: 'GithubCredentialsProvider',
        host: 'my-company.ghe.com'
      };
  
      const ghProvider = GithubCredentialsProvider.fromJson(input);

      const cliEnv = ghProvider.getCliEnvironment();

      expect(cliEnv).toEqual({
        GH_HOST: 'my-company.ghe.com',
        GH_ENTERPRISE_TOKEN: 'mock-token'
      });
    });
  });
});