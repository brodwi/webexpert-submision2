import UrlParser from '../../routes/url-parser';
import restaurantSource from '../../data/restaurant-source';
import { createrestaurantsDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
const Detail = {
    async render() {
      return `
          <div id="detailRestaurant" class="detailRestaurant"></div>
          <div id="likeButtonContainer"></div>
          `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await restaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detailRestaurant');
    restaurantContainer.innerHTML = createrestaurantsDetailTemplate(restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      Restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });

  },
};

export default Detail;