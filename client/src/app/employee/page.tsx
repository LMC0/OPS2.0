"use client";
import styles from "@/app/page.module.css";
import Header from "@/components/Header";
import SideBar from "@/components/Sidebar";
import React, { useState } from 'react';
import { ConfigProvider, Divider, Table } from 'antd';
import type { TableColumnsType } from 'antd';


interface DataType {
    key: React.Key;
    name: string;
    status: number;
    department: string;
}

const columns: TableColumnsType<DataType> = [
    {
    title: 'Name',
    dataIndex: 'name',
    render: (text: string) => <a href="/company">{text}</a>,
    },
    {
    title: 'status',
    dataIndex: 'status',
    },
    {
    title: 'department',
    dataIndex: 'department',
    },
];

const data: DataType[] = [
    {
    key: '1',
    name: 'John Brown',
    status: 3,
    department: 'New York No. 1 Lake Park',
    },
    {
    key: '2',
    name: 'Jim Green',
    status: 4,
    department: 'London No. 1 Lake Park',
    },
    {
    key: '3',
    name: 'Joe Black',
    status: 2,
    department: 'Sydney No. 1 Lake Park',
    },
    {
    key: '4',
    name: 'Disabled User',
    status: 9,
    department: 'Sydney No. 1 Lake Park',
    },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
    disabled: record.status === 9, // Column configuration not to be checked
    name: record.name,
    }),
};

export default function Analytics() {

    return (
        <main className={styles.main}>
    
        <Header></Header>
    
        <div className={styles.containerStyle}>
        
        <section className={styles.content}>
            <SideBar currentPage="/employee"/>
        </section>
        
        <div className={styles.grouper}>
            <h1 className={styles.title}>従業員リスト</h1>
            <div className={styles.ulGroupStyle}>

                <ConfigProvider
                theme={{
                token: {
                    colorPrimary: 'orange',
                    colorBgContainer:"#f8eadd",
                    colorLink:"black",

                },
                components: {
                    Table: {
                    headerBg:"#f8eadd",
                    borderColor:"gray",
                    cellPaddingInline:16,
                    },
                },
                }}
                >
                <Table
                    rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                    }}
                    columns={columns}
                    dataSource={data}
                    style={{ width: '80%', margin: 'auto' }} // 幅を80%に設定し、中央揃えにする
                />

                </ConfigProvider>
                </div>
            </div>
            
            
        </div>
    </main>
    );
}