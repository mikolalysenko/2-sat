2-sat
=====
[2SAT](http://en.wikipedia.org/wiki/2-satisfiability) is a restricted version of the boolean satisfiability problem where the number of variables per clause is at most 2.  Works both in node.js and in the browser using browserify.

## Example

```javascript
var twoSat = require("2-sat")

//Solve problem:
//
//    (x1 | !x2) & (x3 | x1) & (x3 | x2)
//
console.log(twoSat(3, [[1, -2], [3, 1], [3,2]]))
```

## API

### `require("2-sat")(numVariables, clauses)`
Finds a satisfying assignment for a 2SAT problem written in conjunctive normal form.  If no assignment is possible returns `false`.

* `numVariables` is the number of variables
* `clauses` is a list of binary clauses.  Variables are indexed in clauses starting at `1` and negative values indicate negation.

**Returns** A vector of assignments to the variables of the clause.  If problem is not satisfiable, returns `false`

## Credits
(c) 2013 Mikola Lysenko. MIT License