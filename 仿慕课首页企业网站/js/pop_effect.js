window.onload=function(){
	var oBtn=document.getElementById("loginBtn");	
	oBtn.onclick=function(){
         openNew();
	}
}
function openNew(){
	var sHeight=document.documentElement.scrollHeight;
    var sWidth=document.documentElement.scrollWidth;
    var oHeight=document.documentElement.clientHeight;

    var oMask=document.createElement("div");
    oMask.id="mask";
    oMask.style.height=sHeight+"px";
    oMask.style.width=sWidth+"px";
    document.body.appendChild(oMask);

    var oLogin=document.createElement("div");
    oLogin.id="login";
    oLogin.innerHTML="<div class='loginCon'><div id='close'></div></div>";
    document.body.appendChild(oLogin);
    var dHeight=oLogin.offsetHeight;
    var dWidth=oLogin.offsetWidth;
    oLogin.style.left=(sWidth-dWidth)/2+"px";
    oLogin.style.top=(oHeight-dHeight)/2+"px";
    
    
            
    var oClose=document.getElementById("close");
	oClose.onclick=oMask.onclick=function(){
			document.body.removeChild(oLogin);
			document.body.removeChild(oMask);
	}
}