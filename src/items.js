/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
import { LitElement, html, css } from 'lit';
import './orange-card.js';

export class Items extends LitElement {
  static get tag() {
    return 'items-list';
  }

  static get properties() {
    return {
      items: { type: Array },
      objeects: { type: String },
    };
  }

  constructor() {
    super();
    this.items = [];
    this.objeects = 'Cards';
    this.updateItems();
  }

  updateItems() {
    const address = new URL('../api/items', import.meta.url).href;
    fetch(address)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return [];
      })
      .then(data => {
        this.items = data;
      });
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .wrapper {
        width: 400px;
        display: flex;
      }
      .item {
        display: inline-flex;
      }
    `;
  }

  render() {
    return html`
      <h1>${this.objeects}</h1>
      <div class="wrapper">
        ${this.items.map(
          item => html`
            <div class="item">
              <orange-card
                title="${item.title}"
                Image="${item.Image}"
                memeTop="${item.memeTop}"
                memeBottom="${item.memeBottom}"
              ></orange-card>
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define(Items.tag, Items); // eslint-disable-line no-undef
