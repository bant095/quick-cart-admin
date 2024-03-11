import React from 'react';
import { Table } from 'antd';
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

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

const ProductList = () => {
  return (
    <div>
      <h3 className='mb-4 title'>Product Category</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default ProductList;
