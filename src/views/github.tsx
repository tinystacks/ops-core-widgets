import React from 'react';
import dayjs from 'dayjs';
import { Widget } from '@tinystacks/ops-model';
import { Views } from '@tinystacks/ops-core';
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
import KeyValueStat from './components/key-value-stat.js';
import { Github as GithubModel } from '../models/github.js';

import WidgetView = Views.Widget;

class Github extends GithubModel implements WidgetView {
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