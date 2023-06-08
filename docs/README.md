@tinystacks/ops-core-widgets / [Exports](modules.md)

## Overview
This package contains a list of core Ops Console widgets.

## List of widgets
|Name|Description|
|---------|---------|
|Panel|This widget renders multiple internal widgets in a single direction, either vertical or horizontal.
|Tabs|This widget renders multiple internal widgets in a tab view. Combine with panel or grid to make robust views.
|Grid|This widget renders multiple internal widgets in a grid.
|Markdown|This widget renders markdown.
|CLI|This widget runs a bash command. The command may be multiple commands separated by ';'. You can also reference scripts that exist in the same directory as your config.

### Panel
This widget renders multiple internal widgets in a single direction, either vertical or horizontal.

|Parameter|Required|Type|Description|
|---------|---------|---------|---------|
|displayName|Yes|string|Display name of widget.
|children|Yes|array<Widget>|The widgets to render in the panel
|orientation|No|horizontal or vertical|Direction in which to lay out children widgets. (default: vertical)

### Tabs
This widget renders multiple internal widgets in a tab view. Combine with panel or grid to make robust views.

|Parameter|Required|Type|Description|
|---------|---------|---------|---------|
|displayName|Yes|string|Display name of widget.
|children|Yes|array<Widget>|The widgets to render in the panel.
|tabNames|Yes|array<string>|Tab names for each respective tab widget.

### Grid
This widget renders multiple internal widgets in a grid.

|Parameter|Required|Type|Description|
|---------|---------|---------|---------|
|displayName|Yes|string|Display name of widget.
|children|Yes|array<Widget>|The widgets to render in the panel.
|columns|No|number|The number of columns to render. (default: 2)

### Markdown
This widget renders markdown.

|Parameter|Required|Type|Description|
|---------|---------|---------|---------|
|displayName|Yes|string|Display name of widget.
|markdown|Yes|string|The markdown to render.

### CLI
This widget runs a bash command. The command may be multiple commands separated by ';'. You can also reference scripts that exist in the same directory as your config.

|Parameter|Required|Type|Description|
|---------|---------|---------|---------|
|displayName|Yes|string|Display name of widget.
|environmentVariables|No|map<string,string>|A set of Key-Value pairs that set the environment. <br/>ex.<br/>&nbsp;&nbsp;VAR1: 10<br/>&nbsp;&nbsp;VAR2: 9
|providers|No|array<Widget>|A list of providers. Providers will only be used if they implement CliEnvironmentProvider. Each environment variable from compatible providers will be exported to the shell.
|command|Yes|string|A semi-colon seperated set of commands.
|runOnStart|No|boolean|Whether or not to run the command when the dashboard and widget are first rendered. If disabled, the command will not run until the run button is pressed. (default: false)
