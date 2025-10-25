import PageObject from '../PageObject';

class ArticlePage extends PageObject {
  url = '/editor';

  // Form fields
  get titleField() {
    return cy.get('[data-cy="article-title"]');
  }

  get descriptionField() {
    return cy.get('[data-cy="article-description"]');
  }

  get bodyField() {
    return cy.get('[data-cy="article-body"]');
  }

  get tagsField() {
    return cy.get('[data-cy="article-tags"]');
  }

  get publishBtn() {
    return cy.get('[data-cy="publish-article-btn"]');
  }

  // Actions
  typeTitle(title) {
    this.titleField.clear().type(title);
  }

  typeDescription(description) {
    this.descriptionField.clear().type(description);
  }

  typeBody(body) {
    this.bodyField.clear().type(body);
  }

  typeTags(tags) {
    this.tagsField.clear().type(tags);
  }

  clickPublish() {
    this.publishBtn.click();
  }
}

export default ArticlePage;
