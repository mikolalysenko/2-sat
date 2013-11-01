"use strict"

var twoSat = require("../2sat.js")

require("tape")(function(t) {

  function checkTwoSat(numVariables, clauses) {
    var solution = twoSat(numVariables, clauses)
    console.log(solution)
    if(solution) {
      for(var i=0; i<clauses.length; ++i) {
        var u = clauses[i][0]
        var v = clauses[i][1]
        var a = solution[Math.abs(u)-1]
        var b = solution[Math.abs(v)-1]
        if(u < 0) {
          a = !a
        }
        if(v < 0) {
          b = !b
        }
        t.ok(a || b)
      }
    }
  }

  t.ok(!twoSat(1, [[1, 1], [-1,-1]]))
  checkTwoSat(1, [])
  checkTwoSat(2, [[1,2]])
  checkTwoSat(7, [
      [1,2], [1,-4], [2,-4], [1,-5],
      [3,-5], [1,-6], [2,-6], [3,-6],
      [4,7], [5,7], [6,7] ])

  t.end()
})

