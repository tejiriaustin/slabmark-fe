import {Box, Container, Drawer, DrawerContent, Flex, useColorModeValue, useDisclosure} from "@chakra-ui/react";
import SidenavContent from "@/components/sidenav/sidenav";
import {Header} from "@/components/header/header";
import React from "react";

const DashboardLayout = ({children}: React.ReactNode) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box minH="100vh" bg={useColorModeValue('blue.50', 'blue.900')}>
            <SidenavContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidenavContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            <Header onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} p="4">
                {children}
            </Box>
        </Box>
    )
}

export default DashboardLayout