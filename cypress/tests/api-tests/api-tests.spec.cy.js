/// <reference types="cypress" />

import airportData from "../../fixtures/airports.json"

describe('Sauce demo API tests: /airports', () => {

    beforeEach(function () {
        cy.log('Send a GET request to the endpoint /airports')
        cy.request('GET', 'https://airportgap.com/api/airports')
            .then(response => {
                cy.wrap(response).as('response')
            })
    })

    it('Scenario 1: Verify Airport Count', function () {
        const EXPECTED_AIRPORT_NUMBER = 30
        cy.log(`Verify that the response contains exactly ${EXPECTED_AIRPORT_NUMBER} airports.`)
        expect(this.response.body.data).not.to.be.empty
        expect(this.response.body.data.length).to.eq(EXPECTED_AIRPORT_NUMBER)
    })

    it('Scenario 2: Verify Specific Airports', function () {
        cy.log(`Verify that the response includes the following airports: ${airportData.toString()}`)
        airportData.forEach(airport => {
            expect(this.response.body.data.some((item) => item.attributes.name === airport)).to.be.true
        })
    })
})

describe('Sauce demo API tests: /airports/distance', () => {
    it('Scenario 3: Verify Distance Between Airports', () => {
        cy.request('POST', 'https://airportgap.com/api/airports/distance',
            {from: 'KIX', to: 'NRT'})
            .then(response => {
                expect(response.body.data.attributes.kilometers > 400).to.be.true
            })
    })
})
