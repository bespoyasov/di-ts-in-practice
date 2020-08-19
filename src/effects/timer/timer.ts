import {MillisecondsCount} from '@domain';
import {Timer} from './types';

type FlushCallback = () => void;

export class FlushTimer implements Timer {
  private instance?: NodeJS.Timeout;

  public invokeEvery = (fn: FlushCallback, repeatAfter: MillisecondsCount): void => {
    this.dispose();
    this.instance = setInterval(fn, repeatAfter);
  };

  public dispose = (): void => this.instance && clearInterval(this.instance);
}
