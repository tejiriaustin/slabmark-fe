import {
    Box,
    Flex,
    Heading,
    Divider,
    Input,
    InputGroup,
    InputLeftElement,
    useColorModeValue,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    Text,
    HStack,
} from "@chakra-ui/react";
import DashboardTable from "@/components/table";
import {Search2Icon} from "@chakra-ui/icons";
import React from "react";
import {HiOutlineAdjustmentsHorizontal} from "react-icons/hi2";

const ActivityTable = () => {
    return (
        <Box p={'10px'} marginTop={10} >
            <Heading fontSize="24px" fontWeight="700">Activity</Heading>
            <Flex flexDir={'column'} marginTop={5} bg={useColorModeValue('white', 'gray.100')} borderRadius={5}>
                <Flex flexDir={'row'} justifyContent={'space-between'}>
                    <InputGroup margin={5} maxWidth={{base:'unset', md: '400px'}} w={'full'}>
                        <InputLeftElement h={"full"}>
                            <Search2Icon color="white.100" />
                        </InputLeftElement>
                        <Input placeholder="Search for reports" focusBorderColor='blue.100'></Input>
                    </InputGroup>
                </Flex>
                <Divider />
                <DashboardTable />
            </Flex>
        </Box>
    )
}

export default ActivityTable;