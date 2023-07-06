import { Models } from '@tinystacks/ops-core';
import { Cli as CliProps } from '../ops-types.js';

import Widget = Models.Widget;

export class Cli extends Widget {
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
}