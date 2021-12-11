import { html, TemplateResult } from 'lit';
import '../src/frydon-icon.js';

export default {
  title: 'FrydonIcon',
  component: 'frydon-icon',
  argTypes: {
    icon: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  icon?: string;
}

const Template: Story<ArgTypes> = ({ icon = 'ban' }: ArgTypes) => html`
  <frydon-icon .icon=${icon}> </frydon-icon>
`;

export const Regular = Template.bind({});

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  icon: 'ghost',
};
