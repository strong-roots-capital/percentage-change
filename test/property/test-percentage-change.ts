import test from "node:test";
import { strict as assert } from "node:assert";

import fc from "fast-check";
import * as O from "fp-ts/lib/Option";
import { constVoid, pipe } from "fp-ts/lib/function";

/**
 * Library under test
 */

import { percentageChange } from "../../src/percentage-change";

test("should never return some of NaN", () => {
  fc.assert(
    fc.property(fc.float(), fc.float(), (start, end) => {
      pipe(
        percentageChange(start, end),
        O.fold(
          () => assert.ok(true),
          (value) => assert.equal(Number.isNaN(value), false)
        )
      );
    }),
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
});

test("should calculate percentage-change when possible", () => {
  fc.assert(
    fc.property(fc.float(), fc.float(), (start, end) => {
      const assert_ =
        (assertion: (value: number) => boolean) =>
        (option: O.Option<number>): void =>
          pipe(
            option,
            O.fold(
              () => assert.ok(false),
              (value) => assert.ok(assertion(value))
            ),
            constVoid
          );

      const result = percentageChange(start, end);

      if (Number.isNaN(start) || Number.isNaN(end)) {
        return O.fold(
          () => assert.ok(true),
          () => assert.fail()
        )(result);
      }
      if (start === Infinity || start === -Infinity) {
        return O.fold(
          () => assert.ok(true),
          () => assert.fail()
        )(result);
      }
      if (end === Infinity || end === -Infinity) {
        return O.fold(
          () => assert.ok(true),
          () => assert.fail()
        )(result);
      }
      if ((start === 0 || start === -0) && (end === 0 || end === -0)) {
        return assert_((n) => 0 === n)(result);
      }
      return assert_((n) => n === ((end - start) / start) * 100)(result);
    }),
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
});
