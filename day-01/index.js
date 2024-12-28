import { readData } from "../utils.js"

const solving = () => {
  const input = readData("./day-01/input.txt")
  const { left, right } = input.reduce(
    (acc, curr) => {
      const [left, right] = curr.split(/ +/g)
      acc.left.push(Number(left))
      acc.right.push(Number(right))
      return acc
    },
    { left: [], right: [] }
  )

  left.sort((a, b) => a - b)
  right.sort((a, b) => a - b)
  console.log(left, right)

  return left.reduce((acc, curr, index) => {
    acc += Math.abs(right[index] - curr)
    console.log(acc, curr, right[index], index)
    return acc
  }, 0)
}

console.log(solving())
