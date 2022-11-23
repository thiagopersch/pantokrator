import { Story, Meta } from '@storybook/react';
import Title, { TitleProps } from '.';

export default {
  title: 'Title',
  component: Title,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta;

export const Default: Story<TitleProps> = (args) => <Title {...args} />;

Default.args = {
  children: 'My Title'
};
