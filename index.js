let a=0;
var myaudio=document.getElementById("a123");
var isplay=false;



function myFunction(){
        
 
if(myaudio.paused){
myaudio.play();
document.getElementById("soundOn").innerHTML="ON";
}
else{
    myaudio.pause();
    document.getElementById("soundOn").innerHTML="OFF";
}
      
      
}

var p = document.getElementById("cc");
function func(image){
    p.src = image.src;
    p.parentElement.style.display="block";
}