export function throwCustomError(error: Error, message: string): never {
  error.message = message;
  throw error;
}

export interface Size {
  width: number;
  height: number;
}

export interface Position {
  x: number;
  y: number;
}

export interface ColorInterface {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

export class Helpers {
  rand() {}

  randint() {}

  randElement<T>(list: Array<T>): T {}
}

export class ERRORS {
  static Entity = {
    NO_BEHAVIOR: new Error("Entity has no behavior of given name."),
  };
}
