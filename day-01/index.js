import { readData } from "../utils.js"

const input = readData("./day-01/input.txt")

const partOne = () => {
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

const partTwo = () => {
  const { left, right } = input.reduce(
    (acc, curr) => {
      const [left, right] = curr.split(/ +/g)
      acc.left.push(Number(left))
      acc.right.push(Number(right))
      return acc
    },
    { left: [], right: [] }
  )

  const rightSideMap = right.reduce((a, c) => {
    if (a[c]) {
      a[c] += 1
    } else {
      a[c] = 1
    }
    return a
  }, {})

  return left.reduce((a, c) => {
    const rightSideNumber = Number(rightSideMap[c]) || 0
    a += c * rightSideNumber

    return a
  }, 0)
}

console.log(partTwo())
