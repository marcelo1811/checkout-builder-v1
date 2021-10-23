import { ComponentStory } from "@storybook/react";
import { CardBlock } from "blocks/CardBlock";

export default {
  title: 'Example/CardBlock',
  component: CardBlock,
}

const Template: ComponentStory<typeof CardBlock> = (args) => <CardBlock {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  title: 'Aprenda na prática',
  description: 'Exemplos da vida real e código',
  bgColor: '#eae8e8',
  fontColor: 'rgb(3, 224, 2)',
}