import React from 'react';
import { Widget } from '@tinystacks/ops-model';
import { BaseProvider, BaseWidget } from '@tinystacks/ops-core';
import { Box, Button, Code, Heading, HStack, Spacer, Stack } from '@chakra-ui/react';
import isEmpty from 'lodash.isempty';
import join from 'lodash.join';
import { CliEnvironmentProvider } from './cli-environment-provider.js';

type CliProps = Widget & {
  command: string
  commandResult?: { stdout: string, stderr: string };
  runOnStart?: boolean
  hasRun?: boolean
  environmentVariables?: { [key: string]: string }
}

type CliOverrides = {
  clear?: boolean,
  run?: boolean
}

export class Cli extends BaseWidget {
  static type = 'Cli';
  command: string;
  runOnStart: boolean;
  commandResult: { stdout: string, stderr: string };
  hasRun: boolean;
  environmentVariables: { [key: string]: string } | undefined;

  constructor (props: CliProps) {
    super(props);
    this.command = props.command;
    this.runOnStart = props.runOnStart === true;
    this.commandResult = props.commandResult || {
      stdout: '',
      stderr: ''
    };
    this.hasRun = props.hasRun === true;
    this.environmentVariables = props.environmentVariables;
  }

  static fromJson (object: CliProps): Cli {
    return new Cli(object);
  }
  
  envVarMapper (envVars: {[key: string]: string}) {
    return Object.entries(envVars).map(([envKey, envVal]) => `export ${envKey}=${envVal}`);
  }

  toJson (): CliProps {
    return {
      ...super.toJson(),
      command: this.command,
      commandResult: this.commandResult,
      runOnStart: this.runOnStart,
      hasRun: this.hasRun,
      environmentVariables: this.environmentVariables
    };
  }

  async getData (providers?: BaseProvider[], overrides?: CliOverrides): Promise<void> {
    // This is imported like this to avoid webpack throwing up over node dependencies when this widget is used
    //  in the frontend next app
    const depMap = {
      childproc: 'child_process',
      nodeutil: 'node:util'
    };

    const exec = (await import(depMap['childproc']))['exec'];
    const promisify = (await import(depMap['nodeutil']))['promisify'];
    const execPromise = promisify(exec);

    const shouldRun =
      // if this is the first load and runOnStart is true
      (!this.hasRun && this.runOnStart === true)
      // if an override told it to run
      || (overrides && overrides.run === true);

    const commands = [];
    let allEnvVars = {};
    for (const envProvider of (providers || []) .filter(p => 'getCliEnvironment' in p)) {
      const cliEnv = await (envProvider as unknown as CliEnvironmentProvider).getCliEnvironment();
      allEnvVars = { ...allEnvVars, ...cliEnv };
    }

    allEnvVars = { ...allEnvVars, ...(this.environmentVariables || {}) };

    commands.push(this.command);
    try {
      if (shouldRun) {
        const { stdout, stderr } = await execPromise(join(commands, ';'), { env: allEnvVars });
        this.commandResult = {
          stdout: stdout,
          stderr: stderr
        };
        this.hasRun = true;
      } else if (overrides && overrides.clear === true) {
        this.commandResult = {
          stdout: '',
          stderr: ''
        };
      }
    } catch (e: any) {
      console.error(e);
      this.commandResult = { stdout: '', stderr: e.toString() };
    }

  }

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