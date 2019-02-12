export function findIndex (arr, k, v) {
  return arr.findIndex((item) => {
    return item[k] === v
  })
}
