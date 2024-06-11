/* eslint-disable no-undef */
import FavRestoIdb from '../src/script/data/resto-idb';
import { itActsAsFavoriteRestoModel } from './contract/favRestoContract';

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavRestoIdb.getAllResto()).forEach(async (restaurant) => {
      await FavRestoIdb.deleteResto(restaurant.id);
    });
  });

  itActsAsFavoriteRestoModel(FavRestoIdb);
});
