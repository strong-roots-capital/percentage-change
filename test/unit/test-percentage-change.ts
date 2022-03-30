import test, { ExecutionContext } from 'ava'
import * as O from 'fp-ts/Option'

/**
 * Unit under test
 */

import { percentageChange } from '../../src/percentage-change'

function shouldCalculate(
  t: ExecutionContext,
  expected: number,
  start: number,
  end: number,
): void {
  O.fold(t.fail, (value) => t.is(expected, value))(percentageChange(start, end))
}

shouldCalculate.title = function title(
  _providedTitle = '',
  expected: number,
  start: number,
  end: number,
): string {
  return `should calculate ${expected} = ${start} * ${end}`
}

function shouldReturnNone(
  t: ExecutionContext,
  start: number,
  end: number,
): void {
  O.fold(t.pass, () => t.fail())(percentageChange(start, end))
}

shouldReturnNone.title = function title(
  _providedTitle = '',
  start: number,
  end: number,
): string {
  return `should calculate ${start} * ${end} to be 'none'`
}

/*********************************************************************
 * Test cases
 ********************************************************************/

test(shouldCalculate, 100, 100, 200)
test(shouldCalculate, -50, 100, 50)
test(shouldCalculate, 50, 100, 150)
test(shouldCalculate, -25, 100, 75)
test(shouldCalculate, Infinity, 0, 100)
test(shouldCalculate, -100, 150, 0)
test(shouldCalculate, 0, 0, 0)

test(shouldReturnNone, Infinity, Infinity)
test(shouldReturnNone, -Infinity, Infinity)
test(shouldReturnNone, Infinity, -Infinity)
test(shouldReturnNone, -Infinity, -Infinity)
test(shouldReturnNone, Infinity, 0)
test(shouldReturnNone, NaN, 100)
test(shouldReturnNone, 100, NaN)
test(shouldReturnNone, NaN, 0)
test(shouldReturnNone, 0, NaN)
