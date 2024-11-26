var slider = document.getElementById("range");
var display = document.getElementById("display");
var getVal = slider.value;

numVal.innerHTML = getVal; // If you don't want the number to be displayed, delete this. This is to show at which number the label will change

slider.oninput = function() {
    numVal.innerHTML = this.value;// If you don't want the number to be displayed, delete this. This is to show at which number the label will change
}  