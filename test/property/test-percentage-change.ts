import { testProp, fc } from 'ava-fast-check'


/**
 * Library under test
 */

import { percentageChange } from '../../src/percentage-change'


testProp(
    'should calculate percentage-change when possible',
    [
        fc.float(),
        fc.float()
    ],
    (
        start: number,
        end: number
    ) => {
        const result = percentageChange(start, end)

        if (start === 0 && end === 0) {
            return result.extract() === 0
        }

        return Number.isNaN(start) || Number.isNaN(end)
            ? result.isNothing()
            : result.extract() === (end - start) / start * 100
    }, {
        numRuns: 1000
    }
)
