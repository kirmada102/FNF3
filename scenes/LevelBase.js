import PlayerGirl from "../entities/PlayerGirl.js";
import { HappyCat, JumpyCat, LazyCat } from "../entities/CatBase.js";
import WindSystem from "../systems/WindSystem.js";
import CloudSystem from "../systems/CloudSystem.js";
import HeartSystem from "../systems/HeartSystem.js";
import QuestionSystem from "../systems/QuestionSystem.js";

export default class LevelBase extends Phaser.Scene {
  constructor(key, question, answer) {
    super(key);
    this.questionText = question;
    this.answerText = answer;
  }

  preload() {
    this.load.image("girl","https://i.imgur.com/6XGQKkA.png");
    this.load.image("cat","https://i.imgur.com/yYFqZ0k.png");
    this.load.image("heart","https://i.imgur.com/3Xn6FzC.png");
    this.load.image("cloud","https://i.imgur.com/U4H7Z6m.png");
  }

  create() {
    this.wind = new WindSystem(this);
    this.clouds = new CloudSystem(this);
    this.player = new PlayerGirl(this,200,380);

    this.cats = [
      new HappyCat(this,160,400),
      new JumpyCat(this,130,400),
      new LazyCat(this,100,400)
    ];

    this.hearts = new HeartSystem(this);
    this.question = new QuestionSystem(
      this,
      this.questionText,
      this.answerText,
      () => this.scene.start(this.nextScene)
    );
  }

  update(t,dt) {
    this.wind.update(t);
    this.clouds.update();
    this.player.update();
    this.cats.forEach(c=>c.update(this.player));
    this.hearts.update();

    if (this.player.x > 850 && !this.question.active)
      this.question.ask();
  }
}
