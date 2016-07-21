window.onload=function(){
	var oBtn=document.getElementById("btn");
	var timer=null;
	var isTop=true;
	var cHeight=document.documentElement.clientHeight;

	window.onscroll=function(){
		var sTop=document.documentElement.scrollTop || document.body.scrollTop;

		if(sTop>=cHeight){
			oBtn.style.display="block";
		}
		else{
			oBtn.style.display="none";
		}
		if(!isTop){
			clearInterval(timer);
		}
		isTop=false;
		
	}

	oBtn.onclick=function(){
		timer=setInterval(function(){
			var sTop=document.documentElement.scrollTop || document.body.scrollTop;
			var iSpeed=Math.floor(-sTop/6);
			document.documentElement.scrollTop = document.body.scrollTop =sTop+iSpeed;
			isTop=true;
			if(sTop==0){
				clearInterval(timer);
			}
		}, 30);
		

	}
}