import {
    Button,
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
import {useRouter} from "next/router";
import {deleteToken} from '@/storage'

const LoginScreen = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const handleClick = () => setShowPassword(!showPassword)

    const handleLogout = () => {
        deleteToken()
    }

    return (
        <Flex maxH={'100vh'} overflow={'hidden'} direction={{ base: 'column', md: 'row' }}>
            <Flex display={{base: 'none', md: 'flex'}} pos={'relative'} w={'50%'} h={'100vh'} alignItems={'center'} justifyContent={'center'} bg={'blue.500'}>
                <Image
                    fill
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'pattern-min.png'
                    }
                />
                <Text pos={'absolute'} fontFamily={'nunito sans'} fontSize={'40px'}  fontWeight={'700'} color={'white'}>Slabmark <br />Nig Limited</Text>
            </Flex>
            <Flex p={8} w={{base: '100%', md: '50%'}} minH={'100%'} align={'center'} justify={'center'}>
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
                            focusBorderColor='blue.100'
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
                            variant={'solid'}
                            onClick={()=>{router.push('/home')}}
                        >
                            Login
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
        </Flex>
    )
}
export default LoginScreen;