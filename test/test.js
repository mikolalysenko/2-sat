"use strict"

var twoSat = require("../2sat.js")

require("tape")(function(t) {

  function checkTwoSat(numVariables, clauses) {
    var solution = twoSat(numVariables, clauses)
    for(var i=0; i<clauses.length; ++i) {
      var u = clauses[i][0]
      var v = clauses[i][1]
      var a = solution[u]
      var b = solution[v]
      if(u >= solution.length) {
        a = !a
      }
      if(v >= solution.length) {
        b = !b
      }
      t.ok(a || b)
    }
  }

  checkTwoSat(1, [])
  checkTwoSat(2, [[1,2]])

  t.end()
})

