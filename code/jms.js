var rowCount = 9;
var colCount = 9;
var mineCount = 10;
var currentStep;
//画格子
sweepTable = function(row, col){
	var tds = [];
	
　　for (var i = 0; i < rowCount; i++){
		tds.push("<tr>");
		for (var j = 0; j < colCount; j++) {
			 tds.push("<td id='s_" + i + "_" + j + "'></td>");
		}
		tds.push("</tr>");
	}
	document.getElementById("sweepper").innerHTML = tds.join("");
}

window.onload = function () {	
	document.oncontextmenu = function () { //屏蔽右键菜单
    			  return false;
    		};

	var radios = document.getElementsByName("level");
	radios[0].onclick = function () {
		rowCount = 9;
		colCount = 9;
	//	alert(rowCount + "_" + colCount);
		sweepTable(rowCount,colCount);
		document.getElementById("JMS_main").style.width = 9 * 40 + 20 + "px";
	//	begin(rowCount,colCount,this.value);
		mineCount = this.value;
	}
	radios[1].onclick = function () {
		rowCount = 16;
		colCount = 16;
	//	alert(rowCount + "_" + colCount);
		sweepTable(rowCount,colCount);
		document.getElementById("JMS_main").style.width = 16 * 36 + "px";
	//	begin(rowCount,colCount,this.value);
		mineCount = this.value;
	}
	radios[2].onclick = function () {
		rowCount = 16;
		colCount = 30;
	//	alert(rowCount + "_" + colCount);
		sweepTable(rowCount,colCount);
		document.getElementById("JMS_main").style.width = 30 * 32 + "px";
	//	begin(rowCount,colCount,this.value);
		mineCount = this.value;

	}
	document.getElementById("restCount").innerHTML = mineCount;
	init();	
}

document.getElementById("begin").onclick = function () {
	init();
}

arrs = [];

$ = function (id) {
	return document.getElementById(id);
}

init = function () {
	ctime = 0;
	currentStep = 0;
	sweepTable(rowCount,colCount);
	begin(rowCount,colCount,mineCount);
	document.getElementById("restCount").innerHTML = mineCount;
	document.getElementById("costTime").innerHTML = 0;
}

begin = function (row, col, val) {
	for (var i = 0; i < row; i++) {
		arrs[i] = [];
		for (var j = 0; j < col; j++) {
			arrs[i][j] = 0;
			$("s_" + i + "_" + j).className = "";
			$("s_" + i + "_" + j).innerHTML = "";
		}
	}
	var allCount = row * col;
	var randomNum = 0;
	var rowCol = 0;
	for (var i = 0; i < val; i++){
		randomNum = getRandom(1, allCount);
		rowCol = getRowCol(randomNum, col);
		arrs[rowCol.row][rowCol.col] = 9;
	//	alert(i + "：" + rowCol.row + ",," + rowCol.col);
	}	
	bindCells(val);
	calMineCount();
}

calMineCount = function () {
//	alert("calMineCount");
	for (var i = 0; i < rowCount; i++) {
		for (var j = 0; j < colCount; j++) {
			if (arrs[i][j] >= 9){
				if (i > 0 && j > 0) {
					arrs[i-1][j-1]++;
				}
				if (i > 0) {
					arrs[i-1][j]++;
				}
				if (i > 0 && j < colCount -1 ) {
					arrs[i-1][j+1]++;
				}
				if (j > 0) {
					arrs[i][j-1]++;
				}			
				if (j < rowCount -1) {
					arrs[i][j+1]++;
				}
				if (i < rowCount -1 && j > 0) {
					arrs[i+1][j-1]++;
				}
				if (i < rowCount -1) {
					arrs[i+1][j]++;
				}
				if (i < rowCount -1 && j < colCount -1) {
					arrs[i+1][j+1]++;
				}
			}
		}
	}
} 

bindCells = function (val) {
//	alert("openCells");
	for (var i = 0; i < rowCount; i++) {
		for (var j = 0; j < colCount; j++) {
			(function (i, j){
				$("s_" + i + "_" + j).onmousedown = function (e) {
					e = e || window.event;
					var mouseNum = e.button;

					if (currentStep == 0) {
						timedCount();
					}
					if (mouseNum == 0) {
						if ($("s_" + i + "_" + j).className != "flag") {
							openCells(i,j,val);
						}
					}
					else if (mouseNum == 2){	
						if ($("s_" + i + "_" + j).className != "flag") {
							$("s_" + i + "_" + j).className = "flag";
							if (document.getElementById("restCount").innerHTML > 0) {
								document.getElementById("restCount").innerHTML--;
							}			
						}	
						else {
							$("s_" + i + "_" + j).className = "";
							document.getElementById("restCount").innerHTML++;
						}				
					}
				}
			})(i,j);
		}
	}
}

openCells = function (i,j,val) {
	if ($("s_" + i + "_" + j).className != "normal") {
	//	alert(currentStep + "+" + val);
		if (arrs[i][j] < 9){
			$("s_" + i + "_" + j).className = "normal";		
			currentStep++;
			if (currentStep == rowCount * colCount - val){
				alert("Congratulations!");
				end();

			}		
		 	if (arrs[i][j] != 0) {
		 		$("s_" + i + "_" + j).innerHTML = arrs[i][j];
		 	}
			if (arrs[i][j] == 0) {
				showNoMine(i,j);				
			}
		}
		else  {
			alert("game over");
			// $("s_" + i + "_" + j).className = "landMine";
			end();
		}
	}
	
}

showNoMine = function (x,y) {	
	for (var i = x - 1; i < x + 2; i++) {
		for (var j = y - 1; j < y + 2; j++) {
			if (!(i == x && j == y)) {
			//	alert($("s_" + i + "_" + j).className);
				if ( $("s_" + i + "_" + j) && $("s_" + i + "_" + j).className =="") {
				//	alert(x+","+y+":"+i+","+j);
					openCells(i,j);
				}
			}
		}
	}
}

getRandom = function (firstValue, lastValue) {
	var valueRange = lastValue - firstValue + 1;
	return Math.floor(Math.random() * valueRange + firstValue);
}

getRowCol = function (val,div) {
	return {
		row : parseInt(val / div),
		col : val % div 
	};
}

var ctime;
var t;

function timedCount() {
	document.getElementById("costTime").innerHTML = ctime;
	ctime = ctime + 1;
	t = setTimeout("timedCount()",1000);
}

end = function () {
	for (var i = 0; i < rowCount; i++) {
		for (var j = 0; j < colCount; j++) {
			if (arrs[i][j] >= 9) {
				$("s_" + i + "_" + j).className = "landMine";
			}
			else if (arrs[i][j] == 0) {
				$("s_" + i + "_" + j).className = "normal";
			}
			else {
				$("s_" + i + "_" + j).className = "normal";
				$("s_" + i + "_" + j).innerHTML = arrs[i][j];
			}
		}
	}
	document.getElementById("restCount").innerHTML = 0;
	clearTimeout(t);
}
