import { readData } from "../utils.js"

const input = readData("./day-03/input.txt")

const partOne = () => {
  return input.reduce((a, line) => {
    const mul = line.match(/mul\(\d+,\d+\)/g)
    let lineSum = 0
    if (mul) {
      lineSum = mul.reduce((elA, elC) => {
        const elca = elC.match(/\d+/g).reduce((ac, cc) => {
          return ac * cc
        }, 1)

        return elA + elca
      }, 0)
    }

    return a + lineSum
  }, 0)
}

const partTwo = () => {}

console.log(partOne())
