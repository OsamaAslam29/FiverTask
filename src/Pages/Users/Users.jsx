import React, { useState } from 'react'

// ANT -D :
import { Table } from 'antd';

// Helpers :
import CSVReader from "react-csv-reader";

// CSS :
import './Users.scss'




const Users = () => {

  const [userData, setUserData] = useState([]);

  const columns = [
    {
      title: 'Id',
      dataIndex: '1',
      key: '1',
    },
    {
      title: 'Name',
      dataIndex: 'muhammed_macintyre',
      key: 'muhammed_macintyre',
    },
    {
      title: 'Organization',
      dataIndex: 'storage___organization',
      key: 'storage___organization',
    },
    {
      title: 'Description',
      dataIndex: 'eldon_base_for_stackable_storage_shelf__platinum',
      key: 'eldon_base_for_stackable_storage_shelf__platinum',
    },
    {
      title: 'City',
      dataIndex: 'nunavut',
      key: 'nunavut',
    },
    {
      title: 'Quantity',
      dataIndex: '3',
      key: '3',
    },
  ];
  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
  };
  const handleFileData = (data) => {
    setUserData(data)
  };
  return (
    <>
      <div className='dashboardUserContainer'>
        <div className='header'>
          <h3>Users</h3>
          <CSVReader
            cssClass="react-csv-input"
            class="custom-file-input"
            onFileLoaded={handleFileData}
            parserOptions={papaparseOptions}
          />
        </div>
        {
          userData &&
          userData.length > 0 &&
          <div>
            <Table
              columns={columns}
              dataSource={userData.map((user, index) => ({ ...user, key: index }))}
            />
          </div>
        }
      </div>
    </>
  )
}

export default Users
