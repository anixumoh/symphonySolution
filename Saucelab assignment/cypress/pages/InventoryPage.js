class InventoryPage {

    elementsList() {
        const elements = {
            sortButton: '[data-test="active-option"]',
            sortDroDownButton: 'select',
            inventoryItem: '[data-test="inventory-item-name"]'
        }

        return elements
    }

    verifySorting(order) {
        cy.get(this.elementsList().sortButton).then($value => {
            const textValue = $value.text()
            cy.wrap(textValue).should('equal', order)
        })
    }

    sortInventoryItem(item) {
        cy.get(this.elementsList().sortDroDownButton).select(item)
    }

    verifyFirstItem(item) {
        cy.get(this.elementsList().inventoryItem).first().then($el => {
            const productName = $el.text();
            cy.wrap(productName).should('equal', item)
        })
    }

    verifyLastItem(item) {
        cy.get(this.elementsList().inventoryItem).last().then($el => {
            const productName = $el.text();
            cy.wrap(productName).should('equal', item)
        })
    }
}
export default InventoryPage