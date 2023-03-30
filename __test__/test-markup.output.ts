/* eslint-disable  @typescript-eslint/no-unused-vars */

const array = []
const array1 = ['']
const array2 = ['one', 'two']
const array3 = ['one', 'two', 'tree']
const array4 = ['one', 'two', 'tree']

const object = {}
const object1 = { 1: 'test' }
const object2 = { 1: 'test' }
const object3 = { 1: 'test' }
const object4 = { 1: 'test', 2: 'test' }
const object5 = {
  1: 'test',
  2: 'test'
}
const x = (a) => (a ? 1 : 2)

function testNewLineBeforeReturn(z) {
  const y = z

  return y
}

function testIfState(z) {
  if (z) {
    return z + 1
  }

  return z
}
const testSingleLine = {}

const semi = {}

const testLetToConst = 'testLetToConst'

const testAssign = {}

Object.assign(testAssign, { test: 1 })

const myArrow = () => 1 + 1
const myArrow2 = (a) => 1 + 1

type X = { x: string }

type Y = {
  y: string
}

type XY = X & Y
type XYZ = XY & { z: string }

const handleSizeValue = 1
const percentage = 1

const offset = (handleSizeValue / 2) * (1 - percentage / 0.5)

export default (dividend: number, divisor: number): number => ((dividend % divisor) + divisor) % divisor
