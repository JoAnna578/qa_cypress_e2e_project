/// <reference types='cypress' />
/// <reference types='../support' />

import ArticlePage from '../support/pages/ArticlePage';

describe('Article', () => {
  const articlePage = new ArticlePage();
  const articleData = {
    title: 'Test Article ' + Math.floor(Math.random() * 1000),
    description: 'Test Description',
    body: 'This is the body of the test article',
    tags: ['test', 'cypress']
  };

  before(() => {
    articlePage.visitNewArticleForm();
  });

  beforeEach(() => {
    cy.task('db:clear'); // czyścimy bazę przed każdym testem
  });

  it('should be created using New Article form', () => {
    articlePage.createArticle(articleData);
    articlePage.assertArticleCreated(articleData.title);
  });

  it('should be edited using Edit button', () => {
    const updatedData = { ...articleData, body: 'Updated body content' };
    articlePage.searchArticle(articleData.title);
    articlePage.editArticle(updatedData);
    articlePage.assertArticleUpdated(updatedData.body);
  });

  it('should be deleted using Delete button', () => {
    articlePage.searchArticle(articleData.title);
    articlePage.deleteArticle();
    articlePage.assertArticleDeleted(articleData.title);
  });
});
