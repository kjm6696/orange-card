import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/meme-maker/src/meme-maker.js';

class OrangeCard extends LitElement {
  static properties = {
    header: { type: String },
    Image: { type: String },
    topLeftBut: { type: String },
    oneBut: { type: String },
    twoBut: { type: String },
    threBut: { type: String },
    btn: { type: String },
    carrot: { type: String },
  };

  static styles = css`
    body {
      background: white;
    }

    .img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 400px;
      box-shadow: 0px 6px 15px black;
      border-radius: 30px;
      padding: 2px;
    }

    .img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      box-shadow: 0px 6px 15px black;
    }

    @media only screen and (max-width: 400px) {
      button {
        display: none;
      }
      .topLeftbtn {
        display: none;
      }
      .oneBut {
        display: none;
      }
      .twoBut {
        display: none;
      }
      .threBut {
        display: none;
      }
    }

    button {
      margin-left: auto;
      margin-right: auto;
      text-transform: uppercase;
      padding: 10px 15px;
      font-family: Monospace;
      box-shadow: 0px 6px 15px black;
      text-align: center;
    }

    @media only screen and (max-width: 500px) {
      .page {
        background: orange;
        text-align: center;
        box-shadow: 0px 6px 15px black;
        padding: 40px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    }

    @media only screen and (min-width: 500px) {
      .page {
        background: orange;
        text-align: center;
        box-shadow: 0px 6px 15px black;
        width: 500px;
        padding: 40px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    }

    .header {
      font-family: Monospace;
      text-transform: uppercase;
      color: white;
      text-shadow: 2px 2px 4px #000000;
    }

    .details {
      font-family: Monospace;
      text-transform: uppercase;
      color: white;
      text-shadow: 2px 2px 4px #000000;
      font-size: 20px;
    }
  `;

  constructor() {
    super();
    this.title = 'Heading for the title';
    this.Image =
      'https://toppng.com/uploads/preview/and-blank-effect-transparent-11546868080xgtiz6hxid.png';
    this.header = 'My app';
    this.carrot = 'Details';
  }

  render() {
    return html`
      <main></main>
      <div class="page">
        <div class="header"><h1>${this.title}</h1></div>
        <meme-maker
          alt="Cat stalking a small toy"
          image-url="${this.Image}"
          top-text="This is not"
          bottom-text="transparent"
        >
        </meme-maker>

        <details class="details">
          <summary>${this.carrot}</summary>
          <div>
            <ul>
              <slot><h3>Paragraph for description of the image</h3></slot>
            </ul>
          </div>
        </details>
      </div>
    `;
  }
}

customElements.define('orange-card', OrangeCard);
