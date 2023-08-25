import {
    Button,
    Checkbox,
    Flex,
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
import {useState} from "react";
import LoginScreen from "@/src/pages/login";

const ForgotPassword = () => {
    const [showPassword, setShowPassword] = useState(false);

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
                        <Heading fontSize={{ base:'2xl', md: '3xl'}}>Forgot Password !</Heading>
                    </Center>
                    <Center>
                        <Text color={useColorModeValue('gray.800','gray.400')}>Enter your email address which a reset code will be sent to</Text>
                    </Center>
                    <FormControl id="email address" isRequired>
                        <FormLabel>Email Address</FormLabel>
                        <Input
                            type="email"
                            placeholder={'Enter Email Address'}
                            focusBorderColor='blue'
                        />
                    </FormControl>
                    <Stack spacing={6}>
                        <Button
                            loadingText="Submitting"
                            size="lg"
                            colorScheme={'blue'}
                            variant={'solid'}>
                            Send
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
        </Stack>
    )
}

export default ForgotPassword;