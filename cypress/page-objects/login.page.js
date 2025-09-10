class LoginPage {

    get userNameInput() {
        return cy.get('#user-name')
    }

    get userPasswordInput() {
        return cy.get('#password')
    }

    get loginButton() {
        return cy.get('#login-button')
    }

    login(username, password) {
        this.userNameInput.type(username)
        this.userPasswordInput.type(password)
        this.loginButton.click()

    }
}

export default new LoginPage()
