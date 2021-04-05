class Bird extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("sprites/bird.png");
      this.smokeImage= loadImage("sprites/smoke.png")
      this.cloudTrail = [];
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
  
      if(this.body.position.x > 200 && this.body.velocity.x > 10){
        var position = [this.body.position.x,this.body.position.y];
        this.cloudTrail.push(position);
      }
      //[[x,y],[x,y], etc.
  
      for(var i = 0; i<this.cloudTrail.length;i++){
          image (this.smokeImage,this.cloudTrail[i][0],this.cloudTrail[i][1] )
      }
      super.display();
    }
  }
  