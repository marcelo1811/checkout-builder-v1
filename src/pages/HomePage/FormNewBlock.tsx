import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import { NumberInput, NumberInputField } from "@chakra-ui/number-input";
import { IBlock } from ".";
import { Field, Form, Formik } from 'formik';
import { FormControl, FormLabel } from "@chakra-ui/form-control";

interface IFormNewBlockProps {
  containerStyles?: any;
  block: IBlock
  onCreate: Function;
}

enum InputTypes {
  String = 'string',
  Any = 'any',
  Number = 'number',
  Children = 'children',
}

interface IInputByTypeProps {
  type: string;
  placeholder: string;
  field: any;
}

const InputByType = ({ type, placeholder, field }: IInputByTypeProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  return type === InputTypes.String ? (
    <Input placeholder={placeholder} {...field} />
  ) : type === InputTypes.Number ? (
    <NumberInput>
      <NumberInputField placeholder={placeholder} {...field}/>
    </NumberInput>
  ) : null
};

export function FormNewBlock({ containerStyles, block, onCreate }: IFormNewBlockProps) {
  return (
    <Box style={containerStyles}>
      <Formik
        initialValues={{}}
        onSubmit={(values, actions) => {
          onCreate({...values}, block);
        }}
      >
        <Form>
          {block.block_required_props.map ((blockProp, index) => {
            return (
              <Field name={blockProp.name} key={index}>
                {({ field, form }: any) => (
                  <FormControl>
                    <FormLabel htmlFor={blockProp.name}>{blockProp.name}</FormLabel>
                    <InputByType field={{...field}} type={blockProp.type} placeholder={blockProp.name} />
                  </FormControl>  
                )}
              </Field>  
            )
          })}
          <Button type='submit'>
            Criar bloco
          </Button>
        </Form>
      </Formik>
    </Box>
  )
}