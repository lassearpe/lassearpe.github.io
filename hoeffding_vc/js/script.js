var slider = document.getElementById("range");
var numVal = document.getElementById("numVal");
var display = document.getElementById("display");
var getVal = slider.value;

// const rangeInput = document.getElementById('range');
// const numVal = document.getElementById('numVal');

function updateNumVal() {
    numVal.textContent = rangeInput.value;
}

updateNumVal();
// rangeInput.addEventListener('input', updateNumVal);


// numVal.innerHTML = getVal; // If you don't want the number to be displayed, delete this. This is to show at which number the label will change

slider.oninput = function() {
    numVal.innerHTML = this.value;// If you don't want the number to be displayed, delete this. This is to show at which number the label will change
}  

const mathDiv = document.getElementById('math');
// await MathJax.startup.promise // make sure initial typesetting has taken place
// MathJax.typesetClear([mathDiv]) // clear MathJax awareness of this element
// await MathJax.typesetPromise([mathDiv]) // typeset anew

MathJax.startup.promise.then(() => {
    MathJax.typesetClear([mathDiv]); // Clear any previous typesetting
    MathJax.typesetPromise([mathDiv]); // Re-typeset the MathJax content
});