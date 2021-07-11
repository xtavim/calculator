var lastValue = 0;
var lastOperator;

var math = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    'x': function (x, y) { return x * y },
    '/': function (x, y) { return x / y },
    '=': function (x, y) { return x / y }
}

var screen = document.getElementsByClassName('screen-result')[0];

/*** Logic ***/
document.querySelectorAll('button').forEach((el, i) => {
    el.addEventListener("click", function () { mathHandler(el) }, false);
});

function mathHandler(el) {
    var button = el.textContent;
}