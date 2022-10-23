/* eslint-disable quotes */
class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
        <ul>
            <li>Copyright © 2022 - Restaurant Enjoy</li>
            <li>Build With 🧡 Riko Airlan Ramadhan</li>
        </ul>
    </footer>
`;
  }
}

customElements.define("footer-section", Footer);
