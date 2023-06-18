import test from "node:test";
import { strict as assert } from "node:assert";

import { pipe } from "fp-ts/lib/function";
import * as O from "fp-ts/lib/Option";

/**
 * Unit under test
 */

import { percentageChange } from "../../src/percentage-change";

function makeTest(expected: O.Option<number>, start: number, end: number) {
  const title = pipe(
    expected,
    O.fold(
      () => `should calculate ${start} * ${end} to be none`,
      (expected) => `should calculate ${expected} = ${start} * ${end}`
    )
  );
  test(title, () => {
    const actual = percentageChange(start, end);
    assert.deepEqual(actual, expected);
  });
}

/*********************************************************************
 * Test cases
 ********************************************************************/

makeTest(O.some(100), 100, 200);
makeTest(O.some(-50), 100, 50);
makeTest(O.some(50), 100, 150);
makeTest(O.some(-25), 100, 75);
makeTest(O.some(Infinity), 0, 100);
makeTest(O.some(-100), 150, 0);
makeTest(O.some(0), 0, 0);

makeTest(O.none, Infinity, Infinity);
makeTest(O.none, -Infinity, Infinity);
makeTest(O.none, Infinity, -Infinity);
makeTest(O.none, -Infinity, -Infinity);
makeTest(O.none, Infinity, 0);
makeTest(O.none, NaN, 100);
makeTest(O.none, 100, NaN);
makeTest(O.none, NaN, 0);
makeTest(O.none, 0, NaN);
