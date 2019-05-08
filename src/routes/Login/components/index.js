import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Form, Layout, Button, Icon, Input, Checkbox, Spin } from 'antd';
import logoImg from 'assets/images/logo1.png';
import './index.less';
const { Content } = Layout;
const FormItem = Form.Item;

@connect(({ login, loading }) => ({
	login,
	loading: loading.models.login
}))
class Login extends Component {
	handleSubmit = (e) => {
		const { form, dispatch } = this.props;
		e.preventDefault();
		form.validateFields((err, values) => {
			if (!err) {
				dispatch({
					type: 'login/login',
					payload: values
				});
			}
		});
	};

	render() {
		const { loading, form } = this.props;
		const { getFieldDecorator } = form;

		return (
			<Layout className="full-layout login-page">
				<Content>
					<Spin tip="login..." spinning={!!loading}>
						<Form onSubmit={this.handleSubmit} className="login-form">
							<div className="user-img">
								<img src={logoImg} alt="logo" />
								<b>LANIF</b>
								<span>Admin</span>
							</div>
							<FormItem>
								{getFieldDecorator('userName', {
									initialValue: 'admin',
									rules: [ { required: true, message: 'Please enter your username, example admin' } ]
								})(<Input size="large" prefix={<Icon type="user" />} placeholder="username" />)}
							</FormItem>
							<FormItem>
								{getFieldDecorator('password', {
									initialValue: 'admin',
									rules: [ { required: true, message: 'Please enter your password, example admin' } ]
								})(
									<Input
										size="large"
										prefix={<Icon type="lock" />}
										type="password"
										placeholder="password"
									/>
								)}
							</FormItem>
							<FormItem>
								{getFieldDecorator('remember', {
									valuePropName: 'checked',
									initialValue: true
								})(<Checkbox>remember me</Checkbox>)}
								<Link className="login-form-forgot" to="#">
									forgot password
								</Link>
								<Button size="large" type="primary" htmlType="submit" className="login-form-button">
									Login
								</Button>
								<div className="new-user">
									New user？<Link to="/sign/register">Register now</Link>
								</div>
							</FormItem>
						</Form>
					</Spin>
				</Content>
			</Layout>
		);
	}
}

export default Form.create()(Login);
