# sweepWithTips

<!DOCTYPE html> 说明用什么版本编写的
<div> 块级元素 有拆行
<span> 行内元素
<table> 
打包 <fieldset>
        <legend>标题</legend>
        <input> input自带type和name，可以加id。input是单标签。
     </fieldset>
     
label for for后面加的是id 和id绑定 （显式绑定）
——————>means 在label里面的东西，也具有id那行的功能。
显式的联系：
<label for="SSN">Social Security Number:</label>
<input type="text" name="SocSecNum" id="SSn" />
将文本 "Social Security Number:" 和表单的社会安全号码的文本输入控件 ("SocSecNum") 联系起来， for = id = SSN。

隐式的联系：
<label>Date of Birth: <input type="text" name="DofB" /></label>
第二个标记 ("Date of Birth:") 不需要 for 属性，它的相关控件也不需要 id 属性，它们是通过在 <label> 标签中放入 <input> 标签来隐式地连接起来的。嵌套。


解决html引用css不起作用的问题。
  resave html和css为utf-8。
  meta 部分要加 charset=“utf-8”
  
  
css  //css 叫外部样式表。内部用<style></style>。内联在标签内用一个style。
.main table td {  //这行叫选择器。要改样式的元素。 要完全按顺序符合，嵌套在main，table，td里面的才调用下面的样式。
            margin:10px auto;  //margin 外边距
            padding:20px; // padding 内边距
            border:2px outset #EEE; // border 边框
            font-size:20px;
            text-align:center; //text-align 【文本】水平对齐
            cursor:pointer; 光标
        }
	
	margin 后面有四个参数 上右下左。如果两个就是 上下 左右。所以10 auto是 上下10，左右auto 自动适应。自适应之后，随便调整左右宽度都会对称。
	margin 整个框和浏览器距离。 padding 字/内容和框的距离。background 框颜色。width 框宽度。
	:hover 把鼠标放在它上面就会变（颜色）？
	line-height：行间距

类选择器。元素.类 
p.important {color:red;}
<p class="important">blahblah.</p>

id选择器。# id 
<p>This is a <em id="mostImportant">paragraph</em>.</p>
#mostImportant {color:red; background:yellow;}
只能用一次。不能结合使用。可以插入。

属性选择器。元素[属性] 也可以具体到[属性=blabla]
.main input[type=button] {
    cursor:pointer;
}

.main:after{
	clear:both;
	display:block;
	content:"";
	line-height:0;
	height:0;
	visibility:hidden;
}
在Firefox等符合W3C标准的浏览器中，如果有一个DIV作为外部容器，内部的DIV如果设置了float样式，则外部的容器DIV因为内部没有clear，导致不能被撑开。
这个clearfix的CSS使用了after这个伪对象，它将在应用clearfix的元素的结尾添加content中的内容。在这里添加了一个" "， 并且把它的display设置成block；高度设为0；clear设为both；visibility设为隐藏。这样就达到了撑开容器的目的啦。
——————>或者直接在外容器上加上overflow:hidden.

清除浮动
http://www.cnblogs.com/ForEvErNoME/p/3383539.html

border 不是单独用。
border-style:(上右底左) dotted solid double dashed
border-width
border-color

自执行函数
https://segmentfault.com/q/1010000000117476

if (window.ActiveXObject && parseInt(navigator.userAgent.match(/msie ([\d.]+)/i)[1]) < 8)
window.ActiveXObject  判断浏览器是否支持ActiveX控件
parseInt 用于解析一个字符串，并返回一个整数
navigator.userAgent.match 判断浏览器
/msie IE

.join("") 数组.join
把数组中的所有元素放入一个字符串

-------------this----------------
当一个函数被保存为一个对象的属性时，我们称它为一个方法。当一个方法被调用时，this被绑定到该对象。

当一个函数并非一个对象的属性时，那么它就是被当做一个函数来调用的：
var sum = add(3,4);

var foo = {x: 10};
 var bar = {
  x: 20,
  test: function () {
  alert(this === bar); // true
  alert(this.x); // 20
  这里x是全局变量，means 里面改了x 最终x的值会跟着改变。
  
  
  function counter2(start){ 
    var count = start;   
    var increase = function(){
         this.count++;
    }; 
    var getValue = function(){
         return this.count;
    };
    return { 
    inc : increase , 
    get :getValue }
}

var c2 = new counter2(5);
/*
实例化c2:
传入参数start=5；
定义并赋值内部变量count=5
定义increase和getValue函数表达式
将一个匿名对象赋值给c2，对象包含inc和get两个属性，分别指向两个函数。
*/
c2.inc(); //can NOT access this.count
/*
直接执行对象c2下的inc函数。由于是直接执行函数，函数中的this将被指向函数的调用者：对象c2。
increase函数试图查找this.count，即c2.count，并执行++操作。
由于对象c2中不存在count属性，对一个undefined对象进行++操作时生成NaN，即c2.count被赋值为NaN。
*/
console.log(c2.get());//return NaN
/*
直接执行对象c2下的get函数。函数this指向c2，因此返回在c2.count。由于在increase中，c2.count被赋值为NaN，因此返回NaN。
*/

内部函数，就是函数里有函数。
var name = "clever coder";
var person = {        //这里不算第一个函数
	name : "foocoder",
	hello : function(sth){   //这是第一个函数
		var that = this;
		var sayhello = function(sth) {   //这是第二个
			console.log(that.name + " says " + sth);
		};
		sayhello(sth);
	}
}
setTimeout、setInterval和匿名函数 会让this指向全局。
https://github.com/goddyZhao/Translation/blob/master/JavaScript/this.md

https://segmentfault.com/q/1010000000521879

-----------------------------
math.floor 向下取整。

$(document).ready(function(){}) 可以简写成 $(function(){})
window.onload=function(){...}的作用又跟声明函数loading function loading(){...}，并在html的<body onload="loading()">调用一样。
区别 ：
  执行时间不同： $(document).ready在页面框架下载完毕后就执行；而window.onload必须
在页面全部加载完毕（包含图片下载）后才能执行。很明显，前者的执行效率高于后者。
  执行数量不同： $(document).ready可以重复写多个，并且每次执行结果不同；而window.
onload尽管可以执行多个，但仅输出最后一个执行结果，无法完成多个结果的输出。

$
$ 是 JQuery 常用的一个回传函数，定义为 "选取" 英文是 selector 的缩写
例子︰
$.function(); 
就是 选取 JQuery 定义的 function() 执行
$('input')
就是 选取 HTML 当中全部的 input 标签
$('#abc')
就是 选取 HTML 当中 ID 名称为 abc 的物件
$.fn.testing = function() {}
就是 选取 JQuery 内核函数 fn (函数) 回传给 testing 这个名称、定义为一个功能 function()

回调函数
一般写程序是你调用系统的API，如果把关系反过来，你写一个函数，让系统调用你的函数，那就是回调了，那个被系统调用的函数就是回调函数。
boss.OnCookFinish+=me.AcceptFood;//此处表明，AcceptFood这个回调函数关心OnCookFinish事件，并且变成这个事件的回调函数

func.call（a）
call 让指向别的地方的this指针指向a。


self.$("m_" + i + "_" + j).onmousedown = function (e) {
e = e || window.event;  //获取事件
onmousedown 当元素上按下鼠标按钮时触发
e.button =0|1|2 means 左中右 键

绑定

删除绑定
