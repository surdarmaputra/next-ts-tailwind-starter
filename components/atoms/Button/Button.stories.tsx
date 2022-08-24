import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, ButtonSize, ButtonVariation } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: 'Button',
};

// @ts-expect-error unused args for native HTML element playground
export const Variations = (args) => (
  <div className="grid grid-cols-5 gap-2 justify-items-center items-center">
    {Object.values(ButtonVariation).map((variation, index) => (
      <Button key={index} variation={variation}>
        {variation}
      </Button>
    ))}
  </div>
);

// @ts-expect-error unused args for native HTML element playground
export const Sizes = (args) => (
  <div className="grid grid-cols-3 gap-2 justify-items-center items-center w-4/5">
    {Object.values(ButtonVariation).map((variation) =>
      Object.values(ButtonSize).map((size, index) => (
        <Button key={index} size={size} variation={variation}>
          {size}
        </Button>
      )),
    )}
  </div>
);
