import {Box, Heading,  Flex, Card, CardHeader, CardBody, CardFooter, Text} from "@chakra-ui/react";
import useSWR from "swr";
import {useFetcher} from "@/hooks/use-fetcher";
import {createMutator, useMutation} from "@/hooks/use-mutation";

interface ReportSummaryProps  {
    summaries: Array<{
            name: string,
            details: Record<string, number | string>
        }>
}

function fetchReportSummary () {
    const { data, error, isLoading } = useSWR()
    return {

    }
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
            onSuccess(respone) {

            }
        }
    });




    return <Box>
        <Heading fontSize="24px" fontWeight="700" marginBottom={4}>Latest report</Heading>
        <Flex>
            <Card onClick={() => trigger({
                name: "TJ",
                salary: "2.5k"
            })}>
                <CardHeader>
                    <Heading fontSize="20px" fontWeight="600">Client Report</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
            </Card>
        </Flex>
    </Box>
}


