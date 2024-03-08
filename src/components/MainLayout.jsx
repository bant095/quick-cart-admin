import React, { useState } from 'react';
import { RxDashboard } from 'react-icons/rx';
import { FaShoppingCart, FaUser, FaBlogger } from 'react-icons/fa';
import { SiBrandfolder, SiQuicktime } from 'react-icons/si';
import { BiCategoryAlt } from 'react-icons/bi';
import { IoMdColorFill } from 'react-icons/io';
import { FaClipboardList, FaClipboardQuestion } from 'react-icons/fa6';
import { ImBlog } from 'react-icons/im';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo'>
          <h2 className='text-white fs-5 py-3 mb-0 text-center'>
            <span>
              <SiQuicktime className='sm-logo text-center' />
            </span>
            <span className='lg-logo text-center'>QuickCart</span>
          </h2>
        </div>
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['']}
          onClick={({ key }) => {
            if (key === 'signout') {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: '',
              icon: <RxDashboard className='fs-4' />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <FaUser className='fs-4' />,
              label: 'Customers',
            },
            {
              key: 'catelog',
              icon: <FaShoppingCart className='fs-4' />,
              label: 'Categlog',
              children: [
                {
                  key: 'product',
                  icon: <FaShoppingCart className='fs-4' />,
                  label: 'Add Products',
                },
                {
                  key: 'product-list',
                  icon: <FaShoppingCart className='fs-4' />,
                  label: 'Product List',
                },
                {
                  key: 'category',
                  icon: <SiBrandfolder className='fs-4' />,
                  label: 'Brand',
                },
                {
                  key: 'list-category',
                  icon: <SiBrandfolder className='fs-4' />,
                  label: 'Brand List',
                },
                {
                  key: 'category',
                  icon: <BiCategoryAlt className='fs-4' />,
                  label: 'Category',
                },
                {
                  key: 'list-category',
                  icon: <BiCategoryAlt className='fs-4' />,
                  label: 'Category List',
                },
                {
                  key: 'color',
                  icon: <IoMdColorFill className='fs-4' />,
                  label: 'Color',
                },
                {
                  key: 'list-Color',
                  icon: <IoMdColorFill className='fs-4' />,
                  label: 'Color List',
                },
              ],
            },
            {
              key: 'orders',
              icon: <FaClipboardList className='fs-4' />,
              label: 'Orders',
            },
            {
              key: 'blog',
              icon: <FaBlogger className='fs-4' />,
              label: 'Blogs',
              children: [
                {
                  key: 'blog',
                  icon: <ImBlog className='fs-4' />,
                  label: 'Add Blog',
                },
                {
                  key: 'blog-list',
                  icon: <FaBlogger className='fs-4' />,
                  label: 'Blog List',
                },
                {
                  key: 'blog-category',
                  icon: <ImBlog className='fs-4' />,
                  label: 'Add Blog Category',
                },
                {
                  key: 'blog-category-list',
                  icon: <FaBlogger className='fs-4' />,
                  label: 'Blog Category List',
                },
              ],
            },
            {
              key: 'enquires',
              icon: <FaClipboardQuestion className='fs-4' />,
              label: 'Enquires',
            },
          ]}
        />
      </Sider>
      <Layout className='site-layout'>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
