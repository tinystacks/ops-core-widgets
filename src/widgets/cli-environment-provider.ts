import { Provider } from '@tinystacks/ops-model';

export interface CliEnvironmentProvider extends Provider {
  getCliEnvironment(...args: any): {[ key: string]: string } | Promise<{[ key: string]: string }>;
}