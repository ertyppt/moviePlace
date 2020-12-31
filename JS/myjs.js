'use strict';

var loc = 1000 ;
var t;
var time;
var pos = 0;
var flag = false;

$(document).ready(function(){

 paomadeng();
 movieBar();
});

  
function paomadeng(){   
   if(pos > 350) {
    pos = 0;
   }
   $("#scrollBar").scrollLeft(pos++);
   t = setTimeout(paomadeng,30);

}

function movieBar(){
  if(loc == 1000 && flag == true) {
    flag = false; 
    //loc = 0;
   }
   
   if(flag == true){
    $("#testDiv").scrollLeft(loc++);
   }
   
   
   if(flag == false && loc == 0){
    flag = true;
    //loc = 300;
   }
   //console.log(loc);
   
   if(flag == false){
    $("#testDiv").scrollLeft(loc--);
   }

   time = setTimeout(movieBar,25);
}

