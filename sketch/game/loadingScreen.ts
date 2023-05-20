import { AssetList } from "../assets/assetList";
import { GameManager } from "../lib/manager";
import { LOGO_NUCLEO } from "./keyEnums";

export const LOADING_STATE = "loading-state";

export function loadingScreen(manager: GameManager) {
  const { p } = manager;

  for (const [assetName, path] of Object.entries(AssetList))
    manager.addAsset(assetName, path);
  manager.loadAssets();

  manager.addState(LOADING_STATE, (m) => {
    const logo = m.getAsset(LOGO_NUCLEO) as p5.Image;
    p.push();
    p.translate(p.width / 2, p.height / 2);
    p.image(logo, 0, 0, m.configs.UnitSize, m.configs.UnitSize);
    p.rectMode(p.CENTER);
    p.rect(
      0,
      m.configs.UnitSize,
      m.assetsLoadingProgression * p.width * 0.9,
      m.configs.UnitSize
    );
    p.pop();
  });
  manager.state = LOADING_STATE;
}
