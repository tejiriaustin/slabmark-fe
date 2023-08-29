import {
    Avatar,
    Box,
    HStack, Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Text,
    useColorModeValue,
    VStack
} from "@chakra-ui/react";
import React from "react";
import {FiChevronDown} from 'react-icons/fi';
import {deleteToken} from "@/storage";
import {useRouter} from "next/router";
import {useState} from "react";

interface ProfileProps {
    image: string
    firstName: string
    title: string
}

export default function Profile() {
    const router = useRouter();
    const [profilePicture, setProfilePicture] = useState('DW');

    const handleLogout = () => {
        router.push('/login')
        deleteToken()
    }

    return (
        <Menu>
            <MenuButton p={1} transition="all 0.3s" _focus={{ boxShadow: 'none' }} bg={'gray.100'} borderRadius={100}>
                <HStack>
                    {
                        profilePicture ?
                            <Avatar
                                size={'sm'}
                                src={
                                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                }
                            />
                            : 'DW'

                    }
                    <VStack
                        display={{ base: 'none', md: 'flex' }}
                        alignItems="center"
                        justifyContent={'center'}
                        spacing="1px"
                        ml="2"
                    >
                        <Text fontSize="sm">Justina</Text>
                    </VStack>
                </HStack>
            </MenuButton>
            <MenuList
                bg={useColorModeValue('white', 'gray.100')}
                borderColor={useColorModeValue('gray.100', 'gray.50')}>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuDivider />
                <MenuItem onClick={handleLogout}>Log out</MenuItem>
            </MenuList>
        </Menu>
    )
}