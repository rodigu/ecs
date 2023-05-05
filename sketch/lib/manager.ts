import * as p5 from "p5";
import { BehaviorFunction, Entity, StateFunction } from "./entity";

type Layer = Map<string, Entity>;

export class GameManager {
  private loadedAssetsCount: number;
  private currentState: string;

  readonly assets: Map<string, p5.Image | string>;

  readonly layers: Map<number, Layer>;
  readonly existingLayers: number[];
  readonly entities: Map<string, Entity>;

  readonly behaviors: Map<string, BehaviorFunction<GameManager>>;
  readonly states: Map<string, StateFunction<GameManager>>;

  readonly p: p5;
  readonly preload: (p: p5) => void;

  constructor(p: p5, preloadFunction: (p: p5) => void) {
    this.preload = preloadFunction;
    this.behaviors = new Map();
    this.states = new Map();
    this.currentState = "";
    this.p = p;
  }

  addEntity(name: string, entity: Entity, layer: number) {
    this.entities.set(name, entity);
    if (!this.layers.has(layer)) this.layers.set(layer, new Map());
    this.layers.get(layer)!.set(name, entity);
    if (this.existingLayers.indexOf(layer) === -1)
      this.existingLayers.push(layer);
    this.existingLayers.sort();
  }

  addBehavior(name: string, behavior: BehaviorFunction<GameManager>) {
    this.behaviors.set(name, behavior);
  }

  removeBehavior(name: string) {
    this.behaviors.delete(name);
  }

  addState(name: string, state: StateFunction<GameManager>) {
    this.states.set(name, state);
  }

  removeState(name: string) {
    this.states.delete(name);
  }

  runEntities() {
    for (const layer of this.existingLayers)
      this.layers.get(layer).forEach((entity) => entity.run());
  }

  run() {
    for (const behavior of this.behaviors.values()) behavior(this);
    this.states.get(this.currentState)(this);
  }

  set state(state: string) {
    this.currentState = state;
  }

  get state() {
    return this.currentState;
  }

  loadAssets() {
    for (const assetName of this.assets.keys()) {
      const asset = this.assets.get(assetName);
      if (typeof asset === "string")
        this.assets.set(
          assetName,
          this.p.loadImage(asset, () => this.loadedAssetsCount++)
        );
    }
  }

  get assetsLoadingProgression() {
    return this.loadedAssetsCount / this.assets.size;
  }

  getAsset(assetName: string) {
    return this.assets.get(assetName);
  }

  static addSimpleLoadingScreen(manager: GameManager) {}
}
