import { Box } from "@chakra-ui/layout";
import { ComponentStory } from "@storybook/react";
import { CardBlock } from "blocks/CardBlock";

export default {
  title: 'Example/CardBlock',
  component: CardBlock,
}

const Template: ComponentStory<typeof CardBlock> = (args) => {
  return (
    // <Box width='500px' height='300px' bg='white' justifyContent='center' alignItems='center' display='flex'>
      // Shadows doesn't appear on storybook, run o react
      <CardBlock {...args} />
    // </Box>
  )
}
;

export const Basic = Template.bind({});

Basic.args = {
  title: 'Aprenda na prática',
  description: 'Exemplos da vida real e código',
  bgColor: 'white',
  fontColor: 'rgb(3, 224, 2)',
}