export default class Level3 extends Phaser.Scene {
  constructor(){ super("Level3"); }

  create() {
    this.add.text(240,180,"Will you be my Valentine?",{fontSize:28});
    this.tries=0;

    this.yes=this.add.text(400,260,"YES",{fontSize:32,color:"#ffb6c1"}).setInteractive();
    this.add.text(520,260,"NO",{fontSize:32,color:"#555"}).setAlpha(0.3);

    this.yes.on("pointerdown",()=>{
      this.tries++;
      if(this.tries<7){
        this.yes.setPosition(
          Phaser.Math.Between(100,800),
          Phaser.Math.Between(100,400)
        );
      } else {
        this.scene.start("FinalCinematic");
      }
    });
  }
}
