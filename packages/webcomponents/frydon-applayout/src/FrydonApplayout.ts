import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import '../../../frydon-tabs/dist/src/frydon-tabs.js'

export class FrydonApplayout extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--frydon-applayout-text-color, #000);
    }
  `;

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    const tabs = [{label:"tab1",icon:"ghost"},{label:"tab2"},{label:"tab3"}];
    return html`
    <frydon-tabs .tabs=${tabs}>
        </frydon-tabs>
      <h1>APPLAYOUT</h1>
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
