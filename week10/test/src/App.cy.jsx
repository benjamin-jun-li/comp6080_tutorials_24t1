import React from 'react'
import App from './App'

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
    cy.get('h1').contains('Vite + React')
  });
  it('increments the count when the button is clicked', () => {
    cy.mount(<App />)
    cy.get('button').click()
    cy.get('button').contains('count is 1')
  });
})