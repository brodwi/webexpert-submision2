const Detail = {
    async render() {
      return `
          <div id="detailRestaurant" class="detailRestaurant"></div>
          <div id="likeButtonContainer"></div>
          `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Detail;