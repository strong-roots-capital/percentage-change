/**
 * percentage-change
 * Binary operator of percentage-change
 */

import { Maybe, Nothing, Just } from 'purify-ts/Maybe'

/**
 * Binary operator of percentage-change
 */
export function percentageChange(
    start: number,
    end: number
): Maybe<number> {

    if (start === 0 && end === 0) {
        return Just(0)
    }

    return Number.isNaN(start) || Number.isNaN(end)
        ? Nothing
        : Just((end - start) / start * 100)
}
