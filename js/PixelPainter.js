function makeElem(elem, label, inside){
    var container = document.createElement(elem);
    container.id = label;
    container.innerHTML = inside;
    return container;
}

document.getElementById('pixelPainter').appendChild(makeElem('div', 'leftColumn', 'testing'));
document.getElementById('pixelPainter').appendChild(makeElem('div', 'rightColumn', 'lorem ipsum stuf sfduaidio v naduvn adspvn asp'));

document.getElementById('leftColumn').appendChild(makeElem('button', 'erase', 'Erase'));
document.getElementById('leftColumn').appendChild(makeElem('button', 'clear', 'Clear'));

function columnsAndRows(x, y){
    document.getElementById('rightColumn').appendChild(makeElem('table', 'mainTable', ''));
    for(var i = 0; i < x; i++){
        document.getElementById('mainTable').appendChild(makeElem('tr', 'row' + i, null));
        for(var h = 0; h < y; h++){
            document.getElementById('row' + i).appendChild(makeElem('td', 'col' + h, h));
        }
    }
}
columnsAndRows(10,20);