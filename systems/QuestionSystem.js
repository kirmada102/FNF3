export default class QuestionSystem {
  constructor(scene,q,a,onSuccess){
    this.scene=scene;
    this.q=q;
    this.a=a;
    this.onSuccess=onSuccess;
    this.active=false;
  }
  ask(){
    this.active=true;
    const r=prompt(this.q);
    if(r && r.toLowerCase().trim()===this.a){
      this.onSuccess();
    } else {
      this.scene.cameras.main.shake(200,0.01);
      this.active=false;
    }
  }
}
