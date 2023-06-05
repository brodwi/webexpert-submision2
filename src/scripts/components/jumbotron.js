class Jumbotran extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <picture>
      <div class="jumbotron" crossorigin="anonymous">
    </picture>
      <div class="jumbotron-inner">
        <h1 class="jumbotron-title">Restaurant</h1>
        <p class="jumbotron-subtitle">
          Restaurant Harga Kaki Lima, Rasa Bintang Lima.
        </p>
      </div>
    </div>`;
  }
}

customElements.define('jumbotron-element', Jumbotran);
