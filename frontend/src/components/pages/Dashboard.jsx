import React, { useEffect, useState } from "react";
import { Layout } from "antd";


const Dashboard = () => {

    const { Content } = Layout;

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Content className="site-layout-background">

            <div className="site-card-border-less-wrapper">
               
               <h1 className="px-2">
                    Dashboard
                </h1>
               
                {/* <Row>
                    <Col span={8} className="min-w-160">
                        <Card
                            title="Customers Count (Active/Total)"
                            bordered={true}
                            className={"m-2"}
                        >
                            <h3>
                                {dashboardData.activeCustomer}
                                /
                                {dashboardData.allCustomer}

                            </h3>
                        </Card>
                    </Col>
                    <Col span={8} className="min-w-160">
                        <Card
                            title="Service Provider Count (Active/Total)"
                            bordered={true}
                            className={"m-2"}
                        >
                            <h3>
                                {dashboardData.activeServiceProvider}
                                /
                                {dashboardData.allServiceProvider}

                            </h3>
                        </Card>
                    </Col>
                    <Col span={8} className="min-w-160">
                        <Card
                            title="Current Month Earning / Total (USD) "
                            bordered={true}
                            className={"m-2"}
                        >
                            <h3>
                                {dashboardData.currentMonthErning}
                                /
                                {dashboardData.currentMonthErningTotal}

                            </h3>

                        </Card>
                    </Col>

                </Row>
                <div>

                    <div className="d-flex">
                        <h1 className="p-2 px-2">
                            Service Request Overall Status
                            <span className="pl-1 text-secondary">
                                {` (as of now)`}
                            </span>
                        </h1>
                    </div>
                    <Row>
                        <Col span={3} md={6} sm={8} xs={20} className="">
                            <Card
                                title="Initiated"
                                bordered={true}
                                className={"m-2"}
                            >
                                <h1>
                                    {dashboardData.serviceRequestInitiated}
                                </h1>
                            </Card>
                        </Col>
                        <Col span={3} md={6} sm={8} xs={20} className="">
                            <Card
                                title="Ongoing"
                                bordered={true}
                                className={"m-2"}
                            >
                                <h1>
                                    {dashboardData.serviceRequestOngoing}
                                </h1>
                            </Card>
                        </Col>
                        <Col span={3} md={6} sm={8} xs={20} className="">
                            <Card
                                title="Completed"
                                bordered={true}
                                className={"m-2"}
                            >
                                <h1>
                                    {dashboardData.serviceRequestCompleted}
                                </h1>
                            </Card>
                        </Col>
                        <Col span={3} md={6} sm={8} xs={20} className="">
                            <Card
                                title="Disputed"
                                bordered={true}
                                className={"m-2"}
                            >
                                <h1>
                                    {dashboardData.serviceRequestDisputed}
                                </h1>
                            </Card>
                        </Col>
                        <Col span={3} md={6} sm={8} xs={20} className="">
                            <Card
                                title="Closed"
                                bordered={true}
                                className={"m-2"}
                            >
                                <h1>
                                    {dashboardData.serviceRequestClosed}
                                </h1>
                            </Card>
                        </Col>
                        <Col span={3} md={6} sm={8} xs={20} className="">
                            <Card
                                title="Expired"
                                bordered={true}
                                className={"m-2"}
                            >
                                <h1>
                                    {dashboardData.serviceRequestExpired}
                                </h1>
                            </Card>
                        </Col>
                        <Col span={3} md={6} sm={8} xs={24} className="">
                            <Card
                                title="Cancelled"
                                bordered={true}
                                className={"m-2"}
                            >
                                <h1>
                                    {dashboardData.serviceRequestCancelled}
                                </h1>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <Card className="mx-2">
                    <div className="table-responsive">
                        <h1 className="p-2">
                            Monthly Activity (Number of SRs processed within a month)
                        </h1>
                        <Table dataSource={monthlyActivity} columns={columns} rowKey={"inedx"} />
                    </div>
                </Card> */}
            </div>
        </Content >
    )
};

export default Dashboard;
