import { html, LitElement, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';

// using : https://www.npmjs.com/package/wc-fontawesome?activeTab=readme
import 'wc-fontawesome';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const faStyles = unsafeCSS(dom.css());

export class FrydonIcon extends LitElement {
  static get styles() {
    return [faStyles];
  }

  @property({ type: String }) icon = 'ban';

  render() {
    return html` <fa-icon icon=${this.icon}></fa-icon> `;
  }
}
