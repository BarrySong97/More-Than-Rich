import React, { FC } from 'react';
import styles from './index.less';
import { Divider, Layout, Menu, Typography } from 'antd';
import {
  AppstoreFilled,
  BankFilled,
  BarChartOutlined,
  DashboardOutlined,
  LineChartOutlined,
  PieChartFilled,
  RiseOutlined,
  SettingFilled,
  SettingOutlined,
  SwitcherOutlined,
  TagOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  WalletFilled,
  WalletOutlined,
} from '@ant-design/icons';
const { Text } = Typography;
const { Sider } = Layout;
interface SiderProps {
  collapsed: boolean;
}

const LayoutSider: FC<SiderProps> = (props) => {
  const { collapsed } = props;
  return (
    <Sider className={styles.sideer} theme="light" collapsed={collapsed}>
      <div className={styles.logo}>more</div>
      <Menu mode="inline" defaultSelectedKeys={['4']}>
        {!collapsed ? (
          <div className={styles.divider}>
            <Text type="secondary">个人</Text>
          </div>
        ) : null}

        <Menu.Item key="1" icon={<DashboardOutlined />}>
          个人中心
        </Menu.Item>
        <Menu.Item key="2" icon={<BarChartOutlined />}>
          图表
        </Menu.Item>
        <Menu.Item key="3" icon={<WalletOutlined />}>
          钱包
        </Menu.Item>
        <Menu.Item key="5" icon={<RiseOutlined />}>
          投资
        </Menu.Item>
        {!collapsed ? (
          <div className={styles.divider}>
            <Text type="secondary">系统</Text>
          </div>
        ) : null}
        <Menu.Item key="7" icon={<TagOutlined />}>
          Tag管理
        </Menu.Item>
        <Menu.Item key="8" icon={<SwitcherOutlined />}>
          分类管理
        </Menu.Item>
        <Menu.Item key="6" icon={<SettingOutlined />}>
          设置
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default LayoutSider;
