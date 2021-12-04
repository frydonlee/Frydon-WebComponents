import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { FrydonIcon } from '../src/FrydonIcon.js';
import '../src/frydon-icon.js';

describe('FrydonIcon', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<FrydonIcon>(html`<frydon-icon></frydon-icon>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<FrydonIcon>(html`<frydon-icon></frydon-icon>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<FrydonIcon>(
      html`<frydon-icon title="attribute title"></frydon-icon>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<FrydonIcon>(html`<frydon-icon></frydon-icon>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
