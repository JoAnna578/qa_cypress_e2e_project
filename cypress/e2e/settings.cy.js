/// <reference types='cypress' />
/// <reference types='../support' />

import SettingsPage from '../support/pages/SettingsPage';

describe('Settings page', () => {
  const settingsPage = new SettingsPage();

  before(() => {
    settingsPage.visit();
  });

  beforeEach(() => {
    // Możesz dodać logowanie jeśli jest wymagane
  });

  it('should provide an ability to update username', () => {
    const newUsername = 'NewUser_' + Math.floor(Math.random() * 1000);
    settingsPage.updateUsername(newUsername);
    settingsPage.assertUsernameUpdated(newUsername);
  });

  it('should provide an ability to update bio', () => {
    const newBio = 'This is a new bio';
    settingsPage.updateBio(newBio);
    settingsPage.assertBioUpdated(newBio);
  });

  it('should provide an ability to update an email', () => {
    const newEmail = `user${Math.floor(Math.random() * 1000)}@mail.com`;
    settingsPage.updateEmail(newEmail);
    settingsPage.assertEmailUpdated(newEmail);
  });

  it('should provide an ability to update password', () => {
    const newPassword = 'NewPass123!';
    settingsPage.updatePassword(newPassword);
    settingsPage.assertPasswordUpdated(); // np. sprawdzenie komunikatu lub ponowne logowanie
  });

  it('should provide an ability to log out', () => {
    settingsPage.logout();
    settingsPage.assertLoggedOut();
  });
});
