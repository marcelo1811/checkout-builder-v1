import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import { NumberInput, NumberInputField } from "@chakra-ui/number-input";
import { IBlock } from ".";

interface IModalNewBlockProps {
  containerStyles?: any;
  block: IBlock
}

enum InputTypes {
  String = 'string',
  Any = 'any',
  Number = 'number',
  Children = 'children',
}

interface IInputByType {
  type: string;
  placeholder: string;
}

const InputByType = ({ type, placeholder }: IInputByType) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  return type === InputTypes.String ? (
    <Input placeholder={placeholder} />
  ) : type === InputTypes.Number ? (
    <NumberInput>
      <NumberInputField />
    </NumberInput>
  ) : null
}
;
export function ModalNewBlock({ containerStyles, block }: IModalNewBlockProps) {
  return (
    <Box style={containerStyles}>
      {block.block_props.map ((blockProp) => {
        return (
          <InputByType type={blockProp.type} placeholder={blockProp.name} />
        )
      })}
    </Box>
  )
}