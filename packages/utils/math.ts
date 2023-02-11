const forceLarge = (start: number) => (origin: number) => {
  if (origin < start) return start
  return origin
}
const forceSmall = (end: number) => (origin: number) => {
  if (origin > end) return end
  return origin
}
const forceInRange = (start: number) => (end: number) => (origin: number) => forceSmall(end)(forceLarge(start)(origin))

export {
  forceInRange,
  forceLarge,
  forceSmall
}
