import { jest } from '@jest/globals';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const mockOctokit = jest.fn();
const mockRequest: jest.Mock<any> = jest.fn();
const mockGraphql: jest.Mock<any> = jest.fn();

jest.unstable_mockModule('@octokit/core', () => ({
  Octokit: mockOctokit
}));

const mockDayJs = jest.fn();
const mockFormat = jest.fn();

jest.mock('dayjs', () => mockDayJs)

const { Github } = await import('../src/github');
const { GithubCredentialsProvider } = await import('../src/providers/github-credentials-provider');

describe('Github', () => {
  beforeEach(() => {
    mockOctokit.mockReturnValue({
      request: mockRequest,
      graphql: mockGraphql
    });
    mockDayJs.mockReturnValue({
      format: mockFormat
    });
    mockFormat.mockReturnValue('5/30/2023 10:45AM');
  });
  afterEach(() => {
    cleanup();
    // for mocks
    jest.resetAllMocks();

    // for spies
    jest.restoreAllMocks();
  });

  it('fromJson', () => {
    const githubWidget = Github.fromJson({
      id: 'GithubWidget',
      type: 'Github',
      displayName: 'Github Widget',
      organization: 'mock-org',
      repository: 'mock-repo'
    });

    expect(githubWidget instanceof Github).toBe(true);
    expect(githubWidget).toHaveProperty('id');
    expect(githubWidget).toHaveProperty('type');
    expect(githubWidget).toHaveProperty('displayName');
    expect(githubWidget).toHaveProperty('organization');
    expect(githubWidget).toHaveProperty('repository');
    expect(githubWidget).toHaveProperty('toJson');
    expect(githubWidget).toHaveProperty('getData');
    expect(githubWidget).toHaveProperty('render');
  });
  it('toJson', () => {
    const githubWidget = Github.fromJson({
      id: 'GithubWidget',
      type: 'Github',
      displayName: 'Github Widget',
      organization: 'mock-org',
      repository: 'mock-repo'
    });

    const githubWidgetJson = githubWidget.toJson();

    expect(githubWidgetJson instanceof Github).toBe(false);
    expect(githubWidgetJson).not.toHaveProperty('fromJson');
    expect(githubWidgetJson).not.toHaveProperty('toJson');
    expect(githubWidgetJson).not.toHaveProperty('getData');
    expect(githubWidgetJson).not.toHaveProperty('render');
    
    expect(githubWidgetJson).toHaveProperty('id');
    expect(githubWidgetJson).toHaveProperty('type');
    expect(githubWidgetJson).toHaveProperty('displayName');
    expect(githubWidgetJson).toHaveProperty('organization');
    expect(githubWidgetJson).toHaveProperty('repository');
  });
  it('getData', async () => {
    mockRequest.mockResolvedValueOnce({
      data: {
        workflows: [
          {
            node_id: 'mock-node-id'
          }
        ]
      }
    });
    mockGraphql.mockResolvedValueOnce({
      node: {
        name: 'Mock Action',
        url: 'https://github.com/mock-org/mock-repo/actions/workflows/mock-action.yml',
        runs: {
          edges: [
            {
              node: {
                event: 'push',
                createdAt: '2023-05-30T10:45:00.000-05:00',
                checkSuite: {
                  conclusion: 'SUCCESS'
                }
              }
            }
          ]
        }
      }
    });
    const githubProvider = new GithubCredentialsProvider({
      id: 'GithubProvider',
      type: GithubCredentialsProvider.type,
      credentials: {
        token: 'mock-token'
      }
    });

    const githubWidget = Github.fromJson({
      id: 'GithubWidget',
      type: 'Github',
      displayName: 'Github Widget',
      organization: 'mock-org',
      repository: 'mock-repo'
    });

    await githubWidget.getData([githubProvider]);

    expect(mockOctokit).toBeCalled();
    expect(mockOctokit).toBeCalledWith({ auth: 'mock-token' });
    
    expect(mockRequest).toBeCalled();
    expect(mockRequest).toBeCalledWith(
      'GET /repos/{owner}/{repo}/actions/workflows',
      {
        owner: 'mock-org',
        repo: 'mock-repo',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      }
    );

    expect(mockGraphql).toBeCalled();
    expect(mockGraphql).toBeCalledWith(
      expect.any(String),
      {
        NODE_ID: 'mock-node-id'
      }
    );
  });
  it('render', async () => {
    mockRequest.mockResolvedValueOnce({
      data: {
        workflows: [
          {
            node_id: 'mock-node-id'
          }
        ]
      }
    });
    mockGraphql.mockResolvedValueOnce({
      node: {
        name: 'Mock Action',
        url: 'https://github.com/mock-org/mock-repo/actions/workflows/mock-action.yml',
        runs: {
          edges: [
            {
              node: {
                event: 'push',
                createdAt: '2023-05-30T10:45:00.000-05:00',
                checkSuite: {
                  conclusion: 'SUCCESS'
                }
              }
            }
          ]
        }
      }
    });
    const githubProvider = new GithubCredentialsProvider({
      id: 'GithubProvider',
      type: GithubCredentialsProvider.type,
      credentials: {
        token: 'mock-token'
      }
    });

    const githubWidget = Github.fromJson({
      id: 'GithubWidget',
      type: 'Github',
      displayName: 'Github Widget',
      organization: 'mock-org',
      repository: 'mock-repo'
    });

    await githubWidget.getData([githubProvider]);

    const renderedGithubWidget = githubWidget.render();
    render(renderedGithubWidget);
    expect(screen.getByText('Mock Action')).toBeInTheDocument();
    expect(screen.getByText('SUCCESS')).toBeInTheDocument();
    expect(screen.getByText('5/30/2023 10:45AM')).toBeInTheDocument();
    expect(screen.getByText('push')).toBeInTheDocument();
  });
});