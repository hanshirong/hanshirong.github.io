const inputs = document.querySelectorAll("input")
function handleChange(){
    // 获取属性的单位
    const danwei = this.dataset.sizing || ""
    // console.log(this.value+danwei)
    document.documentElement.style.setProperty(`--${this.name}`,this.value+danwei)
}
inputs.forEach(input =>{
    // input框改变完之后会触发
    input.addEventListener("change",handleChange)
    // 鼠标移动的时候就想触发
    input.addEventListener("mousemove",handleChange)
})
