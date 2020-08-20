import {container} from './composition';
import {AppInitiator} from './core';

const service = container.get<AppInitiator>();
service.init();
