import {container} from '@composition/core';
import {DateTimeSource} from './types';
import {BrowserDateTimeSource} from './browserDateTimeSource';

container.registerSingleton<DateTimeSource, BrowserDateTimeSource>();
