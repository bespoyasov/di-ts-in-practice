import {container} from '@composition/core';
import {Timer} from './types';
import {FlushTimer} from './timer';

container.registerSingleton<Timer, FlushTimer>();
