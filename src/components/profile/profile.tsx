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

interface ProfileProps {
    image: string
    firstName: string
    title: string
}

export default function Profile() {
    return (
        <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                <HStack>
                    <Avatar
                        size={'sm'}
                        src={
                            'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                        }
                    />
                    <VStack
                        display={{ base: 'none', md: 'flex' }}
                        alignItems="flex-start"
                        spacing="1px"
                        ml="2">
                        <Text fontSize="sm">Justina</Text>
                        <Text fontSize="xs" color="gray.600">
                            Admin
                        </Text>
                    </VStack>
                    <Box display={{ base: 'none', md: 'flex' }}>
                        <FiChevronDown />
                    </Box>
                </HStack>
            </MenuButton>
            <MenuList
                bg={useColorModeValue('blue.100', 'blue.100')}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuDivider />
                <MenuItem>Sign out</MenuItem>
            </MenuList>
        </Menu>
    )
}