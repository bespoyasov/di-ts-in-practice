import {container} from './composition';
import {Initiator} from './core';

const service = container.get<Initiator>();
service.init();
