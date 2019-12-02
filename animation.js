 var canvas=document.getElementById('myCanvas');
 var c=canvas.getContext("2d");

 canvas.width=window.innerWidth="1000";
 canvas.height=window.innerHeight="800";

 // c.beginPath();
 // c.arc(50,50,40,0,360,false);
 // c.stroke();

  var x=Math.random()*innerWidth;
  var y=Math.random()*innerHeight;
  var dx=Math.random();
  var dy=Math.random();
  var r=Math.random();
   function Circle(x,y,dx,dy,r,color){
   	    this.x=x;
   	    this.y=y;
   	    this.r=r;
   	    this.dx=dx;
   	    this.dy=dy;
        this.color=color;

   	    this.draw= function(){
   	    	c.beginPath();
    		  c.arc(this.x,this.y,this.r,0,360);
   		    c.stroke();
          c.fillStyle=this.color;
    		  c.fill();


   	    }
   	     this.update=function(){
   	    	if(this.x+this.r>innerWidth || this.x-this.r<0){
    			this.dx=-this.dx;
   		    }
    	 	if(this.y+this.r>innerHeight ){
          this.dy=-dy*10;
    		}else{
          this.dy+=2;
        }
   				this.x+=this.dx;
    			this.y+=this.dy;
    			this.draw();
        }

   	    
   }

   var color = new Array();
   color=['red','green','yello','orange','black','white','purple'];
   
   var cirArray = new Array();
   var manyColor;
 for (var i=0;i<500;i++){
	  var x=Math.random()*innerWidth;
	  var y=Math.random()*innerHeight;
	  var dx=Math.random()*4;
	  var dy=Math.random()*4;
	  var r=Math.random()*7;
    manyColor=color[i%5];
    var a = new Circle(x,y,dx,dy,r,manyColor);

  	cirArray.push(new Circle(x,y,dx,dy,r,manyColor));
}


	
   
   //c.update();
 //function for animation 
 function animate() {
  requestAnimationFrame(animate);
 	c.clearRect(0,0,innerWidth,innerHeight);
  a.update();
   	for(var j=0;j<cirArray.length;j++){
   		cirArray[j].update();
   	}
 	
 }
animate();
