//生成一起的天数
const calculatetimeFromBegin = () => {
    let begin = new Date("2022-08-22")
    let today = new Date()
    let internal = Math.floor((today - begin) / (1000 * 60 * 60 * 24))
    return `我们已经在一起
    <l-text style="font-size:32px" color="#a51a1a" content="${internal}" fontsize="20px"></l-text>
    天啦～`
}

//判断是否到达底部
//const ifscrolledToBottom = () => window.clientHeight + window.outerHeight >= document.documentElement.scrollHeight;

window.onload = () => {
    window.liu = {
        sentence: document.getElementsByClassName("sentence")[0],
        repeat: document.getElementById("repeat"),
        timeFrombegin: document.getElementById("timeFrombegin")
    }
    window.liu.timeFrombegin.innerHTML = calculatetimeFromBegin()
    // window.liu.timeFromBegin.innerText = timeFromBegin()
};


//监控滚动事件
window.addEventListener("touchstart", (ev) => {
    //如果滑动到底部的话就添加一行
    if (true) {
        console.log("到底部啦")
        let nodeClone = window.liu.sentence.cloneNode(true)
        window.liu.repeat.appendChild(nodeClone);
    }
})


