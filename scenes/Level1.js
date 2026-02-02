import LevelBase from "./LevelBase.js";
export default class Level1 extends Phaser.Scene {
  constructor() {
    super("Level1");
  }

  create() {
    this.add.text(100, 100, "GAME STARTED", { color: "#ffffff" });
  }
}
