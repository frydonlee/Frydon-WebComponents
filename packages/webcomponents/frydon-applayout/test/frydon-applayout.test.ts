import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { FrydonApplayout } from '../src/FrydonApplayout.js';
import '../src/frydon-applayout.js';

describe('FrydonApplayout', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<FrydonApplayout>(html`<frydon-applayout></frydon-applayout>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<FrydonApplayout>(html`<frydon-applayout></frydon-applayout>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<FrydonApplayout>(html`<frydon-applayout title="attribute title"></frydon-applayout>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<FrydonApplayout>(html`<frydon-applayout></frydon-applayout>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
