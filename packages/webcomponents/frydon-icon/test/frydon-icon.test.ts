import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { FrydonIcon } from '../src/FrydonIcon.js';
import '../src/frydon-icon.js';

describe('FrydonIcon', () => {
  it('has a default icon "ban" ', async () => {
    const el = await fixture<FrydonIcon>(html`<frydon-icon></frydon-icon>`);

    expect(el.icon).to.equal('ban');
  });

  it('can override the icon via attribute', async () => {
    const el = await fixture<FrydonIcon>(
      html`<frydon-icon icon="ghost"></frydon-icon>`
    );

    expect(el.icon).to.equal('ghost');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<FrydonIcon>(html`<frydon-icon></frydon-icon>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
