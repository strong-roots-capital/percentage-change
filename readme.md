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

▸ **percentageChange**(`start`: number, `end`: number): *Maybe‹number›*

*Defined in [src/percentage-change.ts:12](https://github.com/strong-roots-capital/percentage-change/blob/7eddb06/src/percentage-change.ts#L12)*

Binary operator of percentage-change

**Parameters:**

Name | Type |
------ | ------ |
`start` | number |
`end` | number |

**Returns:** *Maybe‹number›*

```typescript
import { percentageChange } from 'percentage-change'

/* Standard use */
percentageChange(100, 200)
//=>Just(100)

percentageChange(100, 75)
//=>Just(100)

/* Special cases */
percentageChange(0, 0)
//=>Just(0)

percentageChange(0, 100)
//=>Just(Infinity)

percentageChange(100, 0)
//=>Just(-100)

percentageChange(NaN, 0)
//=>Nothing

percentageChange(0, NaN)
//=>Nothing
```

[Maybe] type compliant with the [fantasy-land specification].

[Maybe]: https://gigobyte.github.io/purify/adts/Maybe/
[fantasy-land specification]: https://github.com/fantasyland/fantasy-land

## Documentation

See [generated documentation](doc/README.md).
