import {Box, Flex, FlexProps, Icon} from "@chakra-ui/react";
import React from "react";
import {IconType} from "react-icons";
import Link from "next/link"

interface NavItemProps extends FlexProps {
    icon: IconType
    children: React.ReactNode
    url: string
}

const NavItem = ({ icon, children, url }: NavItemProps) => {
    return (
        <Link  href={url}>
            <Box
            color='gray.500'
            style={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                p="2.5"
                mx="4"
                ml="5"
                my="3"
                borderRadius="md"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'blue.300',
                    color: 'gray.100',
                }}
                >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'gray.100',
                        }}
                        as={icon as any}
                    />
                )}
                {children}
            </Flex>
        </Box>
        </Link>
    )
}

export default NavItem;