2-sat
=====
[2SAT](http://en.wikipedia.org/wiki/2-satisfiability) is a restricted version of the boolean satisfiability problem where the number of variables per clause is at most 2.  Works both in node.js and in the browser using browserify.

## Example

```javascript
```

## API

### `require("2-sat")(numVariables, clauses)`
Finds a satisfying assignment for a 2SAT problem written in conjunctive normal form.  If no assignment is possible returns `false`.

* `numVariables` is the number of variables
* `clauses` is a list of binary clauses

**Returns** A vector of assignments to the variables of the clause.  If problem is not satisfiable, returns `false`

## Credits
(c) 2013 Mikola Lysenko. MIT License