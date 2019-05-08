import React from 'react';
import { connect } from 'dva';
import { Layout, Button, Icon } from 'antd';
import BaseComponent from 'components/BaseComponent';
import Panel from 'components/Panel';
import Toolbar from 'components/Toolbar';
import SearchBar from 'components/SearchBar';
import createColumns from './columns';
import './index.less';
const { Content } = Layout;

/**
 * Toolbar
 */
@connect()
export default class extends BaseComponent {
	render() {
		const columns = createColumns(this);

		const searchBarProps = {
			columns,
			onSearch: (values) => {
				console.log(values);
			}
		};

		return (
			<Layout className="full-layout page toolbar-page">
				        <Content>
					          <Panel title="Basic Usage">
						            <Toolbar
							className="toolbar-demo"
							appendLeft={
								<Button.Group>
									                  <Button type="primary">
										<Icon type="plus" />Add
									</Button>
									                  <Button>
										<Icon type="delete" />delete
									</Button>
								</Button.Group>
							}
						/>
					</Panel>
					          <Panel title="Combination SearchBar">
						            <Toolbar
							className="toolbar-demo"
							appendLeft={
								<Button.Group>
									                  <Button type="primary">
										<Icon type="plus" />Add
									</Button>
									                  <Button>
										<Icon type="delete" />delete
									</Button>
								</Button.Group>
							}
						>
							              <SearchBar {...searchBarProps} />
						</Toolbar>
					</Panel>
					          <Panel title="Combine SearchBar and drop down to show more">
						            <Toolbar
							className="toolbar-demo"
							appendLeft={
								<Button.Group>
									                  <Button type="primary">
										<Icon type="plus" />Add
									</Button>
									                  <Button>
										<Icon type="delete" />delete
									</Button>
								</Button.Group>
							}
							pullDown={<SearchBar type="grid" {...searchBarProps} />}
						>
							              <SearchBar {...searchBarProps} group="1" />
						</Toolbar>
					</Panel>
				</Content>
			</Layout>
		);
	}
}
