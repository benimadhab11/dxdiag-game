var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
//var bar = document.getElementById("bar");
//ctx.drawImage(bar,100,100);
/*
var bar = new Image;
bar.onload = function(){
	for(var i=0;i<7;i++){
	ctx.drawImage(bar,40*i+5,0);
}
};
bar.src="1.png";
*/

 
var W = c.width;
var H = c.height;
  
var x = W/2-20,
    y = 135,
    w = 40,
    h = 10;
 

var m=x+14.5;
var n=y-12;

var slide = new Image;
slide.src="1.png";
slide.onload = function(){
ctx.drawImage(slide,x,y);
}

var ball = new Image;
ball.src="ba.png";
ball.onload = function(){
ctx.drawImage(ball,m,n,12,12);
}

 /*
function draw() {
	ctx.clearRect(x, y, w, h);
	if(x<=0)
		c=0
	if(x>=260 )
		c=1;
	if(c==1)
		x=x-vx;
	if(c==0)
		x=x+vx;
	ctx.drawImage(slide,x,y);
}

*/

var c=0,d=0;
function drawb(){
	ctx.clearRect(m,n,12,12);
	if(n==123 && m>=x && m<=x+40)
		e=1;
	if(n==123 && !(m>=x-12 && m<=x+45))  
		e=0;
	
	if(m>=290){
		c=1;
	}
	if(m<=0){
		c=0;
	}
	if(n>=123){
	d=1;
	}
	if(n<=0){
		d=0;
	}
	if(c==0)
		m=m+0.2;
	if(c==1)
		m=m-0.2;
	if(d==0 || e==0)
		n=n+0.2;
	if(d==1 && e==1)
		n=n-0.2;
	ctx.drawImage(ball,m,n,12,12);


}





function drawa() {
	//ctx.clearRect(x, y, w, h);
ctx.drawImage(ball,m,n,12,12);
ctx.drawImage(slide,x,y);
}

function drawc() {
	//ctx.clearRect(x, y, w, h);
ctx.drawImage(slide,x,y);
}


var vx=0,vy=0,
	speed=2,
	f=0.6,
	keys=[];


var move=0;
function update(){
	if(keys[37]){
			if(vx > -speed)
				vx++;
			vx *= f;
			if(move==0){
				ctx.clearRect(x, y, w+10, h);
				ctx.clearRect(m,n,12,12);
				if(x<=0){
					x=x;
					m=m;}
				else{
					x=x-vx;
					m=m-vx;
					}
				drawa();
					}
			else{
				ctx.clearRect(x, y, w+10, h);
				if(x<=0){
					x=x;
					}
				else{
					x=x-vx;
					}
				drawc();
				}
			}

	if(keys[39]){
			if(vx < speed)
				vx++;
				vx *= f;
			if(move==0){
				ctx.clearRect(x, y, w-100, h);
				ctx.clearRect(m, n, 12, 12);
				if(x>=260){
					x=x;
					m=m
					}
				else{
					x=x+vx;
					m=m+vx;		
					}
				drawa();
				}
			else{
				ctx.clearRect(x, y, w-100, h);
				if(x>=260){
					x=x;
					}
				else{
					x=x	+vx;
					}
				drawc();
				}	
			}

		if(keys[32]){
			move=1;
			setInterval(drawb, 30);
	}
setTimeout(update, 10); 
}


















update();

window.addEventListener("keydown", function (e) {
		    keys[e.keyCode] = true;
			});
window.addEventListener("keyup", function (e) {
		    keys[e.keyCode] = false;
			});








