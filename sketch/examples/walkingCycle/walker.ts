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

  const walker = new Entity(manager.p, "walker");
}
