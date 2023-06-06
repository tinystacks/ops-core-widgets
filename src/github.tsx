import React from 'react';
import dayjs from 'dayjs';
import { Octokit } from '@octokit/core';
import { BaseProvider, BaseWidget } from '@tinystacks/ops-core';
import { OtherProperties } from '@tinystacks/ops-core/dist/types';
import { Widget } from '@tinystacks/ops-model';
import {
  SimpleGrid,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Text,
  Link,
  Td
} from '@chakra-ui/react';
import { GithubCredentialsProvider } from './providers/github-credentials-provider.js';
import { findProvider } from './utils/find-provider.js';
import KeyValueStat from './components/key-value-stat.js';
import { GithubAction, Github as GithubType } from './ops-types.js';

type GithubOverrides = {
  host?: string;
  organization?: string;
  repository?: string;
};

class Github extends BaseWidget implements GithubType {
  host?: string;
  organization: string;
  repository: string;
  actions?: GithubAction[];

  constructor (props: GithubType) {
    super(props);
    const {
      host,
      organization,
      repository,
      actions
    } = props;
    this.host = host;
    this.organization = organization;
    this.repository = repository;
    this.actions = actions || [];
  }

  static fromJson (object: GithubType, _dependencySource?: string): Github {
    return new Github(object);
  }

  toJson (): GithubType {
    return {
      ...super.toJson(),
      host: this.host,
      organization: this.organization,
      repository: this.repository,
      actions: this.actions
    };
  }

  async getData (providers?: BaseProvider[], overrides: GithubOverrides = {}, _parameters?: OtherProperties): Promise<void> {
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
  render (_children?: (Widget & { renderedElement: JSX.Element; })[], _overridesCallback?: (overrides: any) => void): JSX.Element {
    return (
      <Stack p='20px' w='100%'>
        <SimpleGrid columns={4} spacing={10}>
          <KeyValueStat
            label='Organization'
            value={this.organization}
            href={`https://${this.host || 'github.com'}/${this.organization}`}
          />
          <KeyValueStat
            label='Repository'
            value={this.repository}
            href={`https://${this.host || 'github.com'}/${this.organization}/${this.repository}`}
          />
        </SimpleGrid>
        <Stack pt='10px'>
          <Text fontSize='md'>Workflows</Text>
          <TableContainer border='1px' borderRadius='6px' borderColor='gray.100'>
            <Table variant="simple">
              <Thead bgColor='gray.50'>
                <Tr>
                  <Th>Name</Th>
                  <Th>Status</Th>
                  <Th>Last Executed</Th>
                  <Th>Last Trigger</Th>
                </Tr>
              </Thead>
              <Tbody>
                {this.actions?.map((action) => {
                  const {
                    name,
                    url,
                    status,
                    lastExecuted,
                    trigger
                  } = action;
                  return (
                    <Tr key={name}>
                      <Td><Link color='purple' href={url} target='_blank'>{name}</Link></Td>
                      <Td>{status}</Td>
                      <Td>{lastExecuted ? ` ${dayjs(new Date(lastExecuted)).format('M/D/YYYY h:mA')}` : ''}</Td>
                      <Td>{trigger}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>
      </Stack>
    );
  }
}

export {
  Github
};