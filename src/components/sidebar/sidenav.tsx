import React from 'react'
import {useSidebar} from "@/src/components/sidebar/sidenav-context/sidenav-context";
import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Icon,
    VStack,
} from "@chakra-ui/react";
import {SiWwise} from "react-icons/si";
import SidenavItems, { SidenavItem } from "./sidenav-items/sidenav-items";


export interface SidebarProps {
    navItems: SidenavItem[];
}

export function Sidenav({navItems}: SidebarProps) {
    const {isOpen, onClose} = useSidebar()

    return (
        <React.Fragment>
            <VStack spacing="5" as="nav" display={{ base: "none", md: "flex" }}>
                <Icon as={SiWwise} boxSize={8} /> {/*OR PUT YOUR LOGO HERE */}
                <SidenavItems navItems={navItems}  mode='semi' />
            </VStack>
            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Sidenav Header</DrawerHeader>
                    <DrawerBody>
                        <SidenavItems navItems={navItems} mode="over" />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </React.Fragment>
    )
}
