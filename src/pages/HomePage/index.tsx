import { Box, Heading, Text } from "@chakra-ui/layout";
import { CardBlock } from "blocks/CardBlock";
import { RowBlock } from "blocks/RowBlock";
import { useState, useCallback, useEffect } from "react";
import { createServer } from 'miragejs';
import { ModalNewBlock } from "./ModalNewBlock";

export interface IBlockProps {
  name: string;
  type: string;
  is_required: string;
}
export interface IBlock {
  name: string;
  block_props: IBlockProps[]
}

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/blocks', () => [
          {
            name: 'CardBlock',
            block_props: [
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
            block_props: [
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

  useEffect(() => {
    fetchBlocks();
  }, []);
  
  const fetchBlocks = useCallback(async () => {
    const res = await fetch('/api/blocks');
    const json = await res.json();
    setBlocks(json);
  }, []);

  const handleClickNewBlock = (block: IBlock) => {
    console.log("🚀 ~ file: index.tsx ~ line 96 ~ handleClickNewBlock ~ block", block)
    setBlockToCreate(block);
  };

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
          {blocks.map((block) => {
            return (
              <Box padding={10} bgColor='green.300' width={300} onClick={() => handleClickNewBlock(block)}
                _hover={{
                  cursor: 'pointer',
                  opacity: 0.6
                }}
              >
                <Text fontSize='lg' fontWeight='bold'>{block.name}</Text>
                {block.block_props.map(blockProp => (
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
          <ModalNewBlock block={blockToCreate}/>
        )}
      </Box>
    </Box>
  )
}