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
var middleTable = document.getElementById('mainTable');
if (middleTable != null) {
    for (var i = 0; i < middleTable.rows.length; i++) {
        for (var j = 0; j < middleTable.rows[i].cells.length; j++)
        middleTable.rows[i].cells[j].onclick = function() {
            tableText(this);
        };
    }
}

function tableText(tableCell) {
   console.log ('color placed!');
}

var leftTable = document.getElementById('colorPicker');
if (leftTable != null) {
    for (var i = 0; i < leftTable.rows.length; i++) {
        for (var j = 0; j < leftTable.rows[i].cells.length; j++)
        leftTable.rows[i].cells[j].onclick = function() {
            tableTextTwo(this);
        };
    }
}

function tableTextTwo(tableCellTwo) {
    console.log ('color picked!');
}