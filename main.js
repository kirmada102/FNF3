import Level1 from "./scenes/Level1.js";
import Level2 from "./scenes/Level2.js";
import Level3 from "./scenes/Level3.js";
import FinalCinematic from "./scenes/FinalCinematic.js";

new Phaser.Game({
  type: Phaser.AUTO,
  width: 960,
  height: 540,
  physics: {
    default: "arcade",
    arcade: { gravity: { y: 900 }, debug: false }
  },
  scene: [Level1, Level2, Level3, FinalCinematic]
});
