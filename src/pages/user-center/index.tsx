import React, { FC } from 'react';
import styles from './index.less';
import PageWrapper from '@/components/page-wrapper';
import DailyBarChart from './components/daily-bar-chart';
import Info from './components/info';
import { Col, Row } from 'antd';

interface UserCenterProps {}

const UserCenter: FC<UserCenterProps> = (props) => {
  return (
    <PageWrapper className={styles.userCenter}>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Info />
        </Col>
        <Col span={12}>
          <DailyBarChart className={styles.barchar} />
        </Col>
      </Row>
    </PageWrapper>
  );
};

export default UserCenter;
