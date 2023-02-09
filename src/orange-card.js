import { LitElement, html, css } from 'lit';

class OrangeCard extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    body {
      background: white;
    }

    .topLeftbtn {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    .oneBut {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    .twoBut {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    .threBut {
      display: block;
      margin-left: auto;
      margin-right: auto;
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

    .paragraph {
      text-align: center;
      font-family: Monospace;
      color: white;
      text-shadow: 2px 2px 4px #000000;
    }

    .header {
      font-family: Monospace;
      text-transform: uppercase;
      color: white;
      text-shadow: 2px 2px 4px #000000;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <main>
        <button class="topLeftbtn">
          Duplicate
          <button class="oneBut">
            Change Background
            <button class="twoBut">
              Change Heading
              <button class="threBut">Delete Last Instance</button>
            </button>
          </button>
        </button>
      </main>
      <div class="page">
        <div class="header"><h1>Heading for the title</h1></div>
        <img
          src="https://toppng.com/uploads/preview/and-blank-effect-transparent-11546868080xgtiz6hxid.png"
          style="width:80%;"
          class="img"
          alt="https://toppng.com/uploads/preview/and-blank-effect-transparent-11546868080xgtiz6hxid.png"
        />
        <div class="paragraph"></div>
        <button class="btn">Details</button>
      </div>
    `;
  }
}

customElements.define('orange-card', OrangeCard);
