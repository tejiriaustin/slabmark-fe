import React from "react";
import DashboardLayout from "@/components/layout/dashboard-layout";
import ReportSummary from "@/components/report-summary";
import ActivityTable from "@/components/activitytable";

const summaries:  {name: string, details: Record<string, number | string>}[] = []

const Dashboard = () => {
    return (
        <DashboardLayout>
            <ReportSummary summaries={summaries} />
            <ActivityTable />
        </DashboardLayout>
    )
}

export default Dashboard;