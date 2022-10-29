import { testProp, fc } from 'ava-fast-check'
import * as O from 'fp-ts/Option'
import { pipe, constVoid } from 'fp-ts/function'
import { match, P } from 'ts-pattern'

/**
 * Library under test
 */

import { percentageChange } from '../../src/percentage-change'

testProp(
  'should never return some of NaN',
  [fc.float(), fc.float()],
  (t, start, end) => {
    pipe(
      percentageChange(start, end),
      O.fold(t.pass, (value) => t.false(Number.isNaN(value))),
    )
  },
  {
    verbose: true,
    numRuns: 2500,
    examples: [
      [Infinity, Infinity],
      [Infinity, -Infinity],
      [-Infinity, Infinity],
      [Infinity, 0],
      [NaN, NaN],
      [0, NaN],
      [NaN, 0],
      [0, 0],
      [100, 200],
      [200, 100],
    ],
  },
)

testProp(
  'should calculate percentage-change when possible',
  [fc.float(), fc.float()],
  (t, start, end) => {
    const assert =
      (assertion: (value: number) => boolean) =>
      (option: O.Option<number>): void =>
        pipe(
          option,
          O.fold(
            () => t.fail(),
            (value) => t.true(assertion(value)),
          ),
          constVoid,
        )

    const result = percentageChange(start, end)

    match({ start, end })
      .with({ start: P.when(Number.isNaN) }, () =>
        O.fold(t.pass, () => t.fail())(result),
      )
      .with({ end: P.when(Number.isNaN) }, () =>
        O.fold(t.pass, () => t.fail())(result),
      )
      .with({ start: P.when((n) => n === Infinity || n === -Infinity) }, () =>
        O.fold(t.pass, () => t.fail())(result),
      )
      .with({ end: P.when((n) => n === Infinity || n === -Infinity) }, () =>
        O.fold(t.pass, () => t.fail())(result),
      )
      .with(
        {
          start: 0,
          end: 0,
        },
        {
          start: -0,
          end: 0,
        },
        {
          start: 0,
          end: -0,
        },
        {
          start: -0,
          end: -0,
        },
        () => assert((n) => 0 === n)(result),
      )
      .otherwise(() =>
        assert((n) => n === ((end - start) / start) * 100)(result),
      )
  },
  {
    verbose: true,
    numRuns: 1000,
    examples: [
      [Infinity, Infinity],
      [Infinity, -Infinity],
      [-Infinity, Infinity],
      [Infinity, 0],
      [NaN, NaN],
      [0, NaN],
      [NaN, 0],
      [0, 0],
      [0, -0],
      [-0, 0],
      [-0, -0],
      [100, 200],
      [200, 100],
    ],
  },
)
