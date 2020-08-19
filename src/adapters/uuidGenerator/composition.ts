import {nanoid} from 'nanoid';
import {container} from '@composition/core';
import {UuidGenerator, ThirdPartyGenerator} from './types';
import {IdGenerator} from './idGenerator';

container.registerSingleton<ThirdPartyGenerator>(() => nanoid);
container.registerSingleton<UuidGenerator, IdGenerator>();
