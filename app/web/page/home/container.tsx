import React from 'react';
import { HomeProps } from '../../framework/type';
import './home.less';
export default function Container(props: HomeProps) {
  return (
    <div>
      <div>
        <p>321</p>
        <ul className="box">
          <li>1</li>
          <li>321</li>
          <li>55</li>
        </ul>
        <div className="nice" />
        <img src="/public/images/loading.gif" alt="" />
      </div>
    </div>
  );
}
