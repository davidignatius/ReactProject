import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "/Users/davidignatius/Desktop/hacktiv/r1tuts/node_modules/@fortawesome/react-fontawesome";
import { faYoutube, faInstagram, faFacebook, faTwitter } from "/Users/davidignatius/Desktop/hacktiv/r1tuts/node_modules/@fortawesome/free-brands-svg-icons";
class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.loading('You are logging in...', 5).
          then(() => {
            message.success('You are successfully logged in!', 2)
          })
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <article class="mw5 center bg-white shadow-5 br3 pa3 pa4-ns mv6 ba b--black-10">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember me</Checkbox>)}
              <br />
              <a className="login-form-forgot" href="">
                Forgot password
          </a>
              <br />
              <Link to="/Cards4">
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
               </Button>
               </Link>
                Or
            <a href=""> register now!</a>

            </Form.Item>
            <FontAwesomeIcon icon={faInstagram} size="2x"  />

          </Form>
        </article>
      </div>
    );
  }
}

// export default NormalLoginForm
const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default Login

// ReactDOM.render(<WrappedNormalLoginForm />, mountNode);