window.onload=function()
{
    var container=document.getElementById("middle_carousel");
    var list=document.getElementById("list");
    var buttons=document.getElementById("round").getElementsByTagName("span");
    var index=1;
    var animated=false;
    var timer;

    function showButton()
    {
        for(var i=0;i<buttons.length;i++)
        {
            if(buttons[i].className=="on")
            {
                buttons[i].className="";
                break;
            }
        }
        buttons[index-1].className="on";
    };

    function animate(offset)
    {
        animated=true;
        var newLeft=parseInt(list.style.left)+offset;
        var time=300;//位移总时间
        var interval=10;//位移间隔时间
        var speed=offset/(time/interval);//每次位移量
        function go()
        {
           if((speed<0 && parseInt(list.style.left)>newLeft) || (speed>0 && parseInt(list.style.left)<newLeft))
           {
            list.style.left=parseInt(list.style.left)+speed+"px";
            setTimeout(go, interval);
           }
           else
           {
                animated=false;
                list.style.left=newLeft+"px";
                if(newLeft>-330)
                {
                    list.style.left=-990+"px";
                }
                if(newLeft<-990)
                {
                    list.style.left=-330+"px";
                }
           }
        };
        //list.style.left=parseInt(list.style.left)+offset+"px";
        go();
        
    };

    function play()
    {
        timer=setInterval(function()
        {
            next();
        },3000);
    }
    function stop()
    {
        clearInterval(timer);
    }

    function next()
    {
        if(index==3)
        {
            index=1;
        }
        else
        {
            index+=1;
        }
        showButton();
        if(!animated)
        {
            animate(-330);
        }
       
    };

    function prev()
    {
        if(index==1)
        {
            index=3;
        }
        else
        {
            index-=1;
        }
        showButton();
        if(!animated)
        {
            animate(330);
        }
    };

    for(var i=0;i<buttons.length;i++)
    {
        buttons[i].onclick=function()
        {
            if(this.className=="on")
            {
                return;
            }
            var myIndex=parseInt(this.getAttribute("index"));
            var offset=-330*(myIndex-index);
            animate(offset);
            index=myIndex;
            showButton();
            if(!animated)
            {
                animate(-330);
            }
        };
    };

    container.onmouseover=stop;
    container.onmouseout=play;

    play();
}

/*window.onload=function()
{
	var container=document.getElementById("middle_carousel");
	var list=document.getElementById("list");
	var buttons=document.getElementById("round").getElementsByTagName("span");
}*/