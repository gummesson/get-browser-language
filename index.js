/*!
 * Exports
 */

module.exports = getBrowserLanguage

/**
 * Get browser language.
 *
 * @return {String}
 */

function getBrowserLanguage() {
  var first = window.navigator.languages
    ? window.navigator.languages[0]
    : null

  var lang = first
    || window.navigator.language
    || window.navigator.browserLanguage
    || window.navigator.userLanguage

  return lang
}
