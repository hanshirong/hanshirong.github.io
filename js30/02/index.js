function createKedu(){
    var ul = document.getElementById("kedu")
    var lis = "";
    ul.innerHTML = ''
    for( var i = 0; i< 60; i++){
        lis+= "<li style='transform: rotate(" + i*6 + "deg)' ></li>"
    }
    ul.innerHTML+=lis;
}
createKedu();

function createNumber(){
    var ul = document.getElementById("number")
    var lis = "";
    ul.innerHTML = ''
    lis+= "<li>12</li>"
    for( var i = 1; i< 12; i++){
        lis+= "<li style='transform: rotate(" + i*30 + "deg)' > <span style = 'transform: rotate(" + -i*30 + "deg)'>" + i + "</span> </li>"
    }
    ul.innerHTML+=lis;
}
createNumber();

function initTime(){
    var time = new Date();
    var hour = time.getHours() >12 ? time.getHours() -12 : time.getHours
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var milsec = time.getMilliseconds();
    var hourAngle = (hour * 30 + (min * 6 / 12) + 180 ) % 360;
    var minAngle = (min * 6 + (sec * 6 / 60 ) + 180 ) % 360;
    var secAngle = (sec * 6 + (milsec * 0.36 / 1000 ) + 180 ) % 360;
    var hourDom = document.querySelector(".hour")
    hourDom.style.transform = `rotate(${hourAngle}deg)`
    var minDom = document.querySelector(".min")
    minDom.style.transform = `rotate(${minAngle}deg)`
    var secDom = document.querySelector(".sec")
    secDom.style.transform = `rotate(${secAngle}deg)`  
}

setInterval(initTime, 1000);
initTime();