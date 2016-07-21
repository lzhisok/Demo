var can1,can2;
var ctx1,ctx2;

var canWidth,canHeight;
var lastTime,deltaTime;

var bgPic=new Image();

var ane;
var fruit;
var mom;
var baby;

var mx;
var my;

var babyTail=[];
var babyEye=[];
var babyBody=[];

//大鱼动画
var momTail=[];
var momEye=[];
var momBodyOra=[];
var momBodyBlue=[];

var data;

var wave;
var halo;

var dust;
var dustPic=[];

document.body.onload=game;
function game(){
	init();
	lastTime=Date.now();
	deltaTime=0;
	gameloop();
}
function init(){
	can1=document.getElementById("canvas1");
	ctx1=can1.getContext("2d");
	can2=document.getElementById("canvas2");
	ctx2=can2.getContext("2d");

	can1.addEventListener("mousemove", onMouseMove, false);


	bgPic.src="./src/background.jpg";

	canWidth=can1.width;
	canHeight=can1.height;

	ane=new aneObj();
	ane.init();

	fruit=new fruitObj();
	fruit.init();

	mom=new momObj();
	mom.init();

	baby=new babyObj();
	baby.init();

	mx=canWidth*0.5;
	my=canHeight*0.5;
    //小鱼动画
	for(var i=0; i < 8; i++)
	{
		babyTail[i] = new Image();
		babyTail[i].src = "./src/babyTail" + i + ".png";
	}

	for(var i=0;i<2;i++){
		babyEye[i]=new Image();
		babyEye[i].src="./src/babyEye"+i+".png";
	}

	for(var i=0;i<20;i++){
		babyBody[i]=new Image();
		babyBody[i].src="./src/babyFade"+i+".png";
	}
    
    //大鱼动画
	for(var i=0;i<8;i++){
		momTail[i]=new Image();
		momTail[i].src="./src/bigTail"+i+".png";
	}
	for(var i=0;i<2;i++){
		momEye[i]=new Image();
		momEye[i].src="./src/bigEye"+i+".png";
	}
	data=new dataObj();
	for(var i=0;i<8;i++){
		momBodyOra[i]=new Image();
		momBodyBlue[i]=new Image();
		momBodyOra[i].src="./src/bigSwim"+i+".png";
		momBodyBlue[i].src="./src/bigSwimBlue"+i+".png";
	}
	ctx1.font="30px Verdana";
	ctx1.textAlign="center";

	wave=new waveObj();
	wave.init();

	halo=new haloObj();
	halo.init();
    
    for(var i=0;i<7;i++)
    {
    	dustPic[i]=new Image();
    	dustPic[i].src="./src/dust"+i+".png";
    }
	dust=new dustObj();
	dust.init();

}
function gameloop(){
	requestAnimFrame(gameloop);
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	if(deltaTime > 40) deltaTime=40;

    drawBackground();
    ane.draw();
    fruitMonitor()
    fruit.draw();

    ctx1.clearRect(0, 0, canWidth, canHeight)
    mom.draw();
    momFruitsCollision();
    momBabyCollision();
    baby.draw();

    data.draw();
    wave.draw();
    halo.draw();
    dust.draw();
}
function onMouseMove(e)
{
	if(!data.gameOver)
	{
		if(e.offsetX || e.layerX)
		{
			mx = e.offsetX == undefined ? e.layerX : e.offsetX;
			my = e.offsety == undefined ? e.layerY : e.offsetY;
		}
	}	
}