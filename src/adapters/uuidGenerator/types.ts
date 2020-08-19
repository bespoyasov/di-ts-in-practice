export type UuidLength = number;
export type Uuid<TLength extends UuidLength> = string;

export interface UuidGenerator {
  generate(size?: UuidLength): Uuid<UuidLength>;
}

export type ThirdPartyGenerator = (size?: UuidLength) => Uuid<UuidLength>;
