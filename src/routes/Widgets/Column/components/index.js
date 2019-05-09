import React from 'react';
import { connect } from 'dva';
import { Layout, Button } from 'antd';
import BaseComponent from 'components/BaseComponent';
import Panel from 'components/Panel';
const { Content } = Layout;

@connect()
export default class extends BaseComponent {
  render() {
    return (
      <Layout className="full-layout page column-page">
        <Content>
          <Panel title="说明">
            <h3>Column 语法</h3>
            <p>
              By configuring Column, you can generate three large blocks of
              elements in our page, search bar (advanced search) component,
              newly modified form component, and data table component with
              paging. [Configuration instructions]
              <a
                style={{ textDecoration: 'underline' }}
                href="https://github.com/LANIF-UI/dva-boot-admin/blob/master/docs/columns.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                [配置说明]
              </a>
            </p>
            <Button
              icon="bulb"
              type="primary"
              onClick={_ => this.history.push('/crud')}
            >
              CRUD页面
            </Button>
          </Panel>
        </Content>
      </Layout>
    );
  }
}
