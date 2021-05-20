import React, { FC } from 'react';
import styles from './index.less';
import PageWrapper from '@/components/page-wrapper';
import DailyBarChart from './components/daily-bar-chart';
interface UserCenterProps {}

const UserCenter: FC<UserCenterProps> = (props) => {
  return (
    <PageWrapper className={styles.userCenter}>
      <DailyBarChart />
    </PageWrapper>
  );
};

export default UserCenter;
