class CatBase {
  constructor(scene,x,y){
    this.sprite=scene.physics.add.sprite(x,y,"cat");
  }
  follow(player,speed=0.05){
    this.sprite.x += (player.sprite.x-30-this.sprite.x)*speed;
  }
  update(){}
}

export class HappyCat extends CatBase {
  update(p){ this.follow(p,0.06); }
}
export class JumpyCat extends CatBase {
  update(p){
    this.follow(p,0.08);
    if(Math.random()<0.01) this.sprite.setVelocityY(-250);
  }
}
export class LazyCat extends CatBase {
  update(p){
    if(Math.random()>0.02) this.follow(p,0.03);
  }
}
