import React, { useState } from 'react';
import {
    AppstoreOutlined,
    CalendarOutlined,
    LinkOutlined,
    MailOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { Divider, Menu, Switch } from 'antd';
import { Link } from 'react-router-dom'


function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('MailBox', '1', <MailOutlined />),
    getItem('Calendar', '2', <CalendarOutlined />),
    getItem('Appstore', 'sub1', <AppstoreOutlined />, [
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
    getItem('Submenu', 'sub1-2', null, [getItem('Option 5', '5'), getItem('Option 6', '6')]),
    ]),
    getItem('Settings', 'sub2', <SettingOutlined />, [
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    ]),
    getItem(
    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Ant Design
    </a>,
    'link',
    <LinkOutlined />,
    ),
];

const Home = () => {
    const [mode, setMode] = useState('inline');
    const [theme, setTheme] = useState('light');
    const changeMode = (value) => {
    setMode(value ? 'vertical' : 'inline');
    };
    const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
    };
    return (
        <>
            <div>Welcome to the Home Page</div>
            <br />
            <Switch onChange={changeMode} /> Change Mode
            <Divider type="vertical" />
            <Switch onChange={changeTheme} /> Change Style
            <br />
            <br />
            <Menu
            style={{
                width: 256,
            }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode={mode}
            theme={theme}
            items={items}
            />
            <br />
            <Link to='/'>Landing Page</Link>
            <br />
            <Link to='/signUp'>SignUp</Link>
            <br />
            <Link to='/signUpValidation'>SignUp Validation</Link>
            <br />
            <Link to='/login'>Login</Link>
            <br />
            <Link to='/loginValidation'>Login Validation</Link>
            <br />
            <Link to='/formSubmission'>Form</Link>
            <br />
            <Link to='/header'>Header</Link>
            <br />
            <Link to='/home' >Home</Link>
            <br />
            <Link to='/contact'>Contacts</Link>
            <br />
            <Link to='/about'>About</Link>
            <br />
            <Link to='/footer'>Footer</Link>
        </>
    )
}

export default Home