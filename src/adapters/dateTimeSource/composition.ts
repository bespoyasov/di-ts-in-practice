import {container} from '@composition/core';
import {DateTimeSource} from './types';
import {BrowserDateTimeSource} from './browserDateTimeSource';

container.registerTransient<Date>();
container.registerSingleton<DateTimeSource, BrowserDateTimeSource>();
