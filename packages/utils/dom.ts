const toggleActive = (classes: string[]) => (active: string) => (idx: number) => {
  classes.forEach((_, i) => {
    if (i === idx) classes[i] = active
    else classes[i] = ''
  })
}
export {
  toggleActive
}
