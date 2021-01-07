import React, { useState, useEffect, useMemo } from 'react';
import { Table, Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

const columns: any[] = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 150,
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
    width: 150,
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
    width: 150,
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
    width: 150,
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
    width: 150,
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];

function getList() {
  let data: any = [];
  const start = Math.floor(Math.random() * 10);
  for (let i = start; i < 100; i++) {
    data.push({
      key: i,
      name: `Edrward ${Math.ceil(Math.random())}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

export default () => {
  const [list, setList] = useState<any[]>();
  const [loading, setLoading] = useState(false);

  const { loadList } = useMemo(() => {
    const loadList = () => {
      setLoading(true);
      getList().then((result: any) => {
        setList(result);
        setLoading(false);
      });
    };

    return { loadList };
  }, []);

  useEffect(() => {
    loadList();
  }, []);

  return (
    <PageContainer
      extra={[
        <Button key="refresh" onClick={loadList}>
          刷新数据
        </Button>,
      ]}
    >
      <Table
        columns={columns}
        dataSource={list}
        scroll={{ x: 1500 }}
        pagination={{ pageSize: 100 }}
        sticky={{ offsetHeader: 48 }}
        loading={loading}
      />
    </PageContainer>
  );
};
