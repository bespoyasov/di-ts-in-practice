import {UtcDateTimeString, TimeStamp} from '@domain';

export interface DateTimeSource {
  toString(): UtcDateTimeString;
  valueOf(): TimeStamp;
}
