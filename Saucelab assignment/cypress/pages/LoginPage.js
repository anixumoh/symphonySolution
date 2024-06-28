class LoginPage {

    elementsList() {
        const elements = {
            usernameInput: "username",
            passwordInput: "password",
            loginButton: "login-button"
        }

        return elements
    }

    enterUsername(user_name) {
        cy.getBySel(this.elementsList().usernameInput, user_name);
    }

    enterPassword(userPassword) {
        cy.getBySel(this.elementsList().passwordInput, userPassword);
    }

    clickLoginButton() {
        cy.clickSel(this.elementsList().loginButton);
    }
}
export default LoginPage