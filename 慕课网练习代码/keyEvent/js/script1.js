var data=["iPhone 6s Plus","iPad","佳能相机","50元充值卡","1000元京东购物券","液晶电视","谢谢惠顾"],
    timer=null,
    flag=0;

window.onload=function(){
	var play=document.getElementById("play"),
	    stop=document.getElementById("stop");
        
        //开始抽奖
	    play.onclick=playFun;
	    stop.onclick=stopFun;

	    //键盘事件
	    document.onkeyup=function(e){
	    	e=e ||window.event;
	    	if(e.keyCode == 13){
	    		if(flag == 0){
	    			playFun();
	    			flag=1;
	    		}
	    		else{
	    			stopFun();
	    			flag=0;
	    		}
	    	}
	    }
}

function playFun(){
	var play=document.getElementById("play"),
	    title=document.getElementById("title");
	clearInterval(timer);
	timer=setInterval(function(){
		var random = Math.floor(Math.random()*data.length);
		title.innerHTML=data[random];
	}, 50);
	play.style.background="#999";
}

function stopFun(){
	clearInterval(timer);
	var play=document.getElementById("play");
    play.style.background="#036";
}