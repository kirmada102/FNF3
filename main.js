import Level1 from "./scenes/Level1.js";
import Level2 from "./scenes/Level2.js";
import Level3 from "./scenes/Level3.js";
import FinalCinematic from "./scenes/FinalCinematic.js";

const config = {
  type: Phaser.AUTO,
  width: 960,
  height: 540,
  backgroundColor: "#0e0e1a",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 900 },
      debug: false
    }
  },
  scene: [Level1, Level2, Level3, FinalCinematic]
};

// 🐴 Create the game
const game = new Phaser.Game(config);

// 🐴 FORCE Phaser to start the gameplay scene
game.scene.start("Level1");
