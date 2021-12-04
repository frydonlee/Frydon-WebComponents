import { html, LitElement, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';

// using : https://www.npmjs.com/package/wc-fontawesome?activeTab=readme
import 'wc-fontawesome';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';

// library.add(fas);
library.add(fab);

const faStyles = unsafeCSS(dom.css());

export class FrydonIcon extends LitElement {
  static get styles() {
    return [faStyles];
  }

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  @property({ type: String }) icon = 'fab fa.amazon';

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <fa-icon icon=${this.icon}></fa-icon>
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
