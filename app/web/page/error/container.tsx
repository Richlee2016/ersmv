import React from 'react';
import { ErrorPageProps } from '../../framework/type';
import ErrorNotFound from './components/404';
import './zstyle.less';
export default function Container(props: ErrorPageProps) {
  let children: React.ReactNode | null = '服务器出现问题请重试';
  if (props.type === '404') {
    children = <ErrorNotFound />;
  }
  return <div className="container">{children}</div>;
}
