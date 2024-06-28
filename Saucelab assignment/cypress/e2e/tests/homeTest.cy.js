/// <reference types="cypress" />
import InventoryPage from "../../pages/InventoryPage";
import LoginPage from "../../pages/LoginPage";

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage();


describe('test', () => {
    beforeEach(function (){
         //1)Go to https://www.saucedemo.com/
         cy.visit("/");
         cy.clearAllSessionStorage({log:true})
    })

    it('test', () => {
       

        //2)Log in to the site. Verify that the items are sorted by Name ( A -> Z ). 
        loginPage.enterUsername("standard_user");
        loginPage.enterPassword("secret_sauce")
        loginPage.clickLoginButton();

        inventoryPage.verifySorting("Name (A to Z)"); //Verify item is sorted A to Z
        inventoryPage.verifyFirstItem("Sauce Labs Backpack"); //Verify that the last item for Z - A is now the last item for A - Z
        inventoryPage.verifyLastItem("Test.allTheThings() T-Shirt (Red)"); //Verify that the first item for Z - A is now the last item for A - Z

        //3)Change the sorting to Name ( Z -> A).
        inventoryPage.sortInventoryItem('za');

        //4)Verify that the items are sorted correctly.
        inventoryPage.verifySorting("Name (Z to A)"); //Verify item is sorted Z to A
        inventoryPage.verifyFirstItem("Test.allTheThings() T-Shirt (Red)") //Verify that the last item for A - Z is now the first element for Z - A
        inventoryPage.verifyLastItem("Sauce Labs Backpack"); //Verify that the first item for A - Z is now the last item for Z - A
    });
});