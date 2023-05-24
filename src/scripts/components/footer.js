class Jumbotran extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
       <footer>
          <p>
          Copyright © 2023 - Brodwi Restaurant Apps
          <a href="https://github.com/brodwi">About</a>
          </p>
      </footer>
      `;
    }
  }
  
  customElements.define('footer-element', Jumbotran);
  