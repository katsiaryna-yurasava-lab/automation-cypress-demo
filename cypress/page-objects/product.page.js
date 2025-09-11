
class ProductPage {

    get productItems() {
        return cy.get('[data-test="inventory-list"]')
            .find('[data-test="inventory-item"]')
    }

    get shoppingCardBadge() {
        return cy.get('[data-test="shopping-cart-badge"]')
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

    addProductToCard(index) {
        this.productItems.eq(index)
            .find('button:contains("Add to cart")').click()
    }
}

export default new ProductPage()
