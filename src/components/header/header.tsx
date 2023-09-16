import {
    Divider,
    Flex,
    HStack,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    Menu, useColorModeValue, MenuButton, Avatar, VStack, Box, MenuList, MenuItem, MenuDivider, FlexProps,
} from "@chakra-ui/react";
import React from "react";
import dayjs from "dayjs";
import {Search2Icon} from "@chakra-ui/icons";
import {
    BsBellFill,
} from 'react-icons/bs'
import  {FiMenu} from "react-icons/fi";
import Profile from '../profile/profile'
import {deleteToken} from "@/storage";
import {useRouter} from "next/router";

interface HeaderProps extends FlexProps {
    onOpen: () => void
}

function getCurrentDate(separator=''){
     // Monday, May 1, 2023
    return dayjs().format('dddd, D MMMM')
}



export function Header({ onOpen, ...rest }: HeaderProps) {

    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={5}
            py={3}
            minHeight="20"
            alignItems="center"
            flexDir={'column'}
            bg={useColorModeValue('white', 'blue.100')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}>
            <Flex
                w={'full'}
                marginTop={4}
                justifyContent={'flex-start'}
                alignItems={'center'}
                display={{ base: 'flex', md: 'none' }}
            >
                <IconButton
                    onClick={onOpen}
                    aria-label="open menu"
                    icon={<FiMenu />}
                />
            </Flex>

            <Flex alignItems={'center'} gap={5} flexDir={{base: 'column', md: 'row'}} spacing={{ base: '0', md: '6' }} justifyContent={'space-between'} w={'100%'}>
                <Text fontSize={{ base: "14px", md: "16px", lg: "18px" }}>{getCurrentDate()}</Text>
                <Flex gap={4} alignItems={'center'} w={{base:'full', md:'unset'}} flexDir={{base: 'column', md: 'row'}}>
                    <InputGroup  maxWidth={{base:'unset', md: '400px'}} w={'full'}>
                        <InputLeftElement h={"full"}>
                            <Search2Icon color="gray.100" />
                        </InputLeftElement>
                        <Input placeholder="Search" focusBorderColor='blue.100'></Input>
                    </InputGroup>
                    <Flex gap={4} alignItems={'center'}>
                        <IconButton size="lg" variant="ghost" color="gray.500" aria-label="open menu"  icon={<BsBellFill  />} />
                        <Flex alignItems={'center'}>
                            <Profile />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}


