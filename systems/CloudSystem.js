export default class CloudSystem {
  constructor(scene){
    this.clouds=scene.add.group();
    for(let i=0;i<5;i++){
      const c=scene.add.image(
        Phaser.Math.Between(0,960),
        Phaser.Math.Between(50,200),
        "cloud"
      ).setAlpha(0.6);
      c.speed=Math.random()*0.3+0.1;
      this.clouds.add(c);
    }
  }
  update(){
    this.clouds.getChildren().forEach(c=>{
      c.x+=c.speed;
      if(c.x>1100) c.x=-100;
    });
  }
}
