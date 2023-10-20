import {Box, Heading, Flex, Card, CardHeader, CardBody, Text} from "@chakra-ui/react";
import {useFetcher} from "@/hooks/use-fetcher";
import {useMutation} from "@/hooks/use-mutation";
import SummaryCard from "@/components/summarycard";
import {MdFactory} from "react-icons/md";
import {HiFilter} from "react-icons/hi";
import {RiStore2Fill} from "react-icons/ri";

interface ReportSummaryProps  {
    summaries: Array<{
            name: string,
            details: Record<string, number | string>
        }>
}

interface Payload {name: string, salary: string}

interface Response {
    success: boolean,
    data: string
}

export default function ReportSummary ({summaries}: ReportSummaryProps) {
    const { data, error, isLoading } = useFetcher("/users")

    const { trigger } = useMutation<Response, Payload>({
        url: "/users/create",
        method: "put",
        options: {
            onSuccess(response) {

            }
        }
    });

    const cardOne = {cardName:"Refinery", icon: MdFactory,details:"vvlm"}
    const cardTwo = {cardName:"Quality Control", icon: HiFilter, details:"vvlm"}
    const cardThree = {cardName:"Fractionation",icon: HiFilter, details:"vvlm"}
    const cardFour = {cardName:"Store", icon:RiStore2Fill ,details:"vvlm"}

    return (
        <Box>
            <Heading fontSize="24px" fontWeight="700" marginBottom={4}>Latest report</Heading>
            <Flex gap={'4'}>
                <SummaryCard {...cardOne}/>
                <SummaryCard {...cardTwo}/>
                <SummaryCard {...cardThree}/>
                <SummaryCard {...cardFour}/>
            </Flex>
        </Box>
    )
}


