import { Provider, Widget } from '@tinystacks/ops-model';

export interface GithubCredentials {
  token: string;
}

/**
 * @example
 * ```yaml
 *  GithubProvider:
      type: GithubCredentialsProvider
      credentials:
        token: personal-or-app-access-token
 * ```
 */
export interface GithubCredentialsProvider extends Provider {
  credentials: GithubCredentials;
  /**
   * The GitHub hostname to target.  Set this for Github Enterprise.
   */
  host?: string;
}

/**
 * @example
 * ```yaml
 * EcsDiskUtil:
    type: Cli
    displayName: Show Disk Utils
    providers:
      - $ref: '#/Console/providers/AwsProvider'
    environmentVariables:
      AWS_REGION: $param.region
      CLUSTER_NAME: $param.clusterName
      CONTAINER_NAME:
        $ref: '#/Console/widgets/EcsInfo'
        path: images[0].containerId
    command: >
      aws ecs list-tasks --cluster $CLUSTER_NAME | jq '[.taskArns[0]][0]' | xargs -I{} bash -c 'aws ecs execute-command --cluster $CLUSTER_NAME --task {} --container $CONTAINER_NAME --command "df" --interactive';
 * ```
 */
export interface Cli extends Widget {
  command: string;
  commandResult?: { stdout: string, stderr: string };
  runOnStart?: boolean;
  hasRun?: boolean;
  environmentVariables?: { [key: string]: string };
}

export interface GithubAction {
  name: string;
  trigger: string;
  status: string;
  lastExecuted: Date;
  url: string;
}

/**
 * @example
 * ```yaml
 * Github:
    type: Github
    displayName: Github Action Workflows
    organization: my-org
    repository: my-repo
    providers:
      - $ref: '#/Console/providers/GithubProvider'
* ```
 */
export interface Github extends Widget  {
  host?: string;
  organization: string;
  repository: string;
  actions?: GithubAction[];
}

/**
 * @example
 * ```yaml
 * Metrics:
    type: Grid
    displayName: ECS Metrics
    orientation: horizontal
    children:
      - $ref: '#/Console/widgets/CPUMetrics'
      - $ref: '#/Console/widgets/MemoryMetrics'
      - $ref: '#/Console/widgets/Capacity'
      - $ref: '#/Console/widgets/Reservations'
 * ```
 */
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

/**
 * @example
 * ```yaml
 * SmallMarkdown:
    type: Markdown
    displayName: Small Markdown Window
    markdown: |
      ### This is fully supported markdown

      \`\`\`
      You can even drop in some code if you want
      \`\`\`
 * ```
 */
export interface Markdown extends Widget  { markdown: string }

/**
 * @example
 * ```yaml
 * HorizontalPanel:
    type: Panel
    displayName: Panel with horizontal layout
    orientation: horizontal
    children:
      - $ref: '#/Console/widgets/Md1'
      - $ref: '#/Console/widgets/Md2'
 * ```
 */
export interface Panel extends Widget  { orientation?: 'horizontal' | 'vertical' }

/**
 * @example
 * ```yaml
 * MdTabs:
    type: Tabs
    displayName: Markdown Tabs
    children:
      - $ref: '#/Console/widgets/Md1'
      - $ref: '#/Console/widgets/Md2'
      - $ref: '#/Console/widgets/HorizontalPanel'
    tabNames:
      - 'Markdown 1'
      - 'Markdown 2'
      - 'Horizontal Markdown'
 * ```
 */
export interface Tabs extends Widget  { tabNames?: string[] }