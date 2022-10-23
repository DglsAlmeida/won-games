import { Meta, Story } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight
} as Meta

export const Basic: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

Basic.args = {
  title: "Read Dead it's back",
  subtitle: "Come see John's new adventures",
  buttonLink: '/test',
  backgroundImage: '/img/red-dead-img.jpeg',
  buttonLabel: 'Buy now'
}

export const WithImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithImage.args = {
  title: "Read Dead it's back",
  subtitle: "Come see John's new adventures",
  buttonLink: '/test',
  backgroundImage: '/img/red-dead-img.jpeg',
  buttonLabel: 'Buy now',
  floatImage: 'img/red-dead-float.png'
}
