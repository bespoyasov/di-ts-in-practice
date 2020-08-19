import {container} from '@composition/core';
import {EventHandler} from './types';
import {ClickHandler} from './clickHandler';

container.registerSingleton<EventHandler<MouseEvent>, ClickHandler>();
