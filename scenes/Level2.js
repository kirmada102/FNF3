import LevelBase from "./LevelBase.js";
export default class Level2 extends LevelBase {
  constructor() {
    super("Level2","Who holds my heart the closest?","tanu");
    this.nextScene="Level3";
  }
}
