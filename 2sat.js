"use strict"

var stronglyConnectedComponents = require("strongly-connected-components")
var bounds = require("binary-search-bounds")

module.exports = solve2Sat

function clauseToVariable(x, n) {
  if(x < 0) {
    return (-1 - x) + n
  } else {
    return x - 1
  }
}

function negate(x, n) {
  if(x < n) {
    return x + n
  } else {
    return x - n
  }
}

function compareInt(a,b) {
  return a - b
}

function contains(cc, v) {
  var b = bounds.le(cc, v)
  if(b >= 0) {
    return cc[b] === v
  }
  return false
}

function solve2Sat(numVariables, clauses) {
  //Build implication graph
  var adj = new Array(2 * numVariables)
  for(var i=0; i<2*numVariables; ++i) {
    adj[i] = []
  }
  for(var i=0; i<clauses.length; ++i) {
    var c = clauses[i]
    var a = clauseToVariable(c[0], numVariables)
    var b = clauseToVariable(c[1], numVariables)
    var na = negate(a,numVariables)
    adj[na].push(b)
    var nb = negate(b,numVariables)
    adj[nb].push(a)
  }

  //Extract strongly connected components
  var scc = stronglyConnectedComponents(adj).components
  
  //Mark cells and check satisfiability
  var solution = new Array(2 * numVariables)
  for(var i=0; i<solution.length; ++i) {
    solution[i] = -1
  }

  for(var i=0; i<scc.length; ++i) {
    var cc = scc[i]
    cc.sort(compareInt)
    
    //Visit all nodes in queue
    var to_visit = []
    var color = 0
    for(var j=0; j<cc.length; ++j) {
      var v = cc[j]
      if(v < numVariables && contains(cc, numVariables + v)) {
        return false
      }
      var s = solution[v]
      if(s >= 0) {
        color = s
      }
    }

    //Update solution in component
    for(var j=0; j<cc.length; ++j) {
      var v = cc[j]
      var nv = negate(v, numVariables)
      solution[v] = color
      solution[nv] = color^1
      var e = color ? adj[v] : adj[nv]
      for(var k=0; k<e.length; ++k) {
        solution[e[k]] = 1
      }
    }
  }

  solution.length = numVariables
  return solution
}