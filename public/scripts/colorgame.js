





var numsquares = 6;
var colors=generaterandomcolors(numsquares);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var headcolor = document.getElementById("headcolor");
var head = document.querySelector("h1");
var colormessage = document.getElementById("colormessage");
var resetbutton = document.querySelector("#reset");
var easybutton = document.querySelector("#easybutton");
var hardbutton = document.querySelector("#hardbutton");
headcolor.textContent = pickedcolor;








easybutton.addEventListener("click",function(){
  easybutton.classList.add("selected");
  hardbutton.classList.remove("selected");
   numsquares = 3;
  colors=generaterandomcolors(numsquares);
  pickedcolor = pickcolor();
  headcolor.textContent = pickedcolor;
  resetbutton.textContent="New colors";
  head.style.backgroundColor="steelblue";
  colormessage.textContent=null;
for(var i = 0;i<squares.length;i++){

    if(colors[i]){
    squares[i].style.backgroundColor=colors[i];
    }
    else{
        squares[i].style.display="none";
    }
}
});





hardbutton.addEventListener("click",function(){
    hardbutton.classList.add("selected");
     easybutton.classList.remove("selected");
   numsquares=6;
   colors=generaterandomcolors(numsquares);
   pickedcolor = pickcolor();
   headcolor.textContent = pickedcolor;
   resetbutton.textContent="New colors";
   head.style.backgroundColor="steelblue";
   colormessage.textContent=null;
for(var i = 0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
    squares[i].style.display="block";
}
});





resetbutton.addEventListener("click",function(){
    
        colors=generaterandomcolors(numsquares);
    pickedcolor = pickcolor();
    headcolor.textContent = pickedcolor;
    for(var i = 0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }   
    head.style.backgroundColor="steelblue";
    resetbutton.textContent="New colors";
    colormessage.textContent=null;
}
);





for(var i = 0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
  
     squares[i].addEventListener("click",function (){
         var clickedcolor = this.style.backgroundColor;
        
        if(pickedcolor === clickedcolor){
            colormessage.textContent="correct";
           changecolors(clickedcolor);
           head.style.backgroundColor=clickedcolor;
           resetbutton.textContent="play again?";
           
        }
            else{
               colormessage.textContent="try again"  
              this.style.backgroundColor = "#232323";
            }
        
        } );
    }


    
  function changecolors(color){
    for(var i = 0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
}  



function pickcolor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}




function generaterandomcolors(num){
    var arr=[];
   for(var i = 0;i<num;i++){
       arr.push(randomcolor());
   }

   return arr;
}



function randomcolor(){
    var red  = Math.floor(Math.random() * 256);
    var green  = Math.floor(Math.random() * 256);  
    var blue  = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " +  green + ", " +  blue  + ")" ;
}








