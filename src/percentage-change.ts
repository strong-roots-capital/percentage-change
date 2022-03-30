/**
 * percentage-change
 * Binary operator of percentage-change
 */

import * as O from 'fp-ts/Option'

/**
 * Binary operator of percentage-change
 */
export function percentageChange(start: number, end: number): O.Option<number> {
    if (start === Infinity || end === Infinity) {
        return O.none
    }

    if (start === -Infinity || end === -Infinity) {
        return O.none
    }

    if (Number.isNaN(start) || Number.isNaN(end)) {
        return O.none
    }

    if (start === 0 && end === 0) {
        return O.some(0)
    }

    return O.some(((end - start) / start) * 100)
}
