import test, { ExecutionContext } from 'ava'
import { Nothing } from 'purify-ts/Maybe'

/**
 * Unit under test
 */

import { percentageChange } from '../../src/percentage-change'


function shouldCalculate(
    t: ExecutionContext,
    expected: number,
    start: number,
    end: number
): void {
    t.is(
        expected,
        percentageChange(start, end).extract()
    )
}

shouldCalculate.title = function title(
    _providedTitle = '',
    expected: number,
    start: number,
    end: number
): string {
    return `should calculate ${expected} = ${start} * ${end}`
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

test('should return Nothing when start is NaN', t => {
    t.deepEqual(
        Nothing,
        percentageChange(NaN, 100)
    )
})

test('should return Nothing when end is NaN', t => {
    t.deepEqual(
        Nothing,
        percentageChange(100, NaN)
    )
})
