import { readData } from "../utils.js"

const input = readData("./day-02/input.txt")

const checkArrayOrder = (arr) => {
  let ascending = true
  let descending = true
  for (let i = 1; i < arr.length && (ascending || descending); i++) {
    const current = arr[i]
    const next = arr[i - 1]
    if (current < next) ascending = false
    if (current > next) descending = false
  }

  return { ascending, descending }
}

const partOne = () => {
  return input.reduce((a, c) => {
    const spl = c.split(" ").map((a) => Number(a))

    const { ascending, descending } = checkArrayOrder(spl)

    for (let i = 0; i < spl.length - 1; i++) {
      const current = spl[i]
      const next = spl[i + 1]
      const isNotSameOrDiffByMoreThan3 = Math.abs(current - next) > 3
      const isNotRepeated = current === next

      if (
        ascending === descending ||
        isNotSameOrDiffByMoreThan3 ||
        isNotRepeated
      ) {
        return a
      }
    }

    a += 1
    return a
  }, 0)
}

const checkArr = (arr, secondRun) => {
  const { ascending, descending } = checkArrayOrder(arr)
  for (let i = 0; i < arr.length - 1; i++) {
    const current = arr[i]
    const next = arr[i + 1]
    const isNotSameOrDiffByMoreThan3 = Math.abs(current - next) > 3
    const isNotRepeated = current === next

    if (
      ascending === descending ||
      isNotSameOrDiffByMoreThan3 ||
      isNotRepeated
    ) {
      if (secondRun) return { isValid: false }
      return { isValid: false, index: i }
    }
  }
  return { isValid: true }
}

const partTwo = () => {
  return input.reduce((a, c) => {
    const spl = c.split(" ").map((a) => Number(a))

    const { isValid, index } = checkArr(spl)

    if (index !== undefined) {
      for (let i = 0; i < spl.length; i++) {
        const copy = [...spl]
        copy.splice(i, 1)
        const { isValid } = checkArr(copy)
        if (isValid) {
          a += 1
          return a
        }
      }
    }

    if (!isValid) return a
    a += 1
    return a
  }, 0)
}

console.log(partTwo())
