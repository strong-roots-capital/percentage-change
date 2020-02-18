import test, { ExecutionContext } from 'ava'

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
