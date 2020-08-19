import {Logger, LogEntry} from './types';

export class ConsoleLogger implements Logger {
  constructor(private env: Window) {}
  public log = (message: LogEntry): void => console.log(message);
}
