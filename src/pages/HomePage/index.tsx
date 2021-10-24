import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { CardBlock } from "blocks/CardBlock";
import { RowBlock } from "blocks/RowBlock";
import { useState, useCallback, useEffect } from "react";
import { createServer } from 'miragejs';
import { FormNewBlock } from "./FormNewBlock";
import BlockComponents from "blocks";

export interface IBlockProps {
  name: string;
  type: string;
  is_required: string;
}
export interface IBlock {
  name: string;
  block_required_props: IBlockProps[];
  block_prop_values: any;
}

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/blocks', () => [
          {
            name: 'CardBlock',
            block_required_props: [
              {
                name: 'title',
                type: 'string',
                is_required: true,
              },
              {
                name: 'description',
                type: 'string',
                is_required: false,
              },
              {
                name: 'bgColor',
                type: 'string',
                is_required: false,
              },
              {
                name: 'containerStyles',
                type: 'any',
                is_required: false,
              },
              {
                name: 'fontColor',
                type: 'string',
                is_required: false,
              },
            ]
          },
          {
            name: 'RoundedBlock',
            block_required_props: [
              {
                name: 'title',
                type: 'string',
                is_required: true,
              },
              {
                name: 'description',
                type: 'string',
                is_required: false,
              },
              {
                name: 'bgColor',
                type: 'string',
                is_required: false,
              },
              {
                name: 'containerStyles',
                type: 'any',
                is_required: false,
              },
              {
                name: 'fontColor',
                type: 'string',
                is_required: false,
              },
            ]
          },
          {
            name: 'RowBlock',
            block_required_props: [
              {
                name: 'bgColor',
                type: 'string',
                is_required: false,
              },
              {
                name: 'containerStyles',
                type: 'any',
                is_required: false,
              },
              {
                name: 'height',
                type: 'number',
                is_required: false,
              },
              {
                name: 'children',
                type: 'children',
                is_required: true,
              }
            ]
          }
        ]
      )
    }}
  )

export function HomePage() {
  const [blocks, setBlocks] = useState<IBlock[]>([]);
  // const [showNewBlockModal, setShowNewBlockModal] = useState<boolean>(false);
  const [blockToCreate, setBlockToCreate] = useState<IBlock | null>(null);
  const [createdBlocks, setCreatedBlocks] = useState<IBlock[]>([]);

  useEffect(() => {
    fetchBlocks();
  }, []);
  
  const fetchBlocks = useCallback(async () => {
    const res = await fetch('/api/blocks');
    const json = await res.json();
    setBlocks(json);
  }, []);

  const handleClickNewBlock = (block: IBlock) => {
    setBlockToCreate(block);
  };

  const handleCreateBlock = (values: any, block: IBlock) => {
    console.log("🚀 ~ file: index.tsx ~ line 106 ~ handleCreateBlock ~ values", values)
    const newProps = {
      ...values
    }
    const newBlock = {
      ...block,
      block_prop_values: newProps
    }
    setCreatedBlocks([newBlock, ...createdBlocks])
  }


  const BlockToRender = BlockComponents['CardBlock']
  const blockToRendeProps = {
    bgColor:'#ffffff',
    description:'Componente teste',
    fontColor:'#000000',
    title:'Teste',
  }

  return (
    <Box
      height='100vh'
      width='100vw'
    >
      <Text>HomePage</Text>
      <RowBlock
        bgColor='transparent'
      >
        <CardBlock
          title='Teste'
          bgColor='white'
          description='Compre agora'
        />
      </RowBlock>

      <Box
        bg='gray.100'
      >
        <Heading >Blocos</Heading>
        <Box gridGap={2} display='flex'>
          {blocks.map((block, index) => {
            return (
              <Box key={index} padding={10} bgColor='green.300' width={300} onClick={() => handleClickNewBlock(block)}
                _hover={{
                  cursor: 'pointer',
                  opacity: 0.6
                }}
              >
                <Text fontSize='lg' fontWeight='bold'>{block.name}</Text>
                {block.block_required_props.map(blockProp => (
                  <Text color={blockProp.is_required ? 'green' : 'red'}>{blockProp.name} - {blockProp.type}</Text>
                ))}
              </Box>  
            )
          })}
        </Box>
      </Box>

      <Box>
        <Heading>Criação de bloco</Heading>
        {!!blockToCreate && (
          <FormNewBlock block={blockToCreate} onCreate={handleCreateBlock}/>
        )}
      </Box>

      
      <Box>
        <Heading>Bloco criado com sucesso!</Heading>
        <Flex gridGap={2}>
          {createdBlocks.map((createdBlock: IBlock) => {
            const BlockToRender = BlockComponents[createdBlock.name]

            return <BlockToRender {...createdBlock.block_prop_values} />
          })}
        </Flex>  
      </Box>
    </Box>
  )
}