import { ComponentStory } from "@storybook/react";
import { RowBlock } from "blocks/RowBlock";
import { colors } from "contants/colots";
import { Basic } from "./CardBlock.stories";

export default {
  title: 'Example/RowBlock',
  component: RowBlock,
}

const Template: ComponentStory<typeof RowBlock> = (args) => <RowBlock {...args} />;

export const Default = Template.bind({});

Default.args = {
  bgColor: colors.background,
  children: <>
    <Basic {...Basic.args} />
    <Basic {...Basic.args} />
    <Basic {...Basic.args} />
    <Basic {...Basic.args} />
  </>
}