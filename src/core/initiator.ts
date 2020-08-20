import {Timer} from '../effects/timer';
import {Logger} from '../effects/logger';
import {EventHandler} from '../effects/eventHandler';

import {DateTimeSource} from '../adapters/dateTimeSource';
import {UuidGenerator} from '../adapters/uuidGenerator';

export class AppInitiator {
  constructor(
    private dateTimeSource: DateTimeSource,
    private idGenerator: UuidGenerator,
    private clickHandler: EventHandler<MouseEvent>,
    private logger: Logger,
    private timer: Timer,
    private env: Window
  ) {}

  private greet = (): void => this.logger.log('Hello world!');
  private setupTimer = (): void => this.timer.invokeEvery(this.greet, 5000);
  private registerClicks = (): void => this.clickHandler.on('click', this.handleClick);

  private handleClick = (e: MouseEvent): void => {
    const position = [e.pageX, e.pageY];
    const datetime = this.dateTimeSource.toString();
    const eventId = this.idGenerator.generate();
    this.env.alert(`${eventId}, ${datetime}: Mouse was clicked at ${position} `);
  };

  public init = (): void => {
    this.setupTimer();
    this.registerClicks();
  };
}
