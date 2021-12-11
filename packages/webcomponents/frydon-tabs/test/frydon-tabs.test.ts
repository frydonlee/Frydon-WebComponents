import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { FrydonTabs } from '../src/FrydonTabs.js';
import '../src/frydon-tabs.js';

describe('FrydonTabs', () => {

  it('can override the tabs via attribute', async () => {
    const tabs = [{label:"tab1"},{label:"tab2"},{label:"tab3"}];
    const el = await fixture<FrydonTabs>(
      html`<frydon-tabs .tabs=${tabs}></frydon-tabs>`
    );

    expect(el.tabs).to.equal(tabs);
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<FrydonTabs>(html`<frydon-tabs></frydon-tabs>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
