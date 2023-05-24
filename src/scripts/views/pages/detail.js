import UrlParser from '../../routes/url-parser';
import restaurantSource from '../../data/restaurant-source';
import { createrestaurantsDetailTemplate } from '../templates/template-creator';
const Detail = {
    async render() {
      return `
          <div id="detailRestaurant" class="detailRestaurant"></div>
          `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await restaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detailRestaurant');
    restaurantContainer.innerHTML = createrestaurantsDetailTemplate(restaurant);

  },
};

export default Detail;