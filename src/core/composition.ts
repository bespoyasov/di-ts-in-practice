import {container} from '@composition/core';
import {Initiator} from './types';
import {AppInitiator} from './initiator';

container.registerSingleton<Initiator, AppInitiator>();
