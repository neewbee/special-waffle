import React from 'react'
import { connect } from 'dva'
import { Link, Switch, Route } from 'dva/router'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'

const { Content } = Layout

const Sub1 = () =>
  <Layout style={{ padding: '0 24px 24px' }}>
    <Breadcrumb style={{ margin: '12px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
    <Content
      style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}
    >
      Content
    </Content>
  </Layout>

export default Sub1
