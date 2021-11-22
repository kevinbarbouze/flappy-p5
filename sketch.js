
var bird;
var pipes=[];
var y =0;
function setup() {

createCanvas(400,600);
bird=new Bird (50,height/2);
    
    


}

function draw() {
background(0);
 bird.show();
 bird.update();
 
    if(frameCount %120 == 0){
pipes.push(new Pipe());
    }
    
for(var i=0;i<pipes.length;i++){  
 pipes[i].show();
pipes[i].update();
    
    if (pipes[i].hits(bird)) {
      console.log("HIT");
        background(255);
        }
    
    if(pipes[i].oob())
        console.log(pipes[i]);
    }
}


        

    


function keyPressed() {
	if(key == ' '){
		bird.up();
	}
}


