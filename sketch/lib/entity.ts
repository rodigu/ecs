import { Size, Position } from "./helpers";

type BehaviorFunction<T> = (e: T) => void;
type StateFunction<T> = (e: T) => void;

export abstract class Entity {
  readonly id: string;
  private behaviors: Map<string, BehaviorFunction<Entity>>;
  private states: Map<string, StateFunction<Entity>>;
  private currentState: string;
  private p: p5;
  size: Size;

  abstract reset: () => void;
  abstract setup: () => void;

  static Assets = {
    sample: "sample",
  };

  constructor(p: p5, id: string) {
    this.p = p;
    this.id = id;
    this.behaviors = new Map();
    this.states = new Map();
    this.currentState = "";
  }

  addBehavior(name: string, behavior: BehaviorFunction<Entity>) {
    this.behaviors.set(name, behavior);
  }

  removeBehavior(name: string) {
    this.behaviors.delete(name);
  }

  addState(name: string, state: StateFunction<Entity>) {
    this.states.set(name, state);
  }

  removeState(name: string) {
    this.states.delete(name);
  }

  get state() {
    return this.currentState;
  }

  set state(newState: string) {
    this.currentState = newState;
  }

  get possibleStates() {
    return new Set(this.states.keys());
  }

  run() {
    for (const behavior of this.behaviors.values()) behavior(this);
    this.states.get(this.currentState)(this);
  }

  static generateDrawEntityFunction(entity: Entity) {}

  static addSpriteAnimationState(entity: Entity) {}
}
