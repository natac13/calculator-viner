'use strict';

$(document).ready(function() {
    var $cal = $('#calculator'),
        $display = $cal.find('input[name=display]'),
        numbers = [],
        tmp,
        op;

    $cal.on('click', '.clear', function(e) {
        e.preventDefault();
        $display.val('');
        numbers = [];
    });

    $cal.on('click', '.digit', function(e) {
        e.preventDefault();

        var numStr = $(this).val().toString(); // for display adding
        if(numStr === '.' && !$display.val()) { numStr = '0.';}
        var oldNum = $display.val() || '';
        $display.val(oldNum + numStr);
    });

    $cal.on('click', '.operator', function(e) {
        e.preventDefault();
        op = $(this).val().toString();
        numbers.push(+$display.val());
        $display.val('');
        numbers.forEach((num) => { console.log(num); });
    });

    $cal.on('click', '.equal', function(e) {
        e.preventDefault();
        numbers.push(+$display.val());
        console.log(numbers);
        if (op === '*') {
            tmp = +(numbers[0] * numbers[1]);
            $display.val(tmp);
        }
        if (op === '/') {
            tmp = +(numbers[0] / numbers[1]);
            $display.val(tmp);
        }
        if (op === '+') {
            tmp = +(numbers[0] + numbers[1]);
            $display.val(tmp);
        }
        if (op === '-') {
            tmp = +(numbers[0] - numbers[1]);
            $display.val(tmp);
        }
        numbers = [];
    });
});

