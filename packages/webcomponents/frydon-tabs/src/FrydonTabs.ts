import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import '@vaadin/tabs';

export class FrydonTabs extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--frydon-tabs-text-color, #000);
    }
  `;

  @property({ type: Array }) tabs: Array<string> = [];

  render() {
    return html`
      <h1>TABS</h1>
      <vaadin-tabs selected="3">
        ${this.tabs.map(tabs => html` <vaadin-tab>${tabs}</vaadin-tab> `)}
      </vaadin-tabs>
    `;
  }
}
