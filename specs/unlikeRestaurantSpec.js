import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

// eslint-disable-next-line no-undef
describe('Unliking A restaurant', () => {
  // eslint-disable-next-line no-undef
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  // eslint-disable-next-line no-undef
  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  // eslint-disable-next-line no-undef
  it('should display unlike widget when the restaurant has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      Restaurant: {
        id: 1,
      },
    });

    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeTruthy();
  });

  // eslint-disable-next-line no-undef
  it('should not display like widget when the Restaurant has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      Restaurant: {
        id: 1,
      },
    });

    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeFalsy();
  });

  // eslint-disable-next-line no-undef
  it('should be able to remove liked restaurant from the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      Restaurant: {
        id: 1,
      },
    });

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    // eslint-disable-next-line no-undef
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });

  // eslint-disable-next-line no-undef
  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      Restaurant: {
        id: 1,
      },
    });

    // hapus dulu restaurant dari daftar restaurant yang disukai
    await FavoriteRestaurantIdb.deleteRestaurant(1);

    // kemudian, simulasikan pengguna menekan widget batal menyukai restaurant
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    // eslint-disable-next-line no-undef
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});
