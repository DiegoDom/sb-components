import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MyLabel } from '../../components/MyLabel';

export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes: {
    color: { control: 'select' },
    size: { control: 'select' },
    fontColor: { control: 'color' },
  }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel { ...args }/>

export const Basic = Template.bind({});
Basic.args = {
  allCaps: false,
  color: 'primary',
  label: 'Basic label',
  size: 'normal'
}

export const AllCaps = Template.bind({});
AllCaps.args = {
  allCaps: true,
  color: 'primary',
  label: 'AllCaps label',
  size: 'normal'
}

export const Secondary = Template.bind({});
Secondary.args = {
  allCaps: false,
  color: 'secondary',
  label: 'Secondary label',
  size: 'normal'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  allCaps: false,
  color: 'tertiary',
  label: 'Tertiary label',
  size: 'normal'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  allCaps: false,
  label: 'CustomFontColor',
  size: 'h1',
  fontColor: ''
}
