var mouseEvent = " ";
var last_position_of_x,last_position_of_y;

canvas =document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "red";
width_of_line = 4;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){


mouseEvent =  "mousedown";


}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){

Present_position_of_x = e.clientX - canvas.offsetLeft;
Present_position_of_y = e.clientY - canvas.offsetTop;

if (mouseEvent == "mousedown"){

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.moveTo(last_position_of_x,last_position_of_y);
ctx.lineTo(Present_position_of_x,Present_position_of_y);
ctx.stroke();


}
last_position_of_x = Present_position_of_x;
last_position_of_y = Present_position_of_y;

}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){


mouseEvent = "mouseup";



}
function Clear_Area (){

ctx.clearRect(0,0,canvas.width,canvas.height);


    
}