'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function add(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
function multi(x, y) {
    return x * y;
}
function div(x, y) {
    if (y === 0)
        throw new Error("The divisor cannot be 0");
    return x / y;
}

exports.add = add;
exports.div = div;
exports.multi = multi;
exports.sub = sub;
