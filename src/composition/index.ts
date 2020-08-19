import {container} from './core';

import '../core/composition';
import '../adapters/dateTimeSource/composition';
import '../adapters/uuidGenerator/composition';
import '../effects/eventHandler/composition';
import '../effects/logger/composition';
import '../effects/timer/composition';

container.registerSingleton<Window>(() => window);
export {container};
