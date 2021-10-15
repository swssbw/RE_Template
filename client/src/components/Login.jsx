import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../_modules/userModule';
import { useHistory } from "react-router-dom";

const Contents = styled.div`
  margin: 100px auto;
  width: 400px;
  border: 1px solid #eee;
  padding: 50px;
`;

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const { user , isAuthenticated } = useSelector(state => state.user);

  useEffect(() => {
    if(user) {
      console.log(user);
      console.log(isAuthenticated);
      history.push('/test1');
    }
  }, [dispatch, user, isAuthenticated])

  function loginHandler() {
    dispatch(login(username));
  }

  return (
    <Contents>
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onSubmitCapture={() => loginHandler()}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      {/* <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item> */}

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
    </Contents>
  )
}

export default Login
