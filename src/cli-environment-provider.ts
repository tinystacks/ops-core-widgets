import { Provider } from '@tinystacks/ops-model';

interface CliEnvironmentProvider extends Provider {
  getCliEnvironment(...args: any): {[ key: string]: string } | Promise<{[ key: string]: string }>;
}

export default CliEnvironmentProvider;