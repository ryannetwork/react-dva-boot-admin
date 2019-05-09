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
      <Layout className="full-layout page base-component-page">
        <Content>
          <Panel title="Description">
            <h2>BaseComponent</h2>
            <p>
              {' '}
              base class that can be used by all routing pages. You can extract
              public methods into such classes, such as basic CRUD methods,
              route jumps, basic popups, etc.
            </p>
            <h3>Notice</h3>
            <Button.Group>
              <Button onClick={_ => this.notice.success('I‘m Hero')}>
                success
              </Button>
              <Button onClick={_ => this.notice.error('I‘m Hero')}>
                failure
              </Button>
              <Button onClick={_ => this.notice.warning('I‘m Hero')}>
                note
              </Button>
              <Button onClick={_ => this.notice.info('I‘m Hero')}>
                Notice
              </Button>
            </Button.Group>
            <h3>Router</h3>
            <Button onClick={_ => this.history.push('/')}>
              back to the homepage
            </Button>
          </Panel>
        </Content>
      </Layout>
    );
  }
}
