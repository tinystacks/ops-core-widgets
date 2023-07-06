/* env: node */
import { Controllers, Provider } from '@tinystacks/ops-core';
import { Cli as CliModel } from '../models/cli.js';
import { CliEnvironmentProvider } from '../core/cli-environment-provider.js';
import { Cli as CliProps } from '../ops-types.js';

import WidgetController = Controllers.Widget;

type CliOverrides = {
  clear?: boolean,
  run?: boolean
}

export class Cli extends CliModel implements WidgetController {
  
  static fromJson (object: CliProps): Cli {
    return new Cli(object);
  }

  async getData (providers?: Provider[], overrides?: CliOverrides): Promise<void> {
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

    const commands: string[] = [];
    let allEnvVars = {};
    for (const envProvider of (providers || []) .filter(p => 'getCliEnvironment' in p)) {
      const cliEnv = await (envProvider as unknown as CliEnvironmentProvider).getCliEnvironment();
      allEnvVars = { ...allEnvVars, ...cliEnv };
    }

    allEnvVars = { ...allEnvVars, ...(this.environmentVariables || {}), PATH: process.env.PATH };

    commands.push(this.command);
    try {
      if (shouldRun) {
        const { stdout, stderr } = await execPromise(commands.join(';'), { env: allEnvVars, shell: '/bin/bash' });
        this.commandResult = {
          stdout: stdout.trim(),
          stderr: stderr.trim()
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
}