import userData from "../../fixtures/login-credentials.json"
import products from "../../fixtures/products-data.json"
import productPage from "../../page-objects/product.page"
import loginPage from "../../page-objects/login.page";

describe('Sauce demo', () => {

    beforeEach(function () {
        cy.log('WHEN User navigate to https://www.saucedemo.com page')
        cy.visit('https://www.saucedemo.com')
        cy.log('AND enters correct username and password')
        loginPage.login(userData.name, userData.password)
    })

    it('Scenario 1: Verify Inventory Items', () => {
        cy.log(`THEN There are ${products.length} elements presented at the page`)
        productPage.productItems
            .should('have.lengthOf', products.length)
            .each(($item, index) => {
                cy.log(`AND Data about the product #${index + 1} is correctly presented`)
                productPage.getProductItemNameElement($item)
                    .scrollTo('bottom', {ensureScrollable: false})
                    .should('have.text', products[index].name)
                productPage.getProductDescriptionElement($item)
                    .should('have.text', products[index].description)
                productPage.getProductPriceElement($item)
                    .should('have.text', products[index].price)
            })
    })

    it('Scenario 2: Add Item to Cart', () => {
        const PRODUCT_NUMBER_TO_ADD = 3
        for (let productIndex = 0; productIndex < PRODUCT_NUMBER_TO_ADD; productIndex++) {
            cy.log(`WHEN User adds the product #${productIndex + 1} into the bucket`)
            cy.get('[data-test="inventory-list"]')
                .find('[data-test="inventory-item"]').eq(productIndex)
                .find('button:contains("Add to cart")').click()
            cy.log(`THEN cart badge correctly displays the number ${productIndex + 1}`)
            cy.get('[data-test="shopping-cart-badge"]')
                .should('have.text', (productIndex + 1).toString())
        }
    })
})
