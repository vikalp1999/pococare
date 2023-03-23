import { Box, Button, ButtonGroup, Divider, Flex ,Heading,Image, Stack, Text} from '@chakra-ui/react';
import React from 'react'
import { chakra } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
const ProductCard = ({name,price,description}) => {
  return (
    <Card maxW='sm'>
    <CardBody>
      <Image
        src='https://www.pococare.com/image.png'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{name}</Heading>
        <Text>
          {description}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          {price}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue'>
          Buy now
        </Button>
        <Button variant='ghost' colorScheme='blue'>
          Add to cart
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  
  )
}

export default ProductCard