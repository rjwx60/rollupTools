function add(x: number, y: number): number {
  return x + y
}
function sub(x: number, y: number): number {
  return x - y
}
function multi(x: number, y: number): number {
  return x * y
}
function div(x: number, y: number): number {
  if (y === 0) {
    throw new Error('The divisor cannot be 0')
  }
  return x / y
}
export { add, sub, multi, div }
