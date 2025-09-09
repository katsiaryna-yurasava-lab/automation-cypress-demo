import userData from "../fixtures/login-credentials.json"
import products from "../fixtures/products-data.json"

describe('Sauce demo', () => {

    beforeEach(function () {
        cy.log('WHEN User navigate to https://www.saucedemo.com page')
        cy.visit('https://www.saucedemo.com')
        cy.log('AND enters correct username and password')
        cy.get('#user-name').type(userData.name)
        cy.get('#password').type(userData.password)
        cy.log("AND clicks Login button")
        cy.get('#login-button').click()

    })

    it('Scenario 1: Verify Inventory Items', () => {
        cy.log(`THEN There are ${products.length} elements presented at the page`)
        cy.get('[data-test="inventory-list"]')
            .find('[data-test="inventory-item"]')
            .should('have.lengthOf', products.length)
            .each(($item, index) => {
                cy.log(`AND Data about the product #${index + 1} is correctly presented`)
                cy.wrap($item).find('[data-test="inventory-item-name"]')
                    .should('have.text', products[index].name)

                cy.wrap($item).find('[data-test="inventory-item-desc"]')
                    .should('have.text', products[index].description)

                cy.wrap($item).find('[data-test="inventory-item-price"]')
                    .should('have.text', products[index].price)
            })
    })

    it('Scenario 2: Add Item to Cart', () => {
        cy.log('WHEN User adds the first product into the bucket')
        cy.get('[data-test="inventory-list"]')
            .find('[data-test="inventory-item"]').eq(0)
            .find('#add-to-cart-sauce-labs-backpack').click()

        cy.log('THEN cart badge correctly displays the number 1')
        cy.get('[data-test="shopping-cart-badge"]')
            .should('have.text', '1')

    })
})
