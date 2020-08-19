export type EventKind = 'click' | 'mouseup';
export type EventCallback<TEvent extends Event> = (event: TEvent) => void;

export interface EventHandler<TEvent extends Event> {
  on(event: EventKind, callback: EventCallback<TEvent>): void;
  off(event: EventKind, callback: EventCallback<TEvent>): void;
}
