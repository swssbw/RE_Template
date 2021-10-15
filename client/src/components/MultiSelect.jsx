import React from 'react'
import {Select, DatePicker, ConfigProvider, Table } from 'antd';
import XLSX from 'xlsx';
import koKR from 'antd/lib/locale/ko_KR';

const { Option } = Select;
const { RangePicker } = DatePicker;

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

const exportDataToXlsx = ({data, filename}) => {
  const worksheet = XLSX.utils.json_to_sheet(data); // excel sheet하단의 worksheet에 해당
  const new_workbook = XLSX.utils.book_new(); // excel 파일에 해당
  
  XLSX.utils.book_append_sheet(new_workbook, worksheet, 'SheetJS'); // excelsheet를 excel파일에 넣음 
  XLSX.writeFile(new_workbook, filename + '.xlsx');
}


const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const MultiSelect = () => {

  const columns = [
    { 
      title : 'Name',
      dataIndex: 'name',
      key: 'name',  
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }
  ]
  return (
    <>
      <Select
        mode="multiple"
        allowClear
        style={{ width: '100%' }}
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
      >
        {children}
      </Select>
      <RangePicker picker="month" />
      <Table columns={columns} dataSource={data} />
      <button onClick={()=>{}}></button>
    </>
  )
}

export default MultiSelect
