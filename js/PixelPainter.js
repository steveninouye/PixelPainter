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
            document.getElementById('row' + i).appendChild(makeElem('td', 'r' + i + 'c' + h, " "));
        }
    }
}

function leftColumnsAndRows(x, y){
    document.getElementById('leftColumn').appendChild(makeElem('table', 'colorPicker', ''));
    for(var i = 0; i < x; i++){
        document.getElementById('colorPicker').appendChild(makeElem('tr', 'roww' + i, null));
        for(var h = 0; h < y; h++){
            document.getElementById('roww' + i).appendChild(makeElem('td', 'r' + i + 'c' + h, "X"));
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

leftColumnsAndRows(10,5);
document.getElementById('leftColumn').appendChild(makeElem('div', 'selectedColor', 'COLOR'));
document.getElementById('leftColumn').appendChild(makeElem('button', 'erase', 'Erase'));
document.getElementById('leftColumn').appendChild(makeElem('button', 'clear', 'Clear'));


mainColumnsAndRows(25,25);

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