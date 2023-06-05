const assert = require('assert');

Feature('liking restaurant');
 
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});
 
Scenario('liking some restaurant', ({I}) => {
  I.seeElement('#restaurants');
  I.see('', '#restaurants');


  I.amOnPage('/');

  for (let i = 1; i <= 3; i++) {
    I.waitForElement('.card_title a', 20);
    I.seeElement('.card_title a');
    I.click(locate('.card_title a').at(i));
    I.waitForElement('#likeButton', 20);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#restaurants');
});

Scenario('unlike one restaurant', ({I}) => {
  // like dulu restonya

  I.amOnPage('/');
  I.seeElement('#restaurants');
  I.waitForElement('.card_title a', 20);
  I.seeElement('.card_title a');
  I.click(locate('.card_title a').first());
  I.waitForElement('#likeButton', 20);
  I.click('#likeButton');
  I.amOnPage('/#/favorite');

  // unlike yang sudah di sukai tadi
  I.seeElement('#restaurants');
  I.waitForElement('.card_title a', 20);
  I.seeElement('.card_title a');
  I.click(locate('.card_title a').first());
  I.waitForElement('#likeButton', 20);
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.see('', '#restaurants');
});
