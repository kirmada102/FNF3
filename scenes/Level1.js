import LevelBase from "./LevelBase.js";
export default class Level1 extends Phaser.Scene {
  constructor() {
    super("Level1"); // 👈 THIS NAME IS CRITICAL
  }

  preload() {
    // load girl, hearts, etc.
  }

  create() {
    // girl appears, hearts appear
  }
}
