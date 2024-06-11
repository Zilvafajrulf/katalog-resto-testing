const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteResto, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteResto = favoriteResto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteResto.getResto(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = `
      <button id="likeButton" aria-label="Like this restaurant" tabindex="15">
        <i class="fas fa-heart"></i>
      </button>
    `;

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteResto.putResto(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = `
      <button id="unlikeButton" aria-label="Unlike this restaurant" style="display: none;" tabindex="16">
        <i class="fas fa-heart-broken"></i>
      </button>
    `;

    const unlikeButton = document.querySelector('#unlikeButton');
    unlikeButton.addEventListener('click', async () => {
      await this._favoriteResto.deleteResto(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
