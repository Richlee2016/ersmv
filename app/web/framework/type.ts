import React from 'react';
export interface BaseProps {
  /**
   * react 子节点
   */
  children: React.ReactNode;
  /**
   * server 返回的 csrf token
   */
  csrf: string;
}

/** Page base props */
export interface PageProps extends BaseProps {
  /**
   * 标题
   */
  title: string;
  /**
   * 关键字
   */
  keywords: string;
}

/** index page props */
export interface IndexPageProps extends PageProps {
  msg: string;
}
/** home page props */
export interface HomePageProps extends PageProps {
  msg: string;
}
