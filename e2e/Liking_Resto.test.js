/* eslint-disable no-trailing-spaces */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurants', async ({ I }) => {
  I.see('Tidak ada restoran favorit untuk ditampilkan', '.error-message');
});

Scenario('adding and removing one restaurant to favorite', async ({ I }) => {
  I.see('Tidak ada restoran favorit untuk ditampilkan', '.error-message');
  
  I.amOnPage('/');
  I.seeElement('.card');
  const firstRestaurant = locate('.linkResto').first();
  const firstRestaurantTitle = await I.grabTextFrom('.linkResto');
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.refreshPage();
  I.seeElement('.card');
  const likedRestaurantTitle = await I.grabTextFrom('.linkResto');
  I.click(firstRestaurant);

  I.seeElement('#unlikeButton');
  I.click('#unlikeButton');
    
  I.amOnPage('/#/favorite');

  I.see('Tidak ada restoran favorit untuk ditampilkan', '.error-message');
  assert.equal(firstRestaurantTitle, likedRestaurantTitle);
});
