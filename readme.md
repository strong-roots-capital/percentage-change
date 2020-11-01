# percentage-change
[![License][]](https://opensource.org/licenses/ISC)
[![NPM Package][]](https://npmjs.org/package/percentage-change)
[![Build status][]](https://travis-ci.org/strong-roots-capital/percentage-change)
[![Code Coverage][]](https://codecov.io/gh/strong-roots-capital/percentage-change)
[![Dependencies][]](https://david-dm.org/strong-roots-capital/percentage-change)

[License]: https://img.shields.io/badge/License-ISC-blue.svg
[NPM Package]: https://img.shields.io/npm/v/percentage-change.svg
[Build status]: https://travis-ci.org/strong-roots-capital/percentage-change.svg?branch=master
[Code Coverage]: https://codecov.io/gh/strong-roots-capital/percentage-change/branch/master/graph/badge.svg
[Dependencies]: https://david-dm.org/strong-roots-capital/percentage-change/status.svg

> Binary operator of percentage-change

## Install

```shell
npm install percentage-change
```

## Use

▸ **percentageChange**(`start`: number, `end`: number): *Option‹number›*

Binary operator of percentage-change

**Parameters:**

Name | Type |
------ | ------ |
`start` | number |
`end` | number |

**Returns:** *Option‹number›*

```typescript
import { percentageChange } from 'percentage-change'
import { some, none } from 'fp-ts/Option'

/* Standard use */
percentageChange(100, 200)
//=>some(100)

percentageChange(100, 75)
//=>some(-25)

/* Special cases */
percentageChange(0, 0)
//=>some(0)

percentageChange(0, 100)
//=>some(Infinity)

percentageChange(100, 0)
//=>some(-100)

percentageChange(NaN, 0)
//=>none

percentageChange(0, NaN)
//=>none

percentageChange(Infinity, 0)  // -Infinity works the same way
//=>none

percentageChange(0, Infinity)  // -Infinity works the same way
//=>none
```

[Option] type compliant with the [fantasy-land specification].

[Option]: https://gcanti.github.io/fp-ts/modules/Option.ts.html
[fantasy-land specification]: https://github.com/fantasyland/fantasy-land

## Documentation

See [generated documentation](doc/README.md).
