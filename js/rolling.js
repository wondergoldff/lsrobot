var ous = document.getElementById("osb");
var olist = ous.rows.length;
for (var i = 0; i < olist; i++) {
    if (olist % 2 == 0) {
        if (i % 2 == 0) {
            ous.rows[i].style.backgroundColor = "#ddd";
        }
        else {
            ous.rows[i].style.backgroundColor = "#fff";
        }
    }
    else {
        if (i % 2 == 0) {
            ous.rows[i].style.backgroundColor = "#ddd";
        }
        else {
            ous.rows[i].style.backgroundColor = "#fff";
        }
    }

}
var speed = 50;

var dom = document.getElementById("dome");
var dom1 = document.getElementById("dome1");
var dom2 = document.getElementById("dome2");
dom2.innerHTML = dom1.innerHTML //复制dome1为dome2
//var tabTop = document.getElementById("demoTop");
//var tab3 = document.getElementById("demo3");
//var tab4 = document.getElementById("demo4");
//tab4.innerHTML = tab3.innerHTML;


function Marquee() {
    if (dom2.offsetHeight - dom.scrollTop <= 0) //当滚动至dome1与dome2交界时
        dom.scrollTop -= dom1.offsetHeight //dome跳到最顶端
    else {
        dom.scrollTop++;
    }
}

//function Marquee2() {
//    if (tabTop.scrollTop >= tab4.offsetHeight)
//        tabTop.scrollTop -= tab3.offsetHeight
//    else {
//        tabTop.scrollTop++;
//    }
//}






//tabTop.onmouseover = function () { clearInterval(MyMar2) };
//tabTop.onmouseout = function () { MyMar2 = setInterval(Marquee2, speed) };
var MyMar1 = setInterval(Marquee, speed) //设置定时器
dome.onmouseover = function () { clearInterval(MyMar1) }//鼠标移上时清除定时器达到滚动停止的目的
dome.onmouseout = function () { MyMar1 = setInterval(Marquee, speed) }//鼠标移开时重设定时器，继续