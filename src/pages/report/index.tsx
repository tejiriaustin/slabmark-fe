
import React from "react";
import DashboardLayout from "@/components/layout/dashboard-layout";
import ReportSummary from "@/components/report-summary";

const summaries:  {name: string, details: Record<string, number | string>}[] = []

const Report = () => {
    return (
        <DashboardLayout>
            <ReportSummary summaries={summaries} />
        </DashboardLayout>
    )
}

export default Report;