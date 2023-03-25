import { Box, Button, ButtonGroup, Divider, Flex ,Heading,Image, Stack, Text} from '@chakra-ui/react';
import React from 'react'
import { chakra } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
const ProductCard = ({name,price,description}) => {
  return (
    <Card maxW='sm'>
    <CardBody>
      <Image
        src='https://media.istockphoto.com/id/1300036753/photo/falling-antibiotics-healthcare-background.jpg?s=612x612&w=0&k=20&c=oquxJiLqE33ePw2qML9UtKJgyYUqjkLFwxT84Pr-WPk='
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{name}</Heading>
        <Text>
          {description}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          Price : {price}
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