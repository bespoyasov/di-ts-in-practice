export type LogEntry = string;
export interface Logger {
  log(message: LogEntry): void;
}
