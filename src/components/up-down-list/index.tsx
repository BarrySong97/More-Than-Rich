import { ArrowDownOutlined } from '@ant-design/icons';
import { List, Statistic } from 'antd';
import React, { FC } from 'react';
import styles from './index.less';
export interface UpDownListProps {}
const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `诺安混合成长`,
  });
}
const UpDownList: FC<UpDownListProps> = (props) => {
  return (
    <div className={styles.upDownList}>
      <h3>投资</h3>
      <List
        dataSource={listData}
        renderItem={(item) => (
          <div key={item.id}>
            <a href="https://ant.design">{item.title}</a>

            <Statistic
              value={9.3}
              precision={1}
              valueStyle={{ color: '#cf1322', fontSize: 14 }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </div>
        )}
      />
    </div>
  );
};

export default UpDownList;
