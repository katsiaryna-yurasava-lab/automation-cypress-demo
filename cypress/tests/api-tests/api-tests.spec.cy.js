/// <reference types="cypress" />

import airportData from "../../fixtures/airports.json"
import {getAirports, getDistanceBetweenAirports} from "../../service/airport.api";

describe('Sauce demo API tests: /airports', () => {

    it('Scenario 1: Verify Airport Count', function () {
        const EXPECTED_AIRPORT_NUMBER = 30
        cy.log(`Verify that the response contains exactly ${EXPECTED_AIRPORT_NUMBER} airports.`)
        getAirports().then(response => {
            expect(response.body.data).not.to.be.empty
            expect(response.body.data.length).to.eq(EXPECTED_AIRPORT_NUMBER)
        })
    })

    it('Scenario 2: Verify Specific Airports', function () {
        cy.log(`Verify that the response includes the following airports: ${airportData.toString()}`)
        getAirports().then(response => {
            airportData.forEach(airport => {
                expect(this.response.body.data.some((item) => item.attributes.name === airport)).to.be.true
            })
        })
    })
})

describe('Sauce demo API tests: /airports/distance', () => {
    it('Scenario 3: Verify Distance Between Airports', () => {
        cy.log('Send a POST request to the endpoint /airports/distance with parameters for the airports KIX and NRT')
        getDistanceBetweenAirports({from: 'KIX', to: 'NRT'}).then(response => {
            cy.log('Verify that the calculated distance between these airports is greater than 400 km')
            expect(response.body.data.attributes.kilometers > 400).to.be.true
        })
    })
})
