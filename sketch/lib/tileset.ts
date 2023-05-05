import { Size, Position } from "./helpers";

export class Tileset {
  private sourcePath: string;
  private sourceSize: Size;
  private sourceColumns: number;
  private sourceRows: number;
  private image: p5.Image;

  constructor(
    assetSourcePath: string,
    originalTileSize: Size,
    tilesetColumns: number,
    tilesetRows: number
  ) {
    this.sourcePath = assetSourcePath;
    this.sourceSize = originalTileSize;
    this.sourceColumns = tilesetColumns;
    this.sourceRows = tilesetRows;
  }

  preload(p: p5) {
    this.image = p.loadImage(this.sourcePath);
  }

  drawTile(p: p5, n: number, pos: Position, size: Size) {
    const { x, y } = pos;
    let { tileX, tileY } = this.tileNumToPos(n);
    p.imageMode(p.CENTER);
    image(
      this.image,
      x,
      y,
      size.width,
      size.height,
      tileX,
      tileY,
      this.sourceSize.width,
      this.sourceSize.height
    );
  }

  tileNumToPos(n: number) {
    return {
      tileX: (n % this.sourceColumns) * this.sourceSize.width,
      tileY: Math.floor(n / this.sourceColumns) * this.sourceSize.width,
    };
  }
}
