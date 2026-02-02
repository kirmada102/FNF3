export default class PlayerGirl {
  constructor(scene,x,y){
    this.scene=scene;
    this.sprite=scene.physics.add.sprite(x,y,"girl");
    this.sprite.setCollideWorldBounds(true);
    this.cursors=scene.input.keyboard.createCursorKeys();
  }
  update(){
    const s=this.sprite;
    if(this.cursors.left.isDown) s.setVelocityX(-200);
    else if(this.cursors.right.isDown) s.setVelocityX(200);
    else s.setVelocityX(0);
    if(this.cursors.up.isDown && s.body.onFloor())
      s.setVelocityY(-380);
  }
}
