'use strict';

$(document).ready(function () {
    var $cal = $('#calculator'),
        $display = $cal.find('input[name=display]'),
        numbers = [],
        tmp = undefined,
        op = undefined;

    var calculator = function calculator(equation) {
        if (equation) {
            return eval(equation);
        }
    };
    /**
     * takes in a string and appends to the old display
     * @param  {string} strVal what to update the display with
     */
    var update = function update(strVal) {
        $display.val($display.val() + strVal);
    };

    $display.val('');

    $cal.on('click', '.clear', function (e) {
        e.preventDefault();
        $display.val('');
        numbers = [];
    });

    $cal.on('click', '.digit', function (e) {
        e.preventDefault();

        var numStr = $(this).val().toString(); // for display adding
        numbers.push(numStr);
        update(numStr);
    });

    $cal.on('click', '.operator', function (e) {
        e.preventDefault();
        op = $(this).val().toString();
        numbers.push(op);
        update(op);
        numbers.forEach(function (num) {
            console.log(num);
        });
    });

    $cal.on('click', '.equal', function (e) {
        e.preventDefault();
        var eq = $(this).val().toString();
        console.log(numbers);
        var answer = calculator(numbers.join('')).toString();
        $display.val(answer);
        numbers = [];
        numbers.push(answer);
    });
});