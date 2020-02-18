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

percentageChange(100, 200)
//=>100

percentageChange(100, 75)
//=>-25
```

## Documentation

See [generated documentation](doc/README.md).
