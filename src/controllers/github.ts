import { Octokit } from '@octokit/core';
import { Controllers, Json, Provider } from '@tinystacks/ops-core';
import { GithubCredentialsProvider } from '../core/github-credentials-provider.js';
import { findProvider } from '../utils/find-provider.js';
import { Github as GithubModel } from '../models/github.js';
import { Github as GithubType } from '../ops-types.js';

import WidgetController = Controllers.Widget;

type GithubOverrides = {
  host?: string;
  organization?: string;
  repository?: string;
};

class Github extends GithubModel implements WidgetController {
  static fromJson (object: GithubType, _dependencySource?: string): Github {
    return new Github(object);
  }

  async getData (providers?: Provider[], overrides: GithubOverrides = {}, _parameters?: Json): Promise<void> {
    const {
      organization = this.organization,
      repository = this.repository
    } = overrides;
    
    const githubCredentialsProvider = findProvider<GithubCredentialsProvider>(providers, GithubCredentialsProvider.type);
    const githubToken = githubCredentialsProvider.getCredentials().token;

    
    const githubClient = new Octokit({ auth: githubToken, baseUrl: this.host });

    const actionsResponse = await githubClient.request('GET /repos/{owner}/{repo}/actions/workflows', {
      owner: organization,
      repo: repository,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    const { workflows = [] } = actionsResponse?.data || {};
    
    for (const workflow of workflows) {
      const gqlResponse: any = await githubClient.graphql(
        `query ($NODE_ID: ID!) {
          node(id: $NODE_ID) {
            ... on Workflow {
              name
              url
              runs (first:1) {
                edges {
                  node {
                    id
                    createdAt
                    event
                    checkSuite {
                      conclusion
                      status
                      commit {
                        id
                      }
                    }
                  }
                }
              }
            }
          }
        }`,
        {
          NODE_ID: workflow.node_id
        }
      );
      this.actions.push({
        name: gqlResponse?.node?.name,
        url: gqlResponse?.node?.url,
        status: gqlResponse?.node?.runs?.edges?.at(0)?.node?.checkSuite?.conclusion,
        lastExecuted: gqlResponse?.node?.runs?.edges?.at(0)?.node?.createdAt,
        trigger: gqlResponse?.node?.runs?.edges?.at(0)?.node?.event
      });
    }
  }
}

export {
  Github
};