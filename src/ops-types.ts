import { Provider, Widget } from '@tinystacks/ops-model';

export interface GithubCredentials {
  token: string;
}

export interface GithubCredentialsProvider extends Provider {
  credentials: GithubCredentials;
  /**
   * The GitHub hostname to target.  Set this for Github Enterprise.
   */
  host?: string;
}

export interface Cli extends Widget  {
  command: string
  commandResult?: { stdout: string, stderr: string };
  runOnStart?: boolean
  hasRun?: boolean
  environmentVariables?: { [key: string]: string }
}

export interface GithubAction {
  name: string;
  trigger: string;
  status: string;
  lastExecuted: Date;
  url: string;
}

export interface Github extends Widget  {
  host?: string;
  organization: string;
  repository: string;
  actions?: GithubAction[];
}

export interface Grid extends Widget  { columns?: number }

export interface JsonFilter extends Widget  {
  jsonObject: { [key: string]: any; },
  paths: {
    pathDisplayName: string,
    path: string
  }[],
  filteredJson?: {
    pathDisplayName: string,
    json: any
  }[]
}

export interface Markdown extends Widget  { markdown: string }

export interface Panel extends Widget  { orientation?: 'horizontal' | 'vertical' }

export interface Tabs extends Widget  { tabNames?: string[] }