import React, { FC } from 'react';

interface Props {}
const Layout: FC<Props> = (props) => {
  return <div>{props.children}</div>;
};

export default Layout;
