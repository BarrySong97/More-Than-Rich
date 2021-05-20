import React, { FC } from 'react';
import styles from './index.less';
import { Layout, Menu } from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
const { Sider } = Layout;
interface SiderProps {
  collapsed: boolean;
}

const LayoutSider: FC<SiderProps> = (props) => {
  const { collapsed } = props;
  return (
    <Sider className={styles.sideer} theme="light" collapsed={collapsed}>
      <Menu mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default LayoutSider;
