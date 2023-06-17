import { testProp, fc } from "ava-fast-check";
import * as O from "fp-ts/lib/Option";
import { constVoid, pipe } from "fp-ts/lib/function";

/**
 * Library under test
 */

import { percentageChange } from "../../src/percentage-change";

testProp(
  "should never return some of NaN",
  [fc.float(), fc.float()],
  (t, start, end) => {
    pipe(
      percentageChange(start, end),
      O.fold(t.pass, (value) => t.false(Number.isNaN(value)))
    );
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
  }
);

testProp(
  "should calculate percentage-change when possible",
  [fc.float(), fc.float()],
  (t, start, end) => {
    const assert =
      (assertion: (value: number) => boolean) =>
      (option: O.Option<number>): void =>
        pipe(
          option,
          O.fold(
            () => t.fail(),
            (value) => t.true(assertion(value))
          ),
          constVoid
        );

    const result = percentageChange(start, end);

    if (Number.isNaN(start) || Number.isNaN(end)) {
      return O.fold(t.pass, () => t.fail())(result);
    }
    if (start === Infinity || start === -Infinity) {
      return O.fold(t.pass, () => t.fail())(result);
    }
    if (end === Infinity || end === -Infinity) {
      return O.fold(t.pass, () => t.fail())(result);
    }
    if ((start === 0 || start === -0) && (end === 0 || end === -0)) {
      return assert((n) => 0 === n)(result);
    }
    return assert((n) => n === ((end - start) / start) * 100)(result);
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
  }
);
