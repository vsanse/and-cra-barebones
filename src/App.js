import React from 'react';
import { Layout } from 'antd';
import HeaderUI from './app/components/HeaderUI';
import Main from './app/components/Main';
import FooterUI from './app/components/FooterUI';

const { Header, Content, Footer } = Layout;

export default function App () {
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
