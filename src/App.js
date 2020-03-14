import React from 'react';
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Layout } from 'antd';

import HeaderUI from './app/components/HeaderUI';
import Main from './app/components/Main';
import FooterUI from './app/components/FooterUI';

const { Header, Content, Footer } = Layout;

function App () {
  const common = useSelector(state => state.common);
  const dispatch = useDispatch();

  return (
    <Layout className="app">
    <Header className="header">
      <HeaderUI/>
    </Header>
    <Content className="app-body">
      <Main/>
    </Content>
    <Footer className="app-footer" >
      <FooterUI/>
    </Footer>
  </Layout>
  )
}

export default withRouter(App);
