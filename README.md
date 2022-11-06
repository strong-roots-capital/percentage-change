# percentage-change

[![Build status]](https://github.com/strong-roots-capital/percentage-change/actions/workflows/release.yml)

[build status]: https://github.com/strong-roots-capital/percentage-change/actions/workflows/release.yml/badge.svg?event=push

> Binary operator of percentage-change

## Install

```shell
npm install percentage-change
```

## Use

▸ **percentageChange**(`start`: number, `end`: number): _Option‹number›_

Binary operator of percentage-change

**Parameters:**

| Name    | Type   |
| ------- | ------ |
| `start` | number |
| `end`   | number |

**Returns:** _Option‹number›_

```typescript
import { percentageChange } from "percentage-change";
import { some, none } from "fp-ts/Option";

/* Standard use */
percentageChange(100, 200);
//=>some(100)

percentageChange(100, 75);
//=>some(-25)

/* Special cases */
percentageChange(0, 0);
//=>some(0)

percentageChange(0, 100);
//=>some(Infinity)

percentageChange(100, 0);
//=>some(-100)

percentageChange(NaN, 0);
//=>none

percentageChange(0, NaN);
//=>none

percentageChange(Infinity, 0); // -Infinity works the same way
//=>none

percentageChange(0, Infinity); // -Infinity works the same way
//=>none
```

[Option] type compliant with the [fantasy-land specification].

[option]: https://gcanti.github.io/fp-ts/modules/Option.ts.html
[fantasy-land specification]: https://github.com/fantasyland/fantasy-land
