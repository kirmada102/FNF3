export default class HeartSystem {
  constructor(scene){
    this.group=scene.physics.add.group();
    for(let i=0;i<8;i++){
      const h=this.group.create(300+i*120,300,"heart");
      h.bob=Math.random()*Math.PI*2;
    }
    scene.physics.add.overlap(
      scene.player?.sprite,
      this.group,
      (_,h)=>h.destroy()
    );
  }
  update(){
    this.group.getChildren().forEach(h=>{
      h.bob+=0.05;
      h.y+=Math.sin(h.bob)*0.3;
    });
  }
}
