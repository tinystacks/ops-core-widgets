import React from 'react';
import get from 'lodash.get';
import { TinyStacksError as TinyStacksErrorType  } from '@tinystacks/ops-model';
import { BaseWidget, TinyStacksError } from '@tinystacks/ops-core';
import { Box, Stack } from '@chakra-ui/react';
import { JsonFilter as JsonFilterProps } from './types.js';

export class JsonFilter extends BaseWidget {
  static type = 'JsonFilter';
  jsonObject: { [key: string]: any; };
  paths: {
    pathDisplayName: string,
    path: string
  }[];
  filteredJson: {
    pathDisplayName: string,
    json: string
  }[];

  
  constructor (props: JsonFilterProps) {
    super(props);
    this.jsonObject = props.jsonObject; 
    this.paths = props.paths;
    this.filteredJson = props.filteredJson || [];
  }

  static fromJson (object: JsonFilterProps): JsonFilter {
    return new JsonFilter(object);
  }
  

  toJson (): JsonFilterProps {
    return { 
      ...super.toJson(),
      jsonObject: this.jsonObject,
      paths: this.paths,
      filteredJson: this.filteredJson
    };
  }

  
  getData (): void {
    this.filteredJson = [];
    try{ 
      this.paths?.forEach(({ path, pathDisplayName }) => { 
        const value = get(this.jsonObject, path);
        this.filteredJson.push({
          pathDisplayName,
          json: !value ?
            `Value ${path} does not exist on source object` :
            value
        });
      });
      return;
    } catch (e) {
      const error = e as Error;
      throw new TinyStacksError(
        `Error getting data for json tree widget ${this.id}!`,
        500,
        error.stack,
        TinyStacksErrorType.type.INTERNAL_SERVER_ERROR
      );
    }
  }

  render (): JSX.Element {
    const prettierJson : {[key: string]: any} = {};

    this.filteredJson.forEach((item) => { 
      prettierJson[item.pathDisplayName] = item.json;
    });

    const boxStyles = { 
      overflow: 'scroll',
      flex: 'none',
      backgroundColor: '#EDF2F7',
      color: '#000000',
      height: '400px', 
      margin: '14px',
      padding: '24px', 
      width: 'full',
      alignSelf: 'stretch', 
      alignItems: 'flex-start',
      lineHeight: '21px', 
      borderRadius: '8px', 
      maxHeight: '400px'  
    };
    return (
      <Stack style={{ backgroundColor: '#ffffff', width: '100%' }}>
        <Box style={boxStyles}>
          <pre style={{
            color: '#5705D4',
            margin: '0px',
            padding: '0px',
            lineHeight: '21px',
            fontFamily: 'monospace',
            fontStyle: 'normal',
            fontSize: '12px',
            fontWeight: '400'
          }}>
            {JSON.stringify(prettierJson, null, 2)}
          </pre>
        </Box>
      </Stack>
    );
  }

}