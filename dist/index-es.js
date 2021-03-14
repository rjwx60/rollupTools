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

export { add, div, multi, sub };
