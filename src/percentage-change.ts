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

    return Number.isNaN(start) || Number.isNaN(end)
        ? Nothing
        : Just((end - start) / start * 100)
}
