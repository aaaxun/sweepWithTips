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
            text-align:center; //text-align 水平对齐
            cursor:pointer; 光标
        }
	
	margin 后面有四个参数 上右下左。如果两个就是 上下 左右。所以10 auto是 上下10，左右auto 自动适应。自适应之后，随便调整左右宽度都会对称。
	margin 整个框和浏览器距离。 padding 字/内容和框的距离。background 框颜色。width 框宽度。
