import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/Products/product.actions';
import { refreshToken } from '../redux/auth/auth.action';
import { Grid, GridItem } from '@chakra-ui/react'

import Navbar from './Navbar';
import { Box, Text } from '@chakra-ui/react';
import ProductCard from '../components/Productcard';
import Loader from '../components/Loader';
const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.product);
  console.log(state.data)
  useEffect(() => {
    dispatch(getProducts()).then((res) => {
      dispatch(refreshToken());
    });
  }, []);
  if (state.loading) {
    return (
      <Box margin="auto">
      <Loader/>
      </Box>
    );
  }
  return (
    <>
      <Navbar />
      <Box
        maxW="7xl"
        mx="auto"
        px={{
          base: '4',
          md: '8',
          lg: '12',
        }}
        py={{
          base: '6',
          md: '8',
          lg: '12',
        }}
      >
        <Grid templateColumns={{sm:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:'repeat(3, 1fr)'}} gap={6}>
        {state?.data?.map((el, i) => (
            <ProductCard key={i} name={el.name} price={el.price} description={el.description}/>
          ))}
  
       </Grid>
          
        
      </Box>
    </>
  );
};

export default Home;
