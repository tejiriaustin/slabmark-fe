import {IconType} from "react-icons";
import {
    Flex,
    Icon,
    IconButton,
    List,
    ListItem,
    Tooltip,
    Text,
} from "@chakra-ui/react";

export interface SidenavItem {
    icon: IconType;
    label: string;
    to: string;
}

export interface SidenavItemProps {
    navItems: SidenavItem[];
    mode: "semi" | "over";
}

export default function SidenavItems({navItems, mode = "semi"}: SidenavItemProps) {
    const sideBarItemInSemiMode = (
        {icon: Icon, ...item}: SidenavItem,
        index: number
    ) => (
        <ListItem key={index}>
            <Tooltip label={item.label} placement="right" >
                <IconButton
                    key={index}
                    bg="transparent"
                    _focus={{ bg: "gray.100" }}
                    _activeLink={{ boxShadow: "md", bg: "orange.500", color: "white" }}
                    cursor="pointer"
                    borderRadius="xl"
                    aria-label={item.label}/>
                    icon={<Icon mr="4" fontSize="16" _groupHover={{color: 'white'}}/>}
            </Tooltip>
        </ListItem>
        );

    const sidenavItemInOverMode = (item: SidenavItem, index: number) => (
        <ListItem key={index}>
            <List
                display="block"
                to={item.to}
                _focus={{ bg: "gray.100" }}
                _hover={{
                    bg: "gray.200"
                }}
                _activeLink={{ bg: "orange.500", color: "white" }}
                w="full"
                borderRadius="md"
            >
                <Flex alignItems="center" p={2}>
                    <Icon boxSize="5" as={item.icon} />
                    <Text ml={2}>{item.label}</Text>
                </Flex>

            </List>
            <Tooltip label={item.label} placement="right" >
                <IconButton
                    key={index}
                    bg="transparent"
                    _focus={{ bg: "gray.100" }}
                    _activeLink={{ boxShadow: "md", bg: "orange.500", color: "white" }}
                    cursor="pointer"
                    borderRadius="xl"
                    aria-label={item.label}/>
                icon={<Icon mr="4" fontSize="16" _groupHover={{color: 'white'}}/>}
            </Tooltip>
        </ListItem>
    );
    return (
        <List spacing={3}>
            {
                mode === "semi"
                ? navItems.map((item, index) => sideBarItemInSemiMode(item, index))
                : navItems.map((item, index) => sidenavItemInOverMode(item, index))
            }
        </List>
    )
}