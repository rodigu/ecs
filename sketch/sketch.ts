import * as p5 from "p5";
import { GameManager } from "./lib/manager";
import { preloadFunction } from "./game/peloadFunction";
import { setupFunction } from "./game/setupFunction";

let gameManager: GameManager;

var sketch = (p: p5) => {
  const x = 100;
  const y = 100;
  gameManager = new GameManager(p);

  p.preload = () => {
    preloadFunction(gameManager);
  };

  p.setup = () => {
    setupFunction(gameManager);
  };

  p.draw = () => {
    gameManager.run();
  };
};

new p5(sketch);
