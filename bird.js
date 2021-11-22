function Bird(x,y) {

this.x = x;
this.y=y;
this.acceleration = 0;
this.gravity = 0.355;
this.forcehaut = -10;



this.show = function () {
	fill(255);
	ellipse(this.x,this.y,40,40);
}

this.update =function(){
	this.acceleration+=this.gravity;
	this.y+=this.acceleration;


	if(this.y > height) {
		this.y = height;
		this.acceleration=0;
	}
    
    
	if(this.y < 0) {
		this.y = 0;
        this.acceleration = 1;
		
	}
}

this.up = function() {
		this.acceleration += this.forcehaut;
		console.log(this.acceleration);
	}



}
