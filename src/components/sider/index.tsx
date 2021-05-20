import React, { FC } from 'react';
import styles from './index.less';
import { Layout, Menu, Typography } from 'antd';
import {
  BarChartOutlined,
  DashboardOutlined,
  RiseOutlined,
  SettingOutlined,
  SwitcherOutlined,
  TagOutlined,
  WalletOutlined,
} from '@ant-design/icons';
import { Link } from 'umi';
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
      <Menu mode="inline" defaultSelectedKeys={['1']}>
        {!collapsed ? (
          <div className={styles.divider}>
            <Text type="secondary">个人</Text>
          </div>
        ) : null}

        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <Link to="/user-center">个人中心</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<BarChartOutlined />}>
          <Link to="/charts">图表</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<WalletOutlined />}>
          <Link to="/wallet">钱包</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<RiseOutlined />}>
          <Link to="/invesment">投资</Link>
        </Menu.Item>
        {!collapsed ? (
          <div className={styles.divider}>
            <Text type="secondary">系统</Text>
          </div>
        ) : null}
        <Menu.Item key="7" icon={<TagOutlined />}>
          <Link to="/tag-manage">Tag管理</Link>
        </Menu.Item>
        <Menu.Item key="8" icon={<SwitcherOutlined />}>
          <Link to="/category-manage">分类管理</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<SettingOutlined />}>
          <Link to="/setting">设置</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default LayoutSider;
