import React, { Component } from 'react';
import { Button } from 'antd';
import './header.less';
export default class Header extends Component {
  componentDidMount() {
    console.log('----Header componentDidMount-----');
  }

  render() {
    return (
      <header className="header">
        <div className="container">
          <h1>
            <a href="/" className="router-link-active">
              TypeScript
            </a>
          </h1>
        </div>
      </header>
    );
  }
}
