<!--javascript-->
<!--总函数-->
var ById=function(id){
	return document.getElementById(id);
}
<!--总函数结束-->
<!--跑马灯框-->
var nav=ById('float').getElementsByTagName('li');
var num=ById('number').getElementsByTagName('li');
var i=0,len = nav.length;
var timer;
var move=function(){
		if(i-1>=0){
			nav[i-1].style.display="";
			num[i-1].style.background="rgba(0,0,0,0.3)";
		}
		if(i>len-1){i=0;}
		nav[i].style.display="block";
		num[i].style.background="rgba(0,0,0,0.6)";
		i++;
	}
	move();
var ran=function(){ 
	timer=setInterval(function(){
	move();
},3000);
}
ran();
var stoptime=function(){
	clearInterval(timer);
}
	/*点哪打哪*/
var s=function(r){
	var t;
	for(var e=0;e<=num.length;e++){
		if(e==r) {
			t=e;	
		}	
	}
	for(var q=0;q<nav.length;q++){
		nav[q].style.display="none";
		num[q].style.background="rgba(0,0,0,0.3)";
	}
	nav[t-1].style.display="block";
	num[t-1].style.background="rgba(0,0,0,0.6)";
	i=t;
}
   /*左右箭头*/
var oLeft = document.getElementById('left-arrow');
	oLeft.onmouseover = function(){
	oLeft.style.backgroundPosition = '0 0';
	};
	oLeft.onmouseout = function(){
	oLeft.style.backgroundPosition = '-83px 0';
}
var oRight = document.getElementById('right-arrow');
	oRight.onmouseover = function(){
	oRight.style.backgroundPosition = '-41.5px 0';
	};
	oRight.onmouseout = function(){
	oRight.style.backgroundPosition = '-124.5px 0';
}
var goleft=function(){
	var t=i;
	if(t==1){
		nav[0].style.display="none";
		num[0].style.background="rgba(0,0,0,0.3)";
		nav[4].style.display="block";
		num[4].style.background="rgba(0,0,0,0.6)";
		t=5;
	}
	else{
		nav[t-1].style.display="none";
		num[t-1].style.background="rgba(0,0,0,0.3)";
		nav[t-2].style.display="block";
		num[t-2].style.background="rgba(0,0,0,0.6)";
		t=t-1;
		}
		i=t;
}
var goright=function(){
	var t=i;
	if(t==5){
		nav[4].style.display="none";
		num[4].style.background="rgba(0,0,0,0.3)";
		nav[0].style.display="block";
		num[0].style.background="rgba(0,0,0,0.6)";
		t=1;
	}
	else{
		nav[t-1].style.display="none";
		num[t-1].style.background="rgba(0,0,0,0.3)";
		nav[t].style.display="block";
		num[t].style.background="rgba(0,0,0,0.6)";
		t=t+1;
		}
		i=t;
}
<!--跑马灯框结束-->
<!---->
<!---->
<!---->
