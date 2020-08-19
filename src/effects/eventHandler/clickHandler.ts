import {EventHandler, EventKind, EventCallback} from './types';

/**
 * It should be IDisposable of course,
 * but c'mon, it's a simple sample app.
 */
export class ClickHandler implements EventHandler<MouseEvent> {
  constructor(private env: Window) {}

  public on = (event: EventKind, callback: EventCallback<MouseEvent>): void =>
    this.env.addEventListener(event, callback);

  public off = (event: EventKind, callback: EventCallback<MouseEvent>): void =>
    this.env.removeEventListener(event, callback);
}
