const coords = {x: 0, y: 0};
const circles = document.querySelectorAll(".circle");


circles.forEach(function(circle){
    circle.x = 0;
    circle.y = 0;
} )
window.addEventListener('mousemove', function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;

    animationCircles();
});

function animationCircles(){
    let x = coords.x, y = coords.y;
    
    circles.forEach(function(circle,index){
        circle.style.left = x -12 + "px";
        circle.style.top = y - 12 + "px";
       
        x+=10;
        y+=10;

    });
}