
            //画格子
            sweepTable = function(){
            var tds = [];
              for (var i = 0; i < 10; i++){
            tds.push(""); 
            for (var j = 0; j < 10; j++) {
            tds.push(""); 
            }
            tds.push("
            "); 
            }
            document.getElementById_x("sweepper").innerHTML = tds.join("");
            }
            sweepTable();
            =================画格子的阶段===============
            http://www.cnblogs.com/wang7/archive/2012/07/29/2614202.html
            document.getElementById_x("id")  只是获取某元素ID为id的对象。
            document.getElementById_x("id").value 是获得这个对象的值。
            （一条标签里有 type=啥啥 id=啥啥 value=啥啥，上文第二条调用的就是这个value）
            value 既可以给数值、文本，也可以给函数。
            getElementById("id")的属性：
            http://www.cnblogs.com/yansheng/archive/2010/01/25/1656014.html
            document.body.href
            document.body.src
            document.body.height
            document.body.value
            对象事件：
            document.body.onclick=”func()”
            document.body.onmouseover=”func()”

            ~.innerHTML: 返回表格行的开始和结束标签之间的 HTML。
            取标签之间的值（aaa 或 bbb）：

            aaa
            document.getElementById_x("div").innerHTML;
            bbb
            document.getElementById_x("link").innerHTML;

            onclick 可以放在html的标签里，也可以放在js的函数里。

            调用js函数。
            直接的话
            alert(“王司徒”); 这样是可以的。
            ---
            function test() {
            alert("王司徒");
            }
            ----- 这样是不可以的。---------
            so：
            调用js函数的四种方法：
            http://www.jb51.net/article/49230.htm
            http://www.cnblogs.com/leejersey/p/3663278.html
            1.方法调用模式<</span>——————this指向调用对象
            2.函数调用模式<</span>——————this指向window
            3.构造器调用模式<</span>——————在使用prototype的方法时，必须实例化该对象才能调用其方法。
            http://www.cnblogs.com/mq0036/p/3934867.html
            var myfunc = function(a){
              this.a = a;
            };
            myfunc.prototype = {
              show:function(){alert(this.a);}
            }
            var newfunc = new myfunc("123123123");
            newfunc.show();

            4.apply,call调用模式<</span>——————为了改模式2中this的指针，让它指向调用的函数。
            格式：
            http://www.cnblogs.com/huyong/p/4139875.html
            Obj.call(thisObj,arg1,arg2…)
            Obj.apply(thisObj,[arg1,arg2…])
            意思是把Obj的方法放到thisObj上执行。


            构造方式——>Object.create()法或字面量
            Object.create http://www.cnblogs.com/huyong/p/4137870.html
            字面量 http://www.cnblogs.com/mofish/archive/2013/04/10/3012912.html

            *如果要调用这个方法不加括号，就是返回方法代码；如果要调用这个方法该对象属性后面加上括号，就得到方法的返回值

            构造函数的this：
            加this的是公有方法。
            Var的是私有方法。
            特权方法=公有方法。能被外部公开访问
             这个方法每次实例化都要重新构造
            而prototype是原型共享，所有实例化后，都共同引用同一个。

            js动态添加表格：
            动态添加 两种：
            1.       document_createElement_x等方法创建，然后使用Element.a添加
            2.       使用Element.innerHTML = sHTML的方式赋值给innerHTML。
            如果添加一串，可以先把这一串存入一个数组，再把数组赋给innerHTML。
            数组添加新元素：a.push()
            添加一个格式，实际上是先把这些格式的标识符的名字当成字符串存入数组，再去掉引号，让这些标识符执行。


            HTML DOM 定义了所有 HTML 元素的对象和属性，以及访问它们的方法。
            http://blog.csdn.net/u010792238/article/details/23444351

            table 居中：
            margin: auto;


            1. 全局 or 局部 || this or var || createNew or property。 未解决。 

            2. 定义一个二维数组。可以这样:
            arrs = [];
            for (var i = 0; i < row; i++) {
            arrs[i] = [];
            for (var j = 0; j < col; j++) {
            arrs[i][j] = 0;
            }

            3. 在随机的位置布雷：
            在格子总数的范围内，选出随机数（雷的位置），随机数的个数=雷的个数。
            再把这个随机数分解成坐标形式。
            需要两个函数：
            ① 选随机数的函数：
                 random*厚度+首项
            ② 分解坐标的函数：
                行：总数 / 列，         <——行是小数，需要取整。它用了parseInt 字符串？不明白。并没有字符串╮(╯▽╰)╭。
                列：总数 %列
              * return 返回两个数。注意格式。
            <—— 有一个问题。位置重复了怎么办。。。


            4. 然后的问题。可以点开格子。开始的作用是重新刷新。不能跟它一样点了开始才能玩。
            弄一个点开格子的。弄一个show，可以做test。
            绑定点击事件：（行和列得是全局变量。） 
            【JavaScript事件 详细讲解  http://blog.163.com/hongshaoguoguo@126/blog/static/18046981201311735325175/】
            · 鼠标事件 onmousedown
            调用的格式是： 对象.事件 = function（）{}
            这里是 cell.onmousedown = function(e) {
            e = e || window.event;  //兼容
            }
            · 使用闭包<————普通函数只会执行一次 （点击格子的时候只第一次有效）
            for(var i = 0; i < divs.length; i++)
            {
                (function(i){
                    // 再把你的事件绑定放这里面来
                })(i);
            }

            5. 翻空格。这个有点复杂。 考虑条件。

            6.收尾。判断成功，失败，计时，雷数。
            判断成功：除了雷 全打开了。——》需要一个记打开个数的。currentCount不能一点就有，加判定条件。
            ①雷的位置有可能重复：加判定。
            ②值传递，使用参数还是全局变量？

