import LevelBase from "./LevelBase.js";
export default class Level1 extends LevelBase {
  constructor() {
    super("Level1","When did our story truly begin?","10th march");
    this.nextScene="Level2";
  }
}
