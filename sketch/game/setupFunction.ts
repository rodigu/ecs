import { GameManager } from "../lib/manager";

export function setupFunction(manager: GameManager) {
  const { p } = manager;

  p.createCanvas(100, 100);
}
