import { Provider, Widget } from '@tinystacks/ops-model';

export type GithubCredentials = {
  token: string;
}

export type GithubCredentialsProvider = Provider & {
  credentials: GithubCredentials;
  /**
   * The GitHub hostname to target.  Set this for Github Enterprise.
   */
  host?: string;
};

export type Cli = Widget & {
  command: string
  commandResult?: { stdout: string, stderr: string };
  runOnStart?: boolean
  hasRun?: boolean
  environmentVariables?: { [key: string]: string }
}

export type GithubAction = {
  name: string;
  trigger: string;
  status: string;
  lastExecuted: Date;
  url: string;
}

export type Github = Widget & {
  host?: string;
  organization: string;
  repository: string;
  actions?: GithubAction[];
};

export type Grid = Widget & { columns?: number };

export type JsonFilter = Widget & {
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

export type Markdown = Widget & { markdown: string }

export type Panel = Widget & { orientation?: 'horizontal' | 'vertical' };

export type Tabs = Widget & { tabNames?: string[] };