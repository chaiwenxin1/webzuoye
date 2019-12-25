/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-12-15 09:17:52
 * @version $Id$
 */
var box1=document.getElementById("box1");
	var navList=document.getElementById("nav").children;
	var slider1=document.getElementById("slider1");
	var left=document.getElementById("left");
	var right=document.getElementById("right");
	var index=1;
	var intervaled;
	var ismoving=false;
	//轮播下一张的函数
	function next(){
		if(ismoving){
			return ;
		}
		ismoving=true;
		index++;
		navChang();
		animate(slider1,{left:-1200*index},function(){
			if(index===6){
				slider1.style.left="-1200px";
				index=1;
			} 
			ismoving=false;  
		});
	} 
	function prev(){
        if(ismoving){
			return ;
		}
		ismoving=true;
		index--;
		navChang();
		animate(slider1,{left:-1200*index},function(){
			if(index===0){
				slider1.style.left="-6000px";
				index=5;
			}  
			ismoving=false;   
		});
	} 
	var intervaled=setInterval(next,3000);
	//鼠标划上去清除定时器
	box1.onmouseover=function(){
		animate(left,{opacity:50});
		animate(right,{opacity:50});
		clearInterval(intervaled);
	}
	//鼠标划出开定时器
	box1.onmouseout=function(){
		animate(left,{opacity:0});
		animate(right,{opacity:0});
		intervaled=setInterval(next,3000);
	}
	right.onclick=next;
	left.onclick=prev;
	for(var i=0;i<navList.length;i++){
		navList[i].idx=i;
		navList[i].onclick=function(){
            index=this.idx+1;
            navChang();
			animate(slider1,{left:-1200*index});

		}
	}
	//小按钮背景色切换
	function navChang(){
		for(var i=0;i<navList.length;i++){
			navList[i].className="";
		}
		if(index===6){
			navList[0].className="active";
		}else if(index===0){
            navList[4].className="active";
		}
		else {
		    navList[index-1].className="active";
	    }
	}
	var text=document.getElementById("text");
    var inter=setInterval(function(){
    	var marginLeft=getStyle(text,"margin-left");
    	console.log(marginLeft);
    	text.style.marginLeft=(parseInt(marginLeft)-2)+"px";
    	if(getStyle(text,"margin-left")=="-320px"){
    		text.style.marginLeft=900+"px";
    	}
    },50)
