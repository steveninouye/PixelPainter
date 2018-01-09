var colors = [
    '#DCDCDC','#D3D3D3','#C0C0C0','#A9A9A9','#808080','#696969','#778899','#708090','#2F4F4F','#000000','#CD5C5C','#F08080','#FA8072','#E9967A','#FFA07A','#DC143C','#FF0000','#B22222','#8B0000','#FFC0CB','#FFB6C1','#FF69B4','#FF1493','#C71585','#DB7093','#FFA07A','#FF7F50','#FF6347','#FF4500','#FF8C00','#FFA500','#FFD700','#FFFF00','#FFFFE0','#FFFACD','#FAFAD2','#FFEFD5','#FFE4B5','#FFDAB9','#EEE8AA','#F0E68C','#BDB76B','#E6E6FA','#D8BFD8','#DDA0DD','#EE82EE','#DA70D6','#FF00FF','#FF00FF','#BA55D3','#9370DB','#663399','#8A2BE2','#9400D3','#9932CC','#8B008B','#800080','#4B0082','#6A5ACD','#483D8B','#7B68EE','#ADFF2F','#7FFF00','#7CFC00','#00FF00','#32CD32','#98FB98','#90EE90','#00FA9A','#00FF7F','#3CB371','#2E8B57','#228B22','#008000','#006400','#9ACD32','#6B8E23','#808000','#556B2F','#66CDAA','#8FBC8B','#20B2AA','#008B8B','#008080','#00FFFF','#00FFFF','#E0FFFF','#AFEEEE','#7FFFD4','#40E0D0','#48D1CC','#00CED1','#5F9EA0','#4682B4','#B0C4DE','#B0E0E6','#ADD8E6','#87CEEB','#87CEFA','#00BFFF','#1E90FF','#6495ED','#7B68EE','#4169E1','#0000FF','#0000CD','#00008B','#000080','#191970','#FFF8DC','#FFEBCD','#FFE4C4','#FFDEAD','#F5DEB3','#DEB887','#D2B48C','#BC8F8F','#F4A460','#DAA520','#B8860B','#CD853F','#D2691E','#8B4513','#A0522D','#A52A2A','#800000','#FFFFFF','#FFFAFA','#F0FFF0','#F5FFFA','#F0FFFF','#F0F8FF','#F8F8FF','#F5F5F5','#FFF5EE','#F5F5DC','#FDF5E6','#FFFAF0','#FFFFF0','#FAEBD7','#FAF0E6','#FFF0F5','#FFE4E1'
]



function makeElem(elem, label, inside){
    var container = document.createElement(elem);
    container.id = label;
    container.innerHTML = inside;
    return container;
}

function mainColumnsAndRows(x, y){
    document.getElementById('middleColumn').appendChild(makeElem('table', 'mainTable', ''));
    for(var i = 0; i < x; i++){
        document.getElementById('mainTable').appendChild(makeElem('tr', 'row' + i, null));
        for(var h = 0; h < y; h++){
            document.getElementById('row' + i).appendChild(makeElem('td', 'main_r' + i + 'c' + h, "."));
        }
    }
}

function colorPickerColumnsAndRows(x, y){
    document.getElementById('leftColumn').appendChild(makeElem('table', 'colorPicker', ''));
    for(var i = 0; i < x; i++){
        document.getElementById('colorPicker').appendChild(makeElem('tr', 'roww' + i, null));
        for(var h = 0; h < y; h++){
            document.getElementById('roww' + i).appendChild(makeElem('td', 'r' + i + 'c' + h, "."));
            let index = i * x + h;
            document.getElementById('r' + i + 'c' + h).style.backgroundColor = colors[index];
        }
    }
}

function makePicture(elem, label, source){
    var container = document.createElement(elem);
    container.id = label;
    container.src = source;
    return container;
}

document.getElementById('pixelPainter').appendChild(makeElem('div', 'leftColumn', ''));
document.getElementById('pixelPainter').appendChild(makeElem('div', 'middleColumn', ''));
document.getElementById('pixelPainter').appendChild(makeElem('div', 'rightColumn', 'PICK A PICTURE'));
>>>>>>> ec4f933af6638a0d3b15d7e12d35e125749ee637

colorPickerColumnsAndRows(10,14);
document.getElementById('leftColumn').appendChild(makeElem('div', 'selectedColor', 'COLOR'));
document.getElementById('leftColumn').appendChild(makeElem('button', 'erase', 'Erase'));
document.getElementById('leftColumn').appendChild(makeElem('button', 'clear', 'Clear'));


mainColumnsAndRows(25,25);
>>>>>>> ec4f933af6638a0d3b15d7e12d35e125749ee637

// document.querySelector('body').appendChild(makePicture('img', 'mainPic', '../dinosaur.jpg'));
document.getElementById('middleColumn').style.backgroundImage = "url('dinosaur.jpg')";

//CLICK FUNCTION//
let middleTable = document.getElementById('mainTable');
let cells = middleTable.getElementsByTagName('td'); 
    for (var i = 0; i < cells.length; i++) { 
        cells[i].onclick = function(){
            console.log('color placed!');
        };
    }
let leftTable = document.getElementById('colorPicker');
let cellsTwo = leftTable.getElementsByTagName('td'); 
    for (var i = 0; i < cellsTwo.length; i++) { 
        cellsTwo[i].onclick = function(){
            console.log('color picked!');
        };
    }
    
//RANDOM COLORS TEST//
var cellColors = leftTable.getElementsByTagName('td'),
    colors = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0'];

for(var i = 0; i < cellColors.length; i++) {
    cellColors[i].style.backgroundColor = '#' + colors[Math.floor(Math.random() * colors.length)];
}
