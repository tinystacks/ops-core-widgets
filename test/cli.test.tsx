import { Cli } from '../src/cli';
import {jest} from '@jest/globals'
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Cli', () => {
  afterEach(cleanup);
  
  describe('Cli intialization', () => {
    it('Cli is initialized successfully', () => {
      const cliProps = {
        id: 'MockWidget',
        type: 'Cli',
        displayName: 'mock widget', 
        command: 'echo Hello'
      };

      const cli = Cli.fromJson(cliProps);
      expect(cli.toJson()).toStrictEqual({
        ...cliProps,
        runOnStart: false,
        hasRun: false,
        childrenIds: undefined,
        description: undefined,
        displayOptions: undefined,
        providerIds: undefined, 
        commandResult: { 
          stdout: '',
          stderr: ''
        },
        environmentVariables: undefined 
      });
    });

    it('false runOnStart for Cli is initialized successfully', () => {
      const cliProps = {
        id: 'MockWidget',
        type: 'Cli',
        displayName: 'mock widget', 
        command: 'echo Hello', 
        runOnStart: false
      };

      const cli = Cli.fromJson(cliProps);
      expect(cli.toJson()).toStrictEqual({
        ...cliProps,
        runOnStart: false,
        hasRun: false,
        childrenIds: undefined,
        description: undefined,
        displayOptions: undefined,
        providerIds: undefined, 
        commandResult: { 
          stdout: '',
          stderr: ''
        },
        environmentVariables: undefined 
      });
    });

    it('true runOnStart for Cli is initialized successfully', () => {
      const cliProps = {
        id: 'MockWidget',
        type: 'Cli',
        displayName: 'mock widget', 
        command: 'echo Hello', 
        runOnStart: true
      };

      const cli = Cli.fromJson(cliProps);
      expect(cli.toJson()).toStrictEqual({
        ...cliProps,
        runOnStart: true,
        hasRun: false,
        childrenIds: undefined,
        description: undefined,
        displayOptions: undefined,
        providerIds: undefined, 
        commandResult: { 
          stdout: '',
          stderr: ''
        },
        environmentVariables: undefined 
      });
    });

  });

  describe('Cli getData', () => { 

    it('executes the command and sets the result on the instance', async () => {
      const mockExecPromise = jest.fn(() => Promise.resolve({ stdout: 'Hello', stderr: '' }));
      jest.mock('child_process', () => ({ exec: jest.fn() }));
      jest.mock('node:util', () => ({ promisify: jest.fn(() => mockExecPromise) }));
  
      const instance = new Cli({ 
        id: 'MockWidget',
        type: 'Cli',
        displayName: 'mock widget', 
        command: 'echo Hello', 
        runOnStart: true
      });
      await instance.getData();
  
      //expect(mockExecPromise).toHaveBeenCalledWith('echo Hello', { env: expect.any(Object) });
      expect(instance.hasRun).toBe(true);
      expect(instance.commandResult).toEqual({ stdout: 'Hello', stderr: '' });
    });

    it('does not execute the command if shouldRun is false', async () => {
      const mockExecPromise = jest.fn(() => Promise.resolve({ stdout: 'Hello', stderr: '' }));
      jest.mock('child_process', () => ({ exec: jest.fn() }));
      jest.mock('node:util', () => ({ promisify: jest.fn(() => mockExecPromise) }));
  
      const instance = new Cli({ 
        id: 'MockWidget',
        type: 'Cli',
        displayName: 'mock widget', 
        command: 'echo Hello', 
        runOnStart: false
      });
      await instance.getData();
  
      expect(mockExecPromise).not.toHaveBeenCalled();
      expect(instance.hasRun).toBe(false);
      expect(instance.commandResult).toStrictEqual( { stdout: '', stderr: ''});
    });
  });

  describe('Cli render', () => { 

    it('renders "Command has not been run yet!" when commandResult is empty', async () => {
      const mockExecPromise = jest.fn(() => Promise.resolve({ stdout: 'Hello', stderr: '' }));
      jest.mock('child_process', () => ({ exec: jest.fn() }));
      jest.mock('node:util', () => ({ promisify: jest.fn(() => mockExecPromise) }));

      const cli = Cli.fromJson({ 
        id: 'MockWidget',
        type: 'Cli',
        displayName: 'mock widget', 
        command: 'echo Hello', 
        runOnStart: false
      });

      const renderedCli = cli.render();
      render(renderedCli);
      expect(screen.getByText('Command has not been run yet!')).toBeInTheDocument();

    });

    it('renders command and "Run" button', async () => {
      const mockExecPromise = jest.fn(() => Promise.resolve({ stdout: 'Hello', stderr: '' }));
      jest.mock('child_process', () => ({ exec: jest.fn() }));
      jest.mock('node:util', () => ({ promisify: jest.fn(() => mockExecPromise) }));

      const cli = Cli.fromJson({ 
        id: 'MockWidget',
        type: 'Cli',
        displayName: 'mock widget', 
        command: 'echo Hello', 
        runOnStart: false
      });

      const renderedCli = cli.render();
      render(renderedCli);
      expect(screen.getByText('echo Hello')).toBeInTheDocument();
      expect(screen.getByText('Run')).toBeInTheDocument();

    });

    it('renders commandResult and "Clear" button when it is not empty', async () => {
      const stdout = 'Hello';
      const mockExecPromise = jest.fn(() => Promise.resolve({ stdout: stdout, stderr: '' }));
      jest.mock('child_process', () => ({ exec: jest.fn() }));
      jest.mock('node:util', () => ({ promisify: jest.fn(() => mockExecPromise) }));

      const cli = Cli.fromJson({ 
        id: 'MockWidget',
        type: 'Cli',
        displayName: 'mock widget', 
        command: 'echo Hello', 
        runOnStart: true
      });

      await cli.getData();
      const renderedCli = cli.render();
      render(renderedCli);
      expect(screen.getByText(stdout)).toBeInTheDocument();
      expect(screen.getByText('Clear')).toBeInTheDocument();

    });

  });
  
});

