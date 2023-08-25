import React from 'react'

// ANT-D :
import { Popover } from 'antd';
import {
    SettingOutlined,
    BellOutlined,
    SearchOutlined
} from '@ant-design/icons';

// ICONS :
import logo from '../../assets/logo.svg'
import profile from '../../assets/profile.jpg'
import greater from '../../assets/greater.svg'

// CSS :
import './Navbar.scss'




const Navbar = () => {
    const text =
        <div className='dropdown-title'>
            <div className='name'>Osama Aslam</div>
        </div>
    const content = (
        <>
            <div className='dropdown-bio'>
                <div className="border"></div>
                <div className='flexLine cursor'>
                    <SettingOutlined className='icon' />
                    Logout
                </div>
            </div>
        </>
    );

    return (
        <>
            <div className="navContainer">
                <div className="shadow"></div>
                <div className='navbar'>
                    <div className="flex-nav">
                        <div className="left-nav">
                            <div className="logo">
                                <img src={logo} alt="" />
                                <strong className='heading'>My Dashboard</strong>
                            </div>
                        </div>
                        <div className="right-nav">
                            <div className="sub-menu">
                                <p>Application</p>
                                <div className="img">
                                    <img src={greater} alt="" />
                                </div>
                                <p>Dashboard</p>
                            </div>
                            <div className="bio">
                                <div className='inputfield'>
                                    <input type="text" placeholder='Search...' />
                                    <SearchOutlined className="icon" />
                                </div>
                                <div className='notification'>
                                    <BellOutlined className="icon" />
                                </div>

                                <div className="nav-popover">
                                    <Popover
                                        placement="bottomRight" title={text} content={content} trigger="click">
                                        <div className='img'>
                                            <img src={profile} alt="ERROR" />
                                        </div>
                                    </Popover>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
