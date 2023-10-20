import {
    Card,
    CardBody,
    CardHeader,
    Heading,
    Text,
    Divider,
    Center,
    HStack,
    VStack,
    Icon,
    Flex,
} from "@chakra-ui/react";
import {SWRMutationResponse} from "swr/mutation";
import React from "react";


interface Details {
    name: string
    value: string
}

interface Summaries {
    cardName: string
    details: any
    icon: any
    [key: string]: any;
}

const SummaryCard =({cardName,icon, details}: Summaries)=> {
    return (
        <Card w={'25%'} h={'200px'} onClick={() => {}}  _groupHover={{color: 'blue.100'}}>
            <CardHeader>
                <HStack justifyContent={'space-between'}>
                    <Heading fontSize="20px" fontWeight="600">{cardName}</Heading>
                    <Flex>
                        {icon && (
                            <Icon
                                w={'25px'}
                                h={'25px'}
                                fontSize="16"
                                bg={'blue.100'}
                                color="gray.700"
                                borderRadius={'50%'}
                                _groupHover={{
                                    color: 'blue.100',
                                }}
                                as={icon as any}
                            />
                        )}
                    </Flex>
                </HStack>
            </CardHeader>
            <CardBody flexDir={'column'}>
                <HStack justifyContent={'center'}>
                    <VStack p={5}>
                        <Text>{details}</Text>
                        <Text fontWeight="bold">{details}</Text>
                    </VStack>
                    <Center height={'50px'}>
                        <Divider orientation='vertical' />
                    </Center>
                    <VStack p={5}>
                        <Text>{details}</Text>
                        <Text fontWeight="bold">{details}</Text>
                    </VStack>
                </HStack>
            </CardBody>
        </Card>
    )
}

export default SummaryCard;