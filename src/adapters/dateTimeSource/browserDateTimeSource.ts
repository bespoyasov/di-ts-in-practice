import {DateTimeSource} from './types';
import {UtcDateTimeString, TimeStamp} from '@domain';

export class BrowserDateTimeSource implements DateTimeSource {
  get source() {
    return new Date();
  }

  public toString = (): UtcDateTimeString => this.source.toUTCString();
  public valueOf = (): TimeStamp => this.source.getTime();
}
