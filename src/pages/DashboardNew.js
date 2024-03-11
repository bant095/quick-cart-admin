import React from 'react';
import { GoArrowDownRight } from 'react-icons/go';
import { Column } from '@ant-design/plots';
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

const DashboardNew = () => {
  const data = [
    {
      type: 'Jan',
      sales: 38,
    },
    {
      type: 'Feb',
      sales: 52,
    },
    {
      type: 'March',
      sales: 61,
    },
    {
      type: 'April',
      sales: 145,
    },
    {
      type: 'May',
      sales: 48,
    },
    {
      type: 'June',
      sales: 38,
    },
    {
      type: 'July',
      sales: 38,
    },
    {
      type: 'Aug',
      sales: 38,
    },
    {
      type: 'Sept',
      sales: 38,
    },
    {
      type: 'Oct',
      sales: 38,
    },
    {
      type: 'Nov',
      sales: 38,
    },
    {
      type: 'Dec',
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color: ({ type }) => {
      return '#ffd333';
    },

    label: {
      // position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Months',
      },
      sales: {
        alias: 'Income',
      },
    },
  };
  return (
    <div>
      <h3 className='mb-4'>Dashboard</h3>
      <div className='d-flex justify-content-between align-items-center gap-3'>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 p-3 bg-white rounded-3'>
          <div>
            <p className=''>Total</p>
            <h3>$1100</h3>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='green'>
              <GoArrowDownRight /> 32%
            </h6>
            <p className='mb-0'>Compared To April 2023</p>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 p-3 bg-white rounded-3'>
          <div>
            <p className=''>Total</p>
            <h3>$110.39</h3>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='red'>
              <GoArrowDownRight /> 32%
            </h6>
            <p className='mb-0'>Compared To April 2023</p>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 p-3 bg-white rounded-3'>
          <div>
            <p className=''>Total</p>
            <h3>100</h3>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='green'>
              <GoArrowDownRight /> 32%
            </h6>
            <p className='mb-0'>Compared To April 2023</p>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <h3 className='mb-4'> Income Statics</h3>
        <div>
          <Column {...config} />
        </div>
      </div>
      <div className='mt-4'>
        <h3 className='mb-4'>Recent Orders</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
      <div className='my-4'>
        <h3 className='mb-4'>Recent Reviews</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  );
};

export default DashboardNew;
