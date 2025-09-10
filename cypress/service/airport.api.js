export const getAirports = () => {
    return cy.request('GET', `${Cypress.env('apiBaseUrl')}/airports`)
}

export const getDistanceBetweenAirports = (body) => {
    return cy.request('POST', `${Cypress.env('apiBaseUrl')}/airports/distance`, body)
}
