import { findProvider } from '../../src/utils/find-provider.js';
import { GithubCredentialsProvider } from '../../src/providers/github-credentials-provider.js';
import { BaseProvider } from '@tinystacks/ops-core';
import { MockProvider } from '../mocks/MockProvider.js';

describe('findProvider', () => {
  it('throws if providers are empty', () => {
    let thrownError;
    try {
      findProvider([], 'MockProvider');
    } catch (error) {
      thrownError = error;
    } finally {
      expect(thrownError).toHaveProperty('name', 'TinyStacksError');
      expect(thrownError).toHaveProperty('type', 'Validation');
      expect(thrownError).toHaveProperty('status', 400);
      expect(thrownError).toHaveProperty('message', 'No providers are available!');
    }
  });
  it('throws if there is not provider that matches the type', () => {
    let thrownError;
    try {
      const githubProvider = new GithubCredentialsProvider({
        id: 'GithubProvider',
        type: GithubCredentialsProvider.type,
        credentials: {
          token: 'mock-token'
        }
      });
      findProvider([githubProvider], 'MockProvider');
    } catch (error) {
      thrownError = error;
    } finally {
      expect(thrownError).toHaveProperty('name', 'TinyStacksError');
      expect(thrownError).toHaveProperty('type', 'Validation');
      expect(thrownError).toHaveProperty('status', 400);
      expect(thrownError).toHaveProperty('message', 'No MockProviders are available!');
    }
  });
  it('returns the first found provider that matches the type', () => {
    const githubProvider = new GithubCredentialsProvider({
      id: 'GithubProvider',
      type: GithubCredentialsProvider.type,
      credentials: {
        token: 'mock-token'
      }
    });
    const otherProvider: MockProvider = new MockProvider({
      id: 'MockProvider',
      type: MockProvider.type
    });
    const githubProvider2 = new GithubCredentialsProvider({
      id: 'GithubProvider2',
      type: GithubCredentialsProvider.type,
      credentials: {
        token: 'mock-token'
      }
    });
    const provider = findProvider([otherProvider, githubProvider, githubProvider2], 'GithubCredentialsProvider');

    expect(provider).toEqual(githubProvider);
  });

});