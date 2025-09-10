export const getAirports = async () => {
    return cy.request('GET', `${Cypress.env('apiBaseUrl')}/airports`)
}

export const getDistanceBetweenAirports = async (body) => {
    return cy.request('POST', `${Cypress.env('apiBaseUrl')}/airports/distance`, body)
}
