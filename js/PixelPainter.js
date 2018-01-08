function makeElem(elem, label, inside){
    var container = document.createElement(elem);
    container.id = label;
    container.innerHTML = inside;
    return container;
}

function mainColumnsAndRows(x, y){
    document.getElementById('rightColumn').appendChild(makeElem('table', 'mainTable', ''));
    for(var i = 0; i < x; i++){
        document.getElementById('mainTable').appendChild(makeElem('tr', 'row' + i, null));
        for(var h = 0; h < y; h++){
            document.getElementById('row' + i).appendChild(makeElem('td', 'r' + i + 'c' + h, h));
        }
    }
}

function leftColumnsAndRows(x, y){
    document.getElementById('leftColumn').appendChild(makeElem('table', 'colorPicker', ''));
    for(var i = 0; i < x; i++){
        document.getElementById('colorPicker').appendChild(makeElem('tr', 'roww' + i, null));
        for(var h = 0; h < y; h++){
            document.getElementById('roww' + i).appendChild(makeElem('td', 'r' + i + 'c' + h, h));
        }
    }
}

document.getElementById('pixelPainter').appendChild(makeElem('div', 'leftColumn', ''));
document.getElementById('pixelPainter').appendChild(makeElem('div', 'rightColumn', ''));

leftColumnsAndRows(10,5);

document.getElementById('leftColumn').appendChild(makeElem('button', 'erase', 'Erase'));
document.getElementById('leftColumn').appendChild(makeElem('button', 'clear', 'Clear'));


mainColumnsAndRows(10,20);
function makePicture(elem, label, source){
    var container = document.createElement(elem);
    container.id = label;
    container.src = source;
    return container;
}
// document.querySelector('body').appendChild(makePicture('img', 'mainPic', '../dinosaur.jpg'));
document.getElementById('rightColumn').style.backgroundImage = "url('dinosaur.jpg')";