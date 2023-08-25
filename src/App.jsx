import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

// ANT-D :
import { Layout, Menu } from 'antd';
import UserOutlined from '@ant-design/icons/UserOutlined';

// Components :
import Users from './Pages/Users/Users';
import Navbar from './Components/Navbar/Navbar';

// CSS :
import './App.scss'




const { Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const currentRoutes = [
  getItem('Users', '/', <UserOutlined />),
];

function App() {

  let Navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const handleMenuClick = (e) => {
     if (e.key === "/") {
      Navigate('/')
    }
  }

  return (
    <>
      <Navbar />
      <div className='sidebar-container'>
        <Sider
          className='sider'
          width="250px"
          collapsible collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Menu
            mode="inline"
            items={currentRoutes}
            onClick={handleMenuClick}
            defaultSelectedKeys={['/']}
          />
        </Sider>
        <div className='right-pages'>
          <Routes>
            <Route path='/' element={<Users />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
