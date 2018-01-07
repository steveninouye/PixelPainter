function makeElem(elem, label, inside){
    var container = document.createElement(elem);
    container.id = label;
    container.innerHTML = inside;
    return container;
}

document.getElementById('pixelPainter').appendChild(makeElem('div', 'leftColumn', 'testing'));
document.getElementById('pixelPainter').appendChild(makeElem('div', 'rightColumn', 'lorem ipsum stuf sfduaidio v naduvn adspvn asp'));

document.querySelectorAll('div')[1].appendChild(document.createElement('div'));
document.querySelectorAll('div')[1].appendChild(document.createElement('button'));
document.querySelectorAll('div')[1].appendChild(document.createElement('button'));
