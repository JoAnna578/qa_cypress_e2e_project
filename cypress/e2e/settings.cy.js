/// <reference types='cypress' />
import SettingsPage from '../support/SettingsPage';
import faker from 'faker';
import SignInPage from '../support/pages/signIn.pageObject';

describe('Settings page', () => {
  const settingsPage = new SettingsPage();
  const signInPage = new SignInPage();
  const user = {
    email: 'testuser@example.com',
    password: 'Password123'
  };

  before(() => {
    cy.task('db:clear');
    signInPage.visit();
    signInPage.signIn(user.email, user.password);
  });

  beforeEach(() => {
    settingsPage.visit();
  });

  it('should update username', () => {
    const newUsername = faker.internet.userName();
    settingsPage.updateUsername(newUsername);
    settingsPage.assertUsernameUpdated(newUsername);
  });

  it('should update bio', () => {
    const newBio = faker.lorem.sentence();
    settingsPage.updateBio(newBio);
    settingsPage.assertBioUpdated(newBio);
  });

  it('should update email', () => {
    const newEmail = faker.internet.email();
    settingsPage.updateEmail(newEmail);
    settingsPage.assertEmailUpdated(newEmail);
  });

  it('should update password', () => {
    const newPassword = faker.internet.password();
    settingsPage.updatePassword(newPassword);
    // nie ma asercji dla hasła, można ewentualnie ponownie zalogować użytkownika
  });

  it('should log out', () => {
    settingsPage.logOut();
    cy.url().should('include', '/login'); // sprawdzamy, że użytkownik został wylogowany
  });
});
