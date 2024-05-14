/**
 * Adds a custom :containsRegex pseudo selector to jQuery
 * that matches elements whose text content matches the
 * given regular expression.
 */
export const applyJQueryContainsRegex = (jq) => {
  jq.expr[":"].containsRegex = jq.expr.createPseudo(function (pattern) {
    var regex = new RegExp(pattern, "i")
    return function (elem) {
      return regex.test(jq(elem).text())
    }
  })
}
