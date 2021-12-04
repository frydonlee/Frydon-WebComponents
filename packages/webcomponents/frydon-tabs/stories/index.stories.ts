import { html, TemplateResult } from 'lit';
import '../src/frydon-tabs.js';
import { Tab } from '../src/interface.js';

export default {
  title: 'FrydonTabs',
  component: 'frydon-tabs',
  argTypes: {
    tabs: { control: 'array' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  tabs?: Array<Tab>;
}

const Template: Story<ArgTypes> = ({
  tabs = [{label:"aaa"},{label:"bbb"},{label:"ccc"}],
}: ArgTypes) => html` <frydon-tabs .tabs=${tabs}> </frydon-tabs> `;

export const Regular = Template.bind({});

export const CustomTabs = Template.bind({});
CustomTabs.args = {
  tabs: [{label:"aaa"},{label:"bbb"},{label:"ccc"}],
};
