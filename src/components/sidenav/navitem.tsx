import {Box, Flex, FlexProps, Icon} from "@chakra-ui/react";
import React from "react";
import {IconType} from "react-icons";

interface NavItemProps extends FlexProps {
    icon: IconType
    children: React.ReactNode
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
    return (
        <Box
            as="a"
            href="#"
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
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'gray.100',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Box>
    )
}

export default NavItem;