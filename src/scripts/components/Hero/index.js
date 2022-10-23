/* eslint-disable quotes */
class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="hero">
          <picture>
            <source media="(min-width:601px)" srcset="./images/hero-image_4-large.jpg">
            <source media="(max-width:600px)" srcset="./images/hero-image_4-small.jpg">
            <img src="./images/hero-image_4-large.jpg" class="lazyload" alt="Heroes Image">
          </picture>
          <h2 class="hero-title">Restaurant Enjoy</h2>
          <p tabindex="0" class="hero__tagline">
                Tempatnya nongkrong anak muda ter favorite belum kesini belum asik.
            </p>
      </section>
`;
  }
}

customElements.define("hero-section", Hero);
