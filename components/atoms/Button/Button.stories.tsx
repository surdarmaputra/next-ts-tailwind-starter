import { ComponentMeta, ComponentStory } from '@storybook/react';

import ArrowDownCircleIcon from '~icons/tabler/arrow-down-circle';
import ArrowNarrowRightIcon from '~icons/tabler/arrow-narrow-right';

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
  <div className="flex flex-wrap items-end space-x-2 space-y-2">
    {Object.values(ButtonVariation).map((variation, index) => (
      <Button key={index} variation={variation}>
        {variation}
      </Button>
    ))}
  </div>
);

// @ts-expect-error unused args for native HTML element playground
export const Sizes = (args) => (
  <>
    {Object.values(ButtonVariation).map((variation, variationIndex) => (
      <div
        className="flex flex-wrap items-center space-x-2 mb-4"
        key={variationIndex}
      >
        {Object.values(ButtonSize).map((size, sizeIndex) => (
          <Button key={sizeIndex} size={size} variation={variation}>
            {size}
          </Button>
        ))}
      </div>
    ))}
  </>
);

// @ts-expect-error unused args for native HTML element playground
export const Outline = (args) => (
  <>
    {Object.values(ButtonVariation).map((variation, variationIndex) => (
      <div
        className="flex flex-wrap items-center space-x-2 mb-4"
        key={variationIndex}
      >
        {Object.values(ButtonSize).map((size, sizeIndex) => (
          <>
            <Button key={sizeIndex} size={size} variation={variation}>
              {size}
            </Button>
            <Button key={sizeIndex} outline size={size} variation={variation}>
              {size}
            </Button>
          </>
        ))}
      </div>
    ))}
  </>
);

// @ts-expect-error unused args for native HTML element playground
export const Disabled = (args) => (
  <>
    <div className="flex flex-wrap items-end space-x-2 space-y-2 mb-4">
      {Object.values(ButtonVariation).map((variation, index) => (
        <Button disabled key={index} variation={variation}>
          {variation}
        </Button>
      ))}
    </div>
    <div className="flex flex-wrap items-end space-x-2 space-y-2">
      {Object.values(ButtonVariation).map((variation, index) => (
        <Button disabled key={index} outline variation={variation}>
          {variation}
        </Button>
      ))}
    </div>
  </>
);

// @ts-expect-error unused args for native HTML element playground
export const WithIcon = (args) => (
  <>
    <div className="flex flex-wrap items-center space-x-2 mb-4">
      {Object.values(ButtonSize).map((size, index) => (
        <Button key={index} size={size}>
          Register now
          <ArrowNarrowRightIcon className="block ml-4" />
        </Button>
      ))}
    </div>
    <div className="flex flex-wrap items-center space-x-2 mb-4">
      {Object.values(ButtonSize).map((size, index) => (
        <Button key={index} outline size={size}>
          Register now
          <ArrowNarrowRightIcon className="block ml-4" />
        </Button>
      ))}
    </div>
    <div className="flex flex-wrap items-center space-x-2 mb-4">
      {Object.values(ButtonSize).map((size, index) => (
        <Button key={index} size={size}>
          <ArrowDownCircleIcon className="block mr-4" />
          Download here
        </Button>
      ))}
    </div>
    <div className="flex flex-wrap items-center space-x-2 mb-4">
      {Object.values(ButtonSize).map((size, index) => (
        <Button key={index} outline size={size}>
          <ArrowDownCircleIcon className="block mr-4" />
          Download here
        </Button>
      ))}
    </div>
  </>
);

// @ts-expect-error unused args for native HTML element playground
export const Link = (args) => (
  <>
    <div className="flex flex-wrap items-center space-x-2 mb-4">
      <Button
        external
        href="https://duckduckgo.com"
        link
        size="large"
        target="_blank"
        title="Search engine"
      >
        Open in new tab
        <ArrowNarrowRightIcon className="block ml-4" />
      </Button>
      <Button
        disabled
        external
        href="https://duckduckgo.com"
        link
        size="large"
        target="_blank"
        title="Search engine"
      >
        Open in new tab
        <ArrowNarrowRightIcon className="block ml-4" />
      </Button>
    </div>
    <div className="flex flex-wrap items-center space-x-2 mb-4">
      <Button external href="https://duckduckgo.com" link outline size="large">
        Open in current tab
        <ArrowNarrowRightIcon className="block ml-4" />
      </Button>
      <Button
        disabled
        external
        href="https://duckduckgo.com"
        link
        outline
        size="large"
      >
        Open in current tab
        <ArrowNarrowRightIcon className="block ml-4" />
      </Button>
    </div>
    <div className="flex flex-wrap items-center space-x-2 mb-4">
      <Button href="/about" link outline size="large" variation="dark">
        Next Link
        <ArrowNarrowRightIcon className="block ml-4" />
      </Button>
      <Button disabled href="/about" link outline size="large" variation="dark">
        Next Link
        <ArrowNarrowRightIcon className="block ml-4" />
      </Button>
    </div>
  </>
);

// @ts-expect-error unused args for native HTML element playground
export const Loading = (args) => (
  <>
    <div className="flex flex-wrap items-center space-x-2 mb-4">
      <Button loading>Submitting</Button>
      <Button loading outline>
        Submitting
      </Button>
      <Button loading variation="dark">
        Submitting
        <ArrowNarrowRightIcon className="block ml-4" />
      </Button>
      <Button disabled loading variation="success">
        Submitting
      </Button>
    </div>
  </>
);