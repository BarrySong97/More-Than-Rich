import React, { FC } from 'react';
import { Layout, Menu, Typography } from 'antd';
import styles from './index.less';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
const { Title, Paragraph } = Typography;
const { Header } = Layout;
export interface HeaderProps {
  collapsed: boolean;
  toggle: () => void;
}

const LayoutHeader: FC<HeaderProps> = (props) => {
  const { collapsed, toggle } = props;

  return (
    <Header className={styles.header} style={{ padding: 0 }}>
      {collapsed ? (
        <MenuUnfoldOutlined
          className={styles.trigger}
          onClick={() => toggle()}
        />
      ) : (
        <MenuFoldOutlined className={styles.trigger} onClick={() => toggle()} />
      )}

      <div className={styles.floatTitle}>
        <Title level={2} style={{ margin: 0 }}>
          Title
        </Title>
      </div>
    </Header>
  );
};

export default LayoutHeader;
