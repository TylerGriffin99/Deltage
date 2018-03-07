/* global Feature, Scenario */

Feature('Signed out user can sign in')

Scenario('with existing user', (registeredUser) => {
  registeredUser.signsin('deltage', 'delta')
  registeredUser.sees('Top Trades')
})
