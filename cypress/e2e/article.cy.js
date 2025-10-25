/// <reference types='cypress' />
import ArticlePage from '../support/ArticlePage';
import faker from 'faker';
import SignInPage from '../support/pages/signIn.pageObject';

describe('Article', () => {
  const articlePage = new ArticlePage();
  const signInPage = new SignInPage();
  const user = {
    email: 'testuser@example.com',
    password: 'Password123'
  };

  before(() => {
    cy.task('db:clear'); // czyścimy bazę danych
    signInPage.visit();
    signInPage.signIn(user.email, user.password);
  });

  beforeEach(() => {
    cy.task('db:clear'); // każdy test startuje z czystą bazą
  });

  it('should create a new article', () => {
    const articleData = {
      title: faker.lorem.sentence(),
      description: faker.lorem.sentence(),
      body: faker.lorem.paragraph(),
      tags: faker.lorem.words(3)
    };

    articlePage.visit(); // otwieramy formularz
    articlePage.createArticle(articleData);
    articlePage.assertArticleCreated(articleData);
  });

  it('should edit an article', () => {
    const articleData = {
      title: faker.lorem.sentence(),
      description: faker.lorem.sentence(),
      body: faker.lorem.paragraph(),
      tags: faker.lorem.words(3)
    };

    articlePage.visit();
    articlePage.createArticle(articleData);

    const updatedData = {
      ...articleData,
      body: faker.lorem.paragraph()
    };

    articlePage.searchArticle(articleData.title);
    articlePage.editArticle(updatedData);
    articlePage.assertArticleUpdated(updatedData.body);
  });

  it('should delete an article', () => {
    const articleData = {
      title: faker.lorem.sentence(),
      description: faker.lorem.sentence(),
      body: faker.lorem.paragraph(),
      tags: faker.lorem.words(3)
    };

    articlePage.visit();
    articlePage.createArticle(articleData);

    articlePage.searchArticle(articleData.title);
    articlePage.deleteArticle();
    articlePage.assertArticleDeleted(articleData.title);
  });
});
