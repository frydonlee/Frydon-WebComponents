import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import '@vaadin/tabs';
import { Tab } from './interface.js';


export class FrydonTabs extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--frydon-tabs-text-color, #000);
    }
  `;

  @property({ type: Array }) tabs: Array<Tab> = [];

  render() {
    return html`
      <vaadin-tabs selected="3">
        ${this.tabs.map(
          tab => html ` <vaadin-tab>
                          ${tab.label}

                        </vaadin-tab>
                      `
        )}
      </vaadin-tabs>
    `;
  }
}
