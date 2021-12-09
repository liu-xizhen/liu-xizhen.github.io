var body = document.getElementsByTagName('body')[0];
// var textArr = ["乐观", "❤", "积极", "向上", "自由", "正能量", "(*^▽^*)", "元气满满", "开心", "快乐", "善良", "可爱", "暴富", "暴瘦"];
var textArr = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善", "❤", "★"];
document.addEventListener('click', (e) => {
    // 生成字符串
    var ev = e || window.event;
    var baseX = ev.pageX;
    var baseY = ev.pageY;
    var new_span = document.createElement('span');
    // var body = document.getElementsByTagName('body')[0];
    new_span.innerText = textArr[parseInt(Math.random() * textArr.length)]
    new_span.style.position = 'fixed';
    new_span.style.left = baseX - 10 + 'px';
    new_span.style.top = baseY + 'px';
    //span随机颜色↓
    // new_span.style.color = 'RGB(' + parseInt(Math.random() * 255) + ',' + parseInt(Math.random() * 255) + ',' + parseInt(Math.random() * 255) + ')';
    new_span.style.color = 'red';
    document.body.appendChild(new_span);
    // 定时器1实现字符串上升效果
    var timer = window.setInterval(() => {
        new_span.style.top = parseInt(window.getComputedStyle(new_span, null)['top']) - 2 + 'px';
        // console.log(window.getComputedStyle(new_span,null)['fontSize']);
        // new_span.style.opacity = window.getComputedStyle(new_span, null)['opacity'] - 0.02;

    }, 30);
    // 定时器2实现字符串消失
    window.setTimeout(() => {
        window.clearInterval(timer);
        document.body.removeChild(new_span);
    }, 1000);
}, false);