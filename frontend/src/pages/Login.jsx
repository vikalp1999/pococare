import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  Image
} from '@chakra-ui/react';
import { loginUser } from '../redux/auth/auth.action';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, NavLink } from 'react-router-dom';

const Login = () => {
  const [cred, setCred] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCred({ ...cred, [name]: value });
  };
  const handleClick = () => {
    dispatch(loginUser(cred));
  };
  if (state.isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <Container
      maxW="lg"
      py={{ base: '12', md: '24' }}
      px={{ base: '0', sm: '8' }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Box margin="auto">
              <Image
               src="https://www.pococare.com/image.png"/>
            </Box>
            <Heading size={{ base: 'xs', md: 'sm' }}>
              Log in to your account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Don't have an account?</Text>
              <Box color={'blue.400'} fontSize="xl">
                <NavLink colorScheme="blue" to="/signup">
                  Sign up
                </NavLink>
              </Box>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={{ base: 'transparent', sm: 'bg-surface' }}
          boxShadow={{ base: 'none', sm: 'md' }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="text"
                  name="email"
                  value={cred.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">Password</FormLabel>
                <Input
                  id="email"
                  type="password"
                  name="password"
                  value={cred.password}
                  onChange={handleChange}
                />
              </FormControl>
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="link" colorScheme="blue" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button
                variant="primary"
                onClick={handleClick}
                bgColor="blue.400"
                color={'white'}
              >
                Log In
              </Button>
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  or continue with <Link to="/signup">Sign In</Link>
                </Text>
                <Divider />
              </HStack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;
