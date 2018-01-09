//Different colors taken from http://htmlcolorcodes.com/color-chart/
var colorsArray = ["#ffffff","#ffebee","#ffcdd2","#ef9a9a","#e57373","#ef5350","#f44336","#e53935","#d32f2f","#c62828","#b71c1c","#ff8a80","#ff5252","#ff1744","#d50000","#000000","#ffffff","#fce4ec","#f8bbd0","#f48fb1","#f06292","#ec407a","#e91e63","#d81b60","#c2185b","#ad1457","#880e4f","#ff80ab","#ff4081","#f50057","#c51162","#000000","#ffffff","#f3e5f5","#e1bee7","#ce93d8","#ba68c8","#ab47bc","#9c27b0","#8e24aa","#7b1fa2","#6a1b9a","#4a148c","#ea80fc","#e040fb","#d500f9","#aa00ff","#000000","#ffffff","#ede7f6","#d1c4e9","#b39ddb","#9575cd","#7e57c2","#673ab7","#5e35b1","#512da8","#4527a0","#311b92","#b388ff","#7c4dff","#651fff","#6200ea","#000000","#ffffff","#e8eaf6","#c5cae9","#9fa8da","#7986cb","#5c6bc0","#3f51b5","#3949ab","#303f9f","#283593","#1a237e","#8c9eff","#536dfe","#3d5afe","#304ffe","#000000","#ffffff","#e3f2fd","#bbdefb","#90caf9","#64b5f6","#42a5f5","#2196f3","#1e88e5","#1976d2","#1565c0","#0d47a1","#82b1ff","#448aff","#2979ff","#2962ff","#000000","#ffffff","#e1f5fe","#b3e5fc","#81d4fa","#4fc3f7","#29b6f6","#03a9f4","#039be5","#0288d1","#0277bd","#01579b","#80d8ff","#40c4ff","#00b0ff","#0091ea","#000000","#ffffff","#e0f7fa","#b2ebf2","#80deea","#4dd0e1","#26c6da","#00bcd4","#00acc1","#0097a7","#00838f","#006064","#84ffff","#18ffff","#00e5ff","#00b8d4","#000000","#ffffff","#e0f2f1","#b2dfdb","#80cbc4","#4db6ac","#26a69a","#009688","#00897b","#00796b","#00695c","#004d40","#a7ffeb","#64ffda","#1de9b6","#00bfa5","#000000","#ffffff","#e8f5e9","#c8e6c9","#a5d6a7","#81c784","#66bb6a","#4caf50","#43a047","#388e3c","#2e7d32","#1b5e20","#b9f6ca","#69f0ae","#00e676","#00c853","#000000","#ffffff","#f1f8e9","#dcedc8","#c5e1a5","#aed581","#9ccc65","#8bc34a","#7cb342","#689f38","#558b2f","#33691e","#ccff90","#b2ff59","#76ff03","#64dd17","#000000","#ffffff","#f9fbe7","#f0f4c3","#e6ee9c","#dce775","#d4e157","#cddc39","#c0ca33","#afb42b","#9e9d24","#827717","#f4ff81","#eeff41","#c6ff00","#aeea00","#000000","#ffffff","#fffde7","#fff9c4","#fff59d","#fff176","#ffee58","#ffeb3b","#fdd835","#fbc02d","#f9a825","#f57f17","#ffff8d","#ffff00","#ffea00","#ffd600","#000000","#ffffff","#fff8e1","#ffecb3","#ffe082","#ffd54f","#ffca28","#ffc107","#ffb300","#ffa000","#ff8f00","#ff6f00","#ffe57f","#ffd740","#ffc400","#ffab00","#000000","#ffffff","#fff3e0","#ffe0b2","#ffcc80","#ffb74d","#ffa726","#ff9800","#fb8c00","#f57c00","#ef6c00","#e65100","#ffd180","#ffab40","#ff9100","#ff6d00","#000000","#ffffff","#fbe9e7","#ffccbc","#ffab91","#ff8a65","#ff7043","#ff5722","#f4511e","#e64a19","#d84315","#bf360c","#ff9e80","#ff6e40","#ff3d00","#dd2c00","#000000","#ffffff","#efebe9","#d7ccc8","#bcaaa4","#a1887f","#a1887f","#8d6e63","#795548","#795548","#6d4c41","#5d4037","#5d4037","#4e342e","#4e342e","#3e2723","#000000","#ffffff","#fafafa","#f5f5f5","#eeeeee","#e0e0e0","#bdbdbd","#9e9e9e","#9e9e9e","#757575","#757575","#616161","#616161","#424242","#424242","#212121","#000000","#ffffff","#eceff1","#eceff1","#cfd8dc","#b0bec5","#b0bec5","#90a4ae","#78909c","#78909c","#607d8b","#546e7a","#455a64","#455a64","#37474f","#263238","#000000"]

//pictures in our pictures folder
var picturesArray = ["home.png","bambi.gif","carebear.jpg","catfish.jpg","dinosaur.jpg","dogAndBone.gif","dogAndCat.jpg","donaldDuck.jpg","fish.gif","helloKitty.jpg","lady.jpg","mario.jpg","minion.jpg","monstersInc.jpg","pooh.jpg","stitch.jpg"]

//cache to allow us to see what color was picked
var colorPicked = "";

//make element function to create element with ID and inner content >>>> Kayla gave me this code
function makeElem(elem, label, inside){
    var container = document.createElement(elem);
    container.id = label;
    container.innerHTML = inside;
    return container;
}

