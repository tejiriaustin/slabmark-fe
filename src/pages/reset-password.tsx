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
import {ViewIcon, ViewOffIcon} from "@chakra-ui/icons";

const ResetPassword = () => {
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setshowConfirmPassword] = useState(false);


    const handleNewPasswordClick = () => setShowNewPassword(!showNewPassword)
    const handleConfirmPasswordClick = () => setshowConfirmPassword(!showConfirmPassword)

    return (
        <Stack maxH={'100vh'} overflow={'hidden'} direction={{ base: 'column', md: 'row' }}>
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
                    <FormControl id="password" isRequired>
                        <FormLabel>New Password</FormLabel>
                        <InputGroup>
                            <Input
                                type={showNewPassword ? 'text': 'password'}
                                placeholder={'Enter new password'}
                                focusBorderColor='blue.100'
                            />
                            <InputRightElement h={'full'}>
                                <Button
                                    variant={'ghost'}
                                    onClick={handleNewPasswordClick}>
                                    {showNewPassword ? <ViewIcon /> : <ViewOffIcon />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <FormControl id="Confirm Password" isRequired>
                        <FormLabel>Confirm Password</FormLabel>
                        <InputGroup>
                            <Input
                                type={showConfirmPassword ? 'text': 'password'}
                                placeholder={'Confirm Password'}
                                focusBorderColor='blue.100'
                            />
                            <InputRightElement h={'full'}>
                                <Button
                                    variant={'ghost'}
                                    onClick={handleConfirmPasswordClick}>
                                    {showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
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