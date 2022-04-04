function playMusic(e){
    const divbox = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(! divbox) return;
    divbox.classList.toggle('playing');
    const spanBoxs = divbox.querySelectorAll("span");
    const des = spanBoxs[1].innerHTML;
    // 将音乐节拍名字转为小写内容
    const musicSrc = "./sounds/"+des.toLowerCase()+".wav"
    var audio = new Audio(musicSrc);
    audio.currentTime = 0;
    audio.play();           
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.box'));
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
});
window.addEventListener("keydown",playMusic);