//function to make table with cells for the main picture
function mainRowsAndColumns(x, y){
//adds table element into the middle column
    document.getElementById('middleColumn').appendChild(makeElem('table', 'mainTable', ''));
//for loop to create as many rows as 'x'
    for(var i = 0; i < x; i++){
//adding the rows
        document.getElementById('mainTable').appendChild(makeElem('tr', 'row' + i, null));
//for loop to create as many columns as 'y' inside of each row
        for(var h = 0; h < y; h++){
//adds cells into the row
            document.getElementById('row' + i).appendChild(makeElem('td', 'main_r' + i + 'c' + h, "."));
        }
    }
}

//function to make colorPicker table
function colorPickerRowsAndColumns(x, y){
//adds table element into the left column
    document.getElementById('leftColumn').appendChild(makeElem('table', 'colorPicker', ''));
//for loop to create as many rows as 'x'
    for(var i = 0; i < x; i++){
//adding the rows
        document.getElementById('colorPicker').appendChild(makeElem('tr', 'roww' + i, null));
//for loop to create as many columns as 'y' insdie of each row
        for(var h = 0; h < y; h++){
////adds cells into the row
            document.getElementById('roww' + i).appendChild(makeElem('td', 'r' + i + 'c' + h, "."))
        }
    }
//gets all the cells and stores it into the colorCell variable
    let colorCell = document.getElementById('colorPicker').getElementsByTagName('td');
//loops through the colorCell object
    for(var k = 0; k < colorCell.length; k++){
//assigns a new color pulled from the colorsArray to the background of each cell
        colorCell[k].style.backgroundColor = colorsArray[k];
    }
}

//function to create the picture selection table
function picPicker(){
//creates a table into the right column
    document.getElementById('rightColumn').appendChild(makeElem('table','picturePicker', null));
//loops through the pictures array
    picturesArray.forEach((element, index) => {
//adds a new row for each picture in the picturesArray
        document.getElementById('picturePicker').appendChild(makeElem('tr', 'rr'+index, null));
//adds a new cell and inserts picture into the cell
        document.getElementById('rr'+index).appendChild(makeElem('td', null, '<img src=pictures/' + element + '>'));
    })
}

//creates left column
document.getElementById('pixelPainter').appendChild(makeElem('div', 'leftColumn', ''));
//creates middle column
document.getElementById('pixelPainter').appendChild(makeElem('div', 'middleColumn', ''));
//creates right column
document.getElementById('pixelPainter').appendChild(makeElem('div', 'rightColumn', 'PICK A PICTURE'));

//executes function and creates colorPicker table
colorPickerRowsAndColumns(19,16);
//executes function and creates picturePicker table
picPicker();
//executes function and creates table for middle column
mainRowsAndColumns(25,25);
//sets original background image
document.getElementById('middleColumn').style.backgroundImage = "url('pictures/home.png')";

//creates a div for selected color
document.getElementById('leftColumn').appendChild(makeElem('div', 'selectedColor', 'COLOR'));
//creates erase button
document.getElementById('leftColumn').appendChild(makeElem('button', 'erase', 'Erase'));
//creates clear button
document.getElementById('leftColumn').appendChild(makeElem('button', 'clear', 'Clear'));


////////////////////User Interactive functions//////////////////////////////////

//      >>>>>>>LEFT COLUMN TABLE<<<<<<<<<<<
//gets all cells inside of 'colorPicker'
let cellsTwo = document.getElementById('colorPicker').getElementsByTagName('td'); 
//loops through all of the cells
for (var i = 0; i < cellsTwo.length; i++) {
//sets an onclick function to each cell
    cellsTwo[i].onclick = function(){
//changes the variable 'colorPicked' to the background color of the cell clicked on
        colorPicked = this.style.backgroundColor;
//changes the background color of the 'selectedColor' div to the colorPicked
        document.getElementById('selectedColor').style.backgroundColor = colorPicked;
    };
}


//         >>>>>>MIDDLE COLUMN TABLE<<<<<<<
//gets all cells inside of 'mainTable'
let cells = document.getElementById('mainTable').getElementsByTagName('td'); 
//loops through all of the cells
for (var h = 0; h < cells.length; h++) { 
//sets an onclick function to each cell
    cells[h].onclick = function(){
//sets the background color to the same color that was picked
        this.style.backgroundColor = colorPicked;
    };
}

//       >>>>>>>>>RIGHT COLUMN TABLE<<<<<<<<<<
//gets all the cells inside of 'picturePicker'
let images = document.getElementById('picturePicker').getElementsByTagName('img');
//loops through all of the cells
for (var t = 0; t < images.length; t++){
//sets and onlcick functio to each cell
    images[t].onclick = function(){
//changes the backgroundImage to the clicked picture
        document.getElementById('middleColumn').style.backgroundImage = "url(" + this.src + ")";
    }
}

//sets an onclick function to the erase button
document.getElementById('erase').onclick = function(){
//changes the colorPicked to nothing
    colorPicked = "";
//changes the selectedColor div's background to nothing
    document.getElementById('selectedColor').style.backgroundColor = colorPicked;
}

//sets an onclick function to the clear button
document.getElementById('clear').onclick = function(){
//loops through all the cells in the middle column,,,       middle column cells were set to the variable 'cells' on line 113
    for(var j = 0; j < cells.length; j++){
//changes all the cells to a background color of nothing
        cells[j].style.backgroundColor = "";
    }
}

