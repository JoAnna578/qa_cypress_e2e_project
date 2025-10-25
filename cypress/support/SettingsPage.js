import PageObject from '../PageObject';

class SettingsPage extends PageObject {
  url = '/settings';

  // Form fields
  get usernameField() {
    return cy.get('[data-cy="username-settings"]');
  }

  get bioField() {
    return cy.get('[data-cy="bio-settings"]');
  }

  get emailField() {
    return cy.get('[data-cy="email-settings"]');
  }

  get passwordField() {
    return cy.get('[data-cy="password-settings"]');
  }

  get updateBtn() {
    return cy.get('[data-cy="update-settings-btn"]');
  }

  get logoutBtn() {
    return cy.get('[data-cy="logout-btn"]');
  }

  // Actions
  typeUsername(username) {
    this.usernameField.clear().type(username);
  }

  typeBio(bio) {
    this.bioField.clear().type(bio);
  }

  typeEmail(email) {
    this.emailField.clear().type(email);
  }

  typePassword(password) {
    this.passwordField.clear().type(password);
  }

  clickUpdate() {
    this.updateBtn.click();
  }

  clickLogout() {
    this.logoutBtn.click();
  }
}

export default SettingsPage;
