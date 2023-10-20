import {
    Table,
    Thead,
    Tr,
    Th,
    TableContainer
} from "@chakra-ui/react"

const DashboardTable = () => {
    return (
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Department</Th>
                        <Th>Date</Th>
                        <Th isNumeric>Status</Th>
                        <Th isNumeric>Turned in by</Th>
                        <Th isNumeric>View</Th>
                    </Tr>
                </Thead>
            </Table>
        </TableContainer>
    )
}

export default DashboardTable;