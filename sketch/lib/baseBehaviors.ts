import { BehaviorFunction, Entity } from "./entity";
import {
  SpriteAnimation,
  AnimationCycleName,
  SpriteIndex,
  NewCycleInformation,
} from "./spriteAnimation";
import { Tileset } from "./tileset";

export class BaseBehaviors {
  static Names = {
    SpriteAnimation: "sprite-animation",
    AddSpriteCycle: "add-sprite-cycle",
    SetCurrentSpriteCycle: "set-sprite-cycle",
  };

  /**
   * Adds sprite animations behavior and auxiliary internal functions to given entity using provided tileset.
   *
   * New animations can be added by calling `Entity.getFunction(BaseBehaviors.Names.AddSpriteCycle)(params)`.
   * Similarly, the current sprite cycle can be set by calling `BaseBehaviors.Names.SetCurrentSpriteCycle`.
   * @date 5/4/2023 - 8:52:10 PM
   *
   * @static
   * @param {Entity} entity
   * @param {Tileset} tileset
   */
  static addSpriteAnimation(entity: Entity, tileset: Tileset) {
    const spriteAnimation = new SpriteAnimation(tileset);
    const behavior: BehaviorFunction<Entity> = (e) => {
      spriteAnimation.draw(e.p, e.position, e.rotation, e.size);
    };
    entity.addBehavior(BaseBehaviors.Names.SpriteAnimation, behavior);

    entity.addInternalFunction<NewCycleInformation>(
      BaseBehaviors.Names.AddSpriteCycle,
      (newCycle) => {
        spriteAnimation.addCycle(newCycle);
      }
    );

    entity.addInternalFunction<string>(
      BaseBehaviors.Names.SetCurrentSpriteCycle,
      (name) => {
        spriteAnimation.setCurrentAnimation(name);
      }
    );
  }
}
