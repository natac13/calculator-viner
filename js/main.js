'use strict';

$(document).ready(function() {
    var $cal = $('#calculator'),
        $display = $cal.find('input[name=display]'),
        numbers = [],
        op;

    $cal.on('click', '.clear', function(e) {
        e.preventDefault();
        $display.val('');
        numbers = [];
    })

    $cal.on('click', '.digit', function(e) {
        e.preventDefault();
        var numStr = $(this).val().toString(); // for display adding
        console.log(numStr);
        var oldNum = $display.val() || '';
        $display.val(oldNum + numStr);
    });

    $cal.on('click', '.operator', function(e) {
        e.preventDefault();
        op = $(this).val().toString();
        numbers.push(+$display.val());
        $display.val('');
        console.log(numbers);
    });

    $cal.on('click', '.equal', function(e) {
        e.preventDefault();
        numbers.push(+$display.val());
        console.log(numbers);
        if (op === '*') {
            $display.val(+(numbers[0] * numbers[1]));
        }
        if (op === '/') {
            $display.val(+(numbers[0] / numbers[1]));
        }
        if (op === '+') {
            $display.val(+(numbers[0] + numbers[1]));
        }
        if (op === '-') {
            $display.val(+(numbers[0] - numbers[1]));
        }

    });
});

