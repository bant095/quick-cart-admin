import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'S/No',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'Staus',
    dataIndex: 'staus',
  },
];

// data
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Alfred Ayodeji ${i}`,
    product: 32,
    staus: `London, Park Lane no. ${i}`,
  });
}

const Orders = () => {
  return (
    <div>
      <h3 className='mb-4'>Orders</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Orders;
