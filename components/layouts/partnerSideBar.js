import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
	getItem('Option 1', '1', <PieChartOutlined />),
	getItem('Option 2', '2', <DesktopOutlined />),
	getItem('User', 'sub1', <UserOutlined />, [
	  getItem('Tom', '3'),
	  getItem('Bill', '4'),
	  getItem('Alex', '5'),
	]),
	getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
	getItem('Files', '9', <FileOutlined />),
];
const PartnerSideBar = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
	<Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
	  <div className="demo-logo-vertical" />
	    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
    </Sider>
  );
};
export default PartnerSideBar ;