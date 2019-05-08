import React, { Component, Fragment } from 'react';
import { Result } from 'components/Pages';
import { Layout, Button } from 'antd';
const { Content } = Layout;

export default class extends Component {
	render() {
		const actions = (
			<Fragment>
				<Button type="primary">Back to list</Button>
				<Button>View project</Button>
				<Button>Print</Button>
			</Fragment>
		);

		const footer = (
			<Fragment>
				<p>
					<a>Need More Help?</a>
				</p>
				<p>
					Misc question two? <a>Response Link</a>
				</p>
			</Fragment>
		);

		const extra = <div>Yoursite.com</div>;

		return (
			<Layout className="full-layout result-page">
				<Content>
					<Result
						title="Submitted successfully"
						type="success"
						actions={actions}
						footer={footer}
						extra={extra}
						description={"Need support? We're here to help!"}
					>
						The submission result page is used to feed back the results of a series of operational tasks, if
						it is a simple operation, use              Message Global prompt feedback is fine. This text
						area can show simple supplementary instructions if there is a similar display              For
						the requirements of "documents", the following gray area can present more complex content.
					</Result>
				</Content>
			</Layout>
		);
	}
}
