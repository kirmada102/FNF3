export default class FinalCinematic extends Phaser.Scene {
  constructor(){ super("FinalCinematic"); }

  preload(){
    this.load.image("boy","https://i.imgur.com/DvN8JxX.png");
    this.load.image("lantern","https://i.imgur.com/OCf4bZT.png");
  }

  create(){
    this.cameras.main.fadeIn(2000);
    this.add.image(480,380,"boy");

    for(let i=0;i<100;i++){
      const l=this.add.image(
        Phaser.Math.Between(0,960),
        600+Phaser.Math.Between(0,200),
        "lantern"
      ).setAlpha(0);
      this.tweens.add({
        targets:l,
        y:-100,
        alpha:1,
        duration:Phaser.Math.Between(6000,12000),
        delay:Phaser.Math.Between(0,3000)
      });
    }
  }
}
