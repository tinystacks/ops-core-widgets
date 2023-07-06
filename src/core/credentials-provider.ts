import { Provider } from '@tinystacks/ops-model';

export interface CredentialsProvider extends Provider {
  getCredentials (...args: any): any | Promise<any>;
}