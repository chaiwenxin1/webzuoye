/*
* @Author: Administrator
* @Date:   2019-12-25 18:40:08
* @Last Modified by:   Administrator
* @Last Modified time: 2019-12-25 18:40:33
*/
var bigpic=document.getElementById("bigpic");
    var main=document.getElementById("main");
    var smallpic=main.getElementsByTagName("img");
    for(var i=0;i<smallpic.length;++i){
      	smallpic[i].onclick=function(){
		    for(var i=0;i<smallpic.length;++i){
		      	if(smallpic[i].hasAttribute("class"))
		        	smallpic[i].removeAttribute("class");
		    }
		    this.setAttribute("class","pb");
		    var imgSrc=this.getAttribute("src");
		    bigpic.setAttribute("src",imgSrc);
		    this.setAttribute("index",1);
	   	}
    }