const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('FAVORITE ONE RESTAURANT', async ({ I }) => {
  I.dontSeeElement('Tidak ada restoran untuk ditampilkan', '.card');
  I.seeElement('.content');
  I.amOnPage('/');
  I.wait(10);
  I.waitForElement('.card_title a');
  const firstResto = locate('.card_title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.waitForElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.waitForElement('.card');
  const favoritedRestoTitle = await I.grabTextFrom('.card_title');
  assert.strictEqual(firstRestoTitle, favoritedRestoTitle);
});

Scenario('UNFAVORITE ONE RESTAURANT', async ({ I }) => {
  I.dontSeeElement('Tidak ada restoran untuk ditampilkan', '.card');
  I.seeElement('.content');
  I.amOnPage('/');
  I.wait(10);
  I.waitForElement('.card_title a');
  const firstResto = locate('.card_title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.waitForElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.waitForElement('.card');
  const favoritedRestoTitle = await I.grabTextFrom('.card_title');
  assert.strictEqual(firstRestoTitle, favoritedRestoTitle);
  I.amOnPage('/#/favorite');
  I.seeElement('.card a');
  const firstFavoriteRestaurant = locate('.card_title a').first();
  I.click(firstFavoriteRestaurant);
  I.waitForElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.dontSeeElement('Tidak ada restoran untuk ditampilkan', '.card');
});
