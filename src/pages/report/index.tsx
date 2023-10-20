import React from "react";
import DashboardLayout from "@/components/layout/dashboard-layout";
import ReportSummary from "@/components/report-summary";
import ReportHeader from "@/components/reportheader";
import {Text} from "@chakra-ui/react";

const Report = () => {
    return (
        <DashboardLayout>
            <Text fontSize={'24px'} fontWeight={'bold'}>Report</Text>
            <ReportHeader />
        </DashboardLayout>
    )
}

export default Report;