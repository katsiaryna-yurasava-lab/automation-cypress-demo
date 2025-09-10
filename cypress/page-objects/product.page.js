
class ProductPage {

    get productItems() {
        return cy.get('[data-test="inventory-list"]')
            .find('[data-test="inventory-item"]')
    }

    getProductItemNameElement(item) {
        return cy.wrap(item).find('[data-test="inventory-item-name"]')
    }

    getProductDescriptionElement(item) {
        return cy.wrap(item).find('[data-test="inventory-item-desc"]')
    }

    getProductPriceElement(item) {
        return cy.wrap(item).find('[data-test="inventory-item-price"]')
    }
}

export default new ProductPage()
