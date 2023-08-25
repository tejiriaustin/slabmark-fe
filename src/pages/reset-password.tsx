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

const ResetPassword = () => {
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
                        <Heading fontSize={{ base:'2xl', md: '3xl'}}>Reset Password !</Heading>
                    </Center>
                    <Center>
                        <Text color={useColorModeValue('gray.800','gray.400')}>Enter your email address which a reset code will be sent to</Text>
                    </Center>
                    <FormControl id="Reset code" isRequired>
                        <FormLabel>Reset code</FormLabel>
                        <Input
                            type="email"
                            placeholder={'Enter email address'}
                        />
                    </FormControl>
                    <FormControl id="New Password" isRequired>
                        <FormLabel>New Password</FormLabel>
                        <Input
                            type="password"
                            placeholder={'Enter new password'}
                        />
                    </FormControl>
                    <FormControl id="Confirm Password" isRequired>
                        <FormLabel>Confirm Password</FormLabel>
                        <Input
                            type="email"
                            placeholder={'Confirm Password'}
                        />
                    </FormControl>
                    <Stack spacing={6}>
                        <Button
                            loadingText="Submitting"
                            size="lg"
                            colorScheme={'blue'}
                            variant={'solid'}>
                            Reset Password
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
        </Stack>
    )
}

export default ResetPassword;