var App = function () {
    'use strict';

    function sum(x, y) {
        return (x + y);
    }

    function divide(x, y) {
        if (y === 0) {
            return null;
        }
        return (x / y);
    }

    var s = sum(1, 1),
        d = divide(1, 1);

    return s + d;
};

var app = new App();