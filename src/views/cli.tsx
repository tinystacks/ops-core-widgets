import React from 'react';
import isEmpty from 'lodash.isempty';
import { Box, Button, Code, Heading, HStack, Spacer, Stack } from '@chakra-ui/react';
import { Views } from '@tinystacks/ops-core';
import { Cli as CliModel } from '../models/cli.js';

import WidgetView = Views.Widget;

type CliOverrides = {
  clear?: boolean,
  run?: boolean
}

export class Cli extends CliModel implements WidgetView {
  render (_children?: any, overridesCallback?: (overrides: CliOverrides) => void): JSX.Element {
    const commandResultRender = (!isEmpty(this.commandResult.stderr) || !isEmpty(this.commandResult.stdout)) ?
      <HStack spacing='24px'>
        <Box maxH='400px' w='100%' overflow='scroll'>
          <pre>
            {this.commandResult.stderr}
            {this.commandResult.stdout}
          </pre>
        </Box>
        <Spacer />
        <Button
          color='black' bg='white' m='2' borderColor='gray.300' borderWidth='1px'
          onClick={() => overridesCallback({ clear: true })}
        >
          Clear
        </Button>
      </HStack>
      : 'Command has not been run yet!';

    return (
      <Stack w='100%' p='4'>
        <Code borderRadius='md' p='4'>
          <HStack spacing='24px'>
            <Box maxH='400px' w='100%' overflow='scroll'>
              <pre>
                {this.command}
              </pre>
            </Box>
            <Spacer />
            <Button
              colorScheme='purple' m='2'
              onClick={() => overridesCallback({ run: true })}
            >
              Run
            </Button>
          </HStack>
        </Code>
        <Heading size='sm'>
          Response:
        </Heading>
        <Code borderRadius='md' p='4'>
          {commandResultRender}
        </Code>
      </Stack>
    );
  }
}