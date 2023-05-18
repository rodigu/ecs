import { BaseBehaviors } from "../../lib/baseBehaviors";
import { Entity } from "../../lib/entity";
import { GameManager } from "../../lib/manager";
import { SpriteAnimation } from "../../lib/spriteAnimation";
import { Tileset } from "../../lib/tileset";

function createWalker(manager: GameManager) {
  const walkingCycleTileset = new Tileset(
    "./little_boy.png",
    { width: 16, height: 16 },
    3,
    4
  );

  const walker = new Entity(
    manager.p,
    "walker",
    0,
    { width: 50, height: 50 },
    { x: 0, y: 0 },
    0
  );

  const spriteAnimationFunctions = BaseBehaviors.addSpriteAnimation(
    walker,
    walkingCycleTileset
  );

  walker.activateBehavior(BaseBehaviors.Names.SpriteAnimation);

  spriteAnimationFunctions.setCurrentSpriteFunction("walking");
  spriteAnimationFunctions.newCycleFunction({
    cycleName: "walking",
    frames: [3, 4, 5],
    timing: 60,
  });

  manager.addEntity("walker", walker, walker.layer);

  manager.addState("draw-entities", (m: GameManager) => {
    m.p.push();
    m.p.translate(manager.p.width / 2, manager.p.height / 2);
    m.runEntities();
    m.p.pop();
  });
}
