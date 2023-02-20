import type { StoryFn, StoryObj } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'components/Button',
  component: Button,
} as StoryObj<typeof Button>

const Template: StoryFn<typeof Button> = args => <Button {...args} />

export const Basic = Template.bind({})

Basic.args = {
  children: 'Click me!',
}
