import React from 'react';
import { IndexPageProps } from '../../framework/type';
import './zstyle.less';
export default function Container(props: IndexPageProps) {
  console.log(props);
  return (
    <div className="container">
      <ul className="grim-box">
        <li>321</li>
      </ul>
    </div>
  );
}
