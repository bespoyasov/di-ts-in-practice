import {container} from '@composition/core';
import {Logger} from './types';
import {ConsoleLogger} from './consoleLogger';

container.registerSingleton<Logger, ConsoleLogger>();
