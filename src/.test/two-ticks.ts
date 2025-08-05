export function twoTicks() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      setTimeout(resolve)
    })
  })
}
