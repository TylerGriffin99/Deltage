'use strict'

/* global actor */

let I

module.exports = {
  _init () {
    I = actor()
  },

  signin (username, password) {
    I.amOnPage('/')
    I.fillField('#username', username)
    I.fillField('#password', password)
    I.click('Login')
    I.waitForElement('.exchangeContainer', 20)
  }
}
