import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Form, Col } from 'antd';
/**
 * 密码控件
 */
export default class PasswordForm extends Component {
  static propTypes = {
    form: PropTypes.object,
    name: PropTypes.string,
    formFieldOptions: PropTypes.object,
    rules: PropTypes.array,
    placeholder: PropTypes.string,
    ComponentCol: PropTypes.node,
    ComponentItem: PropTypes.node,
    formItemLayout: PropTypes.object,
    col: PropTypes.object,
    repeat: PropTypes.bool,
    type: PropTypes.string
  };

  state = {
    confirmDirty: false
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue(this.props.name)) {
      callback('The two passwords are inconsistent!');
    } else {
      callback();
    }
  };

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields([this.props.name + '_repeat'], { force: true });
    }
    callback();
  };

  render() {
    const {
      form,
      name,
      formFieldOptions = {},
      rules,
      placeholder,
      type,
      formItemLayout,
      col,
      repeat,
      getPopupContainer,
      ...otherProps
    } = this.props;

    const { getFieldDecorator } = form;

    // 如果有rules
    formFieldOptions.rules = [
      {
        required: true,
        message: `please enter ${otherProps.title}`
      },
      {
        validator: this.checkConfirm
      }
    ];

    // 如果有rules
    if (rules && rules.length) {
      formFieldOptions.rules = formFieldOptions.rules.concat(rules);
    }

    let ComponentCol = type === 'inline' ? 'div' : Col;

    return (
      <div className="col-item col-item-password-wrap">
        <ComponentCol className="col-item col-item-password" {...col}>
          <Form.Item
            {...formItemLayout}
            label={otherProps.title}
            hasFeedback
            className="col-item-content"
          >
            {getFieldDecorator(name, formFieldOptions)(
              <Input
                type="password"
                placeholder={placeholder || `please enter ${otherProps.title}`}
              />
            )}
          </Form.Item>
        </ComponentCol>
        {repeat ? (
          <ComponentCol className="col-item col-item-repeat-password" {...col}>
            <Form.Item
              {...formItemLayout}
              label={'confirm' + otherProps.title}
              hasFeedback
              className="col-item-content"
            >
              {getFieldDecorator(name + '_repeat', {
                rules: [
                  {
                    required: true,
                    message: `Please enter again${otherProps.title}`
                  },
                  {
                    validator: this.checkPassword
                  }
                ]
              })(
                <Input
                  type="password"
                  onBlur={this.handleConfirmBlur}
                  placeholder="Two inputs need to be consistent"
                />
              )}
            </Form.Item>
          </ComponentCol>
        ) : null}
      </div>
    );
  }
}
