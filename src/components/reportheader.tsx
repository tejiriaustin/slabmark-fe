import {Flex, Container, Select, Button} from "@chakra-ui/react";
import {useState} from "react";
import DatePicker from "react-datepicker";

const ButtonOneOptions = [
    {
        options
    }
]
const ReportHeader = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <Flex
            justifyContent={'space-between'}
            bg={'white'}
            p={4}
            gap={5}
            borderRadius={10}
        >
            <Flex
                flexBasis={'60%'}
                gap={5}
            >
                <Select>
                    <option>Quality Control</option>
                    <option>Fractionation</option>
                    <option>Refinery</option>
                    <option>Store</option>
                </Select>
                <Select>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Night</option>
                </Select>
                <Select>
                    <option>New File</option>
                    <option>New Window</option>
                    <option>Open...</option>
                    <option>Save File</option>
                </Select>
            </Flex>
            <Flex>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                />
                <Button
                    color={'white'}
                    bg={'blue.500'}
                    _hover={{
                        bg: 'blue.600'
                    }}
                >
                    See Older Reports
                </Button>
            </Flex>
        </Flex>
    )
}

export default ReportHeader;