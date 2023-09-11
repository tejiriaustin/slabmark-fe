import {Box, BoxProps, CloseButton, Divider, Flex, Text, useColorModeValue} from "@chakra-ui/react";
import React from "react";
import {IconType} from "react-icons";
import {BiSolidDashboard, BiSolidUser} from "react-icons/bi";
import {FiSettings} from "react-icons/fi";
import NavItem from "@/components/sidenav/navitem";

interface SidebarProps extends BoxProps {
    onClose: () => void
}

interface LinkItemProps {
    name: string
    icon: IconType
    path: string
}

const LinkItems: Array<LinkItemProps> = [
    {name: 'Dashboard', icon: BiSolidDashboard, path: '/dashboard'},
    {name: 'Report', icon: BiSolidUser, path: '/report'},
    {name: 'Users', icon: BiSolidUser, path: '/users'},
    {name: 'Settings', icon: FiSettings, path: '/settings'},
]


const SidenavContent = ({onClose, ...rest}: SidebarProps) => {
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{base: 'full', md: 60}}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="20px" fontFamily="nunito sans, serif" color="blue.400" fontWeight="bold">
                    Slabmark Nig Limited
                </Text>
                <CloseButton display={{base: 'flex', md: 'none'}} onClick={onClose}/>
            </Flex>
            <Divider/>
            <Box py={5}>
                {LinkItems.map((link) => (
                    <NavItem key={link.name} icon={link.icon} url={link.path}>
                        {link.name}
                    </NavItem>
                ))}
            </Box>
        </Box>
    )
}

export default SidenavContent;