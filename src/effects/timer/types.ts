import {Disposable, List, MillisecondsCount} from '@domain';

type TimerCallback = (...args: List<unknown>) => void;

export interface Timer extends Disposable {
  invokeEvery(fn: TimerCallback, timeout: MillisecondsCount): void;
}
