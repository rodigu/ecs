import { GameManager } from "../lib/manager";
import { LOGO_NUCLEO, VINHETA_NUCLEO } from "./keyEnums";

export function preloadFunction(manager: GameManager) {
  const { p } = manager;

  const loadingLogo = p.loadImage("../assets/img/logo-ntmtst.png");
  manager.insertAsset(LOGO_NUCLEO, loadingLogo);
  p.soundFormats("wav");

  //@ts-ignore
  const vinheta: p5.SoundFile = p.loadSound("../assets/sound/bgm_vinheta.wav");
  manager.insertAsset(VINHETA_NUCLEO, vinheta);
}
