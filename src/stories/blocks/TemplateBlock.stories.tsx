import { ComponentStory } from "@storybook/react";
import { TemplateBlock } from "blocks/TemplateBlock";

export default {
  title: 'Example/TemplateBlock',
  component: TemplateBlock,
}

const Template: ComponentStory<typeof TemplateBlock> = (args) => <TemplateBlock {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  containerStyles: {
    backgroundColor: 'red',
    width: '100px',
    height: '100px',
  }
}