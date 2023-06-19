import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, CopyOutlined, LogoutOutlined, HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/defaultLayout.css'

const { Header, Sider, Content } = Layout;

const DefaultLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);

    const { token: { colorBgContainer } } = theme.useToken();

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>

                <div className="demo-logo-vertical">
                    <h1 className='text-center text-light font-weight-bold mt-4'>POS</h1>
                </div>

                <Menu theme="dark" mode="inline" defaultSelectedKeys={[window.location.pathname]} >
                    <Menu.Item key='/' icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>

                    <Menu.Item key='/bill' icon={<CopyOutlined />}>
                        <Link to="/bill">Bills</Link>
                    </Menu.Item>

                    <Menu.Item key='/items' icon={<ShoppingCartOutlined />}>
                        <Link to="/items">Items</Link>
                    </Menu.Item>

                    <Menu.Item key='customer' icon={<UserOutlined />}>
                        <Link to="/customer">Customers</Link>
                    </Menu.Item>

                    <Menu.Item key='logout' icon={<LogoutOutlined />}>
                        Logout
                    </Menu.Item>
                </Menu>

            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '20px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        height: '85vh'
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};
export default DefaultLayout;