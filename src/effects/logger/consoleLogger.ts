import {Logger, LogEntry} from './types';

export class ConsoleLogger implements Logger {
  public log = (message: LogEntry): void => console.log(message);
}
