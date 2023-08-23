import {
    Button,
    Checkbox,
    Flex,
    Link,
    Text,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    useColorModeValue,
    Stack,
    Image,
    Center,
} from '@chakra-ui/react';
import {ViewIcon, ViewOffIcon} from '@chakra-ui/icons';
import {useState} from "react";

const LoginScreen = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClick = () => setShowPassword(!showPassword)

    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'img.png'
                    }
                />
            </Flex>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Center>
                        <Heading fontSize={{ base:'2xl', md: '3xl'}}>Welcome back !</Heading>
                    </Center>
                    <Center>
                        <Text color={useColorModeValue('gray.800','gray.400')}>Enter your login details to continue</Text>
                    </Center>
                    <FormControl id="email" isRequired>
                        <FormLabel>Username</FormLabel>
                        <Input
                            type="email"
                            placeholder={'Enter Username'}
                            focusBorderColor='blue'
                        />
                    </FormControl>
                    <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                            <Input
                                type={showPassword ? 'text': 'password'}
                                placeholder={'Enter password'}
                                focusBorderColor='blue.100'
                            />
                            <InputRightElement h={'full'}>
                                <Button
                                    variant={'ghost'}
                                    onClick={handleClick}>
                                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <Stack spacing={6}>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'end'}
                            justify={'space-between'}>
                            <Text color={'blue.500'}>
                                <Link href='/forgot-password'>
                                    Forgot password?
                                </Link>
                            </Text>
                        </Stack>
                        <Button
                            loadingText="Submitting"
                            size="lg"
                            colorScheme={'blue'}
                            variant={'solid'}>
                            Login
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
        </Stack>
    )
}
export default LoginScreen;