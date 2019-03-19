document.querySelector(".btn").addEventListener('click', move);

function move(){
    setInterval(faster, 2);
    }
    var a = 0;
function faster(){
    a++;
    document.querySelector(".image-left").style = "transform: translateX(" +a+"px);";
    setInterval(drift, 3000);
    
    }
function drift(){
    document.querySelector(".racer").style = "transform: rotateY(180deg) ;";
    }
    
document.querySelector(".btn").addEventListener('click', moveT);    
function moveT(){
    setInterval(fasterT, 5);
    }
    var e = 0;
function fasterT(){
    e++;
    document.querySelector(".image-left2").style = "transform: translateX(" +e+"px);";
}