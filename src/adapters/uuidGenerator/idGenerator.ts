import {UuidGenerator, ThirdPartyGenerator} from './types';

export class IdGenerator implements UuidGenerator {
  constructor(private adaptee: ThirdPartyGenerator) {}
  generate = () => this.adaptee();
}
