
// 颜色，画笔粗细，橡皮擦的初始值
var color = "#66ccff"
var size = "1"
var eraser = false
var isDrawing = false

const inputs = document.querySelectorAll("input");

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');
// 图形轮廓的颜色
ctx.strokeStyle = color;
// 线条宽度
ctx.lineWidth = size;
// 线条的末端以圆形结束
ctx.lineCap = "round";
// 两条线段的连接处以圆形连接
ctx.lineJoin = "round";
// 初始点是0,0点
lastX = 0;
lastY = 0;
// 更新画笔参数
function updateValue(){
    if(this.name == "size"){
        ctx.lineWidth = this.value;
    }
    if(this.checked){
        ctx.strokeStyle = "white";
    }else {
        // 获取当前的颜色值
        ctx.strokeStyle = document.getElementById("color").value;
    }
}

function draw(e){
    if(!isDrawing)
        return;
    if(e.type =="mousemove"){
        x = e.offsetX;
		y = e.offsetY;
    } else  {
        // 处理触摸屏操作
            x = e.changedTouches[0].clientX -e.target.offsetLeft;
            y = e.changedTouches[0].clientY-e.target.offsetTop;
        // console.log(e);
    }
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(x,y);
    ctx.stroke();
    [lastX,lastY] = [x,y]
}
// 监听参数的改变
inputs.forEach(input => input.addEventListener("change",updateValue))

// 鼠标按下
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
// 鼠标移动
canvas.addEventListener('mousemove', draw);
// 鼠标松开
canvas.addEventListener('mouseup', () => isDrawing = false);
// 鼠标一旦离开canvas容器，必须将draw函数给清理掉
canvas.addEventListener('mouseout', () => isDrawing = false);

canvas.addEventListener('touchstart', (e) => {
    isDrawing = true;
    lastX = e.changedTouches[0].clientX-e.target.offsetLeft;
    lastY = e.changedTouches[0].clientY-e.target.offsetTop;
});

canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', () => isDrawing = false);
canvas.addEventListener('touchcancel', () => isDrawing = false);

// 清空当前画布
var btn = document.getElementById("clear");
btn.onclick=function(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}