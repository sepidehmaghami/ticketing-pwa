import './login.css';
import React, { useState  } from "react";
import { Layout, message } from 'antd';
import { Row, Col } from 'antd';
import imgLogin from '../../assets/login.jpg';
import imagelogin from '../../assets/logo.svg';
import  { Redirect } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Helmet} from "react-helmet";
import axios from "axios"

const { Content } = Layout;
function Login ()  {
  const [red,setred] = useState(false)
  
  const handleFormSubmit = values => {
    const name = values.username,
    pass=values.password
    axios.post("https://api.ticket.tempserver.ir/api/token/",{
      username:name,
      password:pass
    })
    .then((res)=>{
      if(res.status===200){
        return res.data
      }else if(res.status === 401){
        message.error("username or password is invalid")
      }
    })
    .then((res)=>{   
      localStorage.setItem("auth","true")
      localStorage.setItem("token",res.access)
      localStorage.setItem("username",name)
      return res;
    }).then(()=>{
      setTimeout(()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("auth")
        localStorage.removeItem("username")
      },3600*3*1000)
      setred(true)
    })
    .catch((err)=>{
      console.log(err.message)
    })
  };
  let redirected;
  if(red){
    redirected=<Redirect to="/" />
  }
  
    return (
      
 <>
      <Helmet>
          <title>Ticketing - Login Page</title>
      </Helmet>
    
    {redirected}
   <Layout >
    <Content className="login__layout">
    <Row>
        <Col className="item_center" span={12}>  
            <div><img src={imagelogin} className="imglogo "  alt="" /></div>
            <p className="p-size">Welcome Back</p>
      
            <Form 
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={handleFormSubmit}
            >
              
            <div className="flex-space">
            <Form.Item className="ant-input-size"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Username!',
                  },
                ]}
              >
                <Input  prefix={<UserOutlined className="ant-icon site-form-item-icon " />} placeholder="Username/Email *" />
              </Form.Item>
              <Form.Item className="ant-input-size"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}
              >
                <Input.Password 
                  prefix={<LockOutlined className="ant-icon site-form-item-icon" />}
                  type="password"
                  placeholder="Password *"
                />
              </Form.Item>
              <Form.Item >
                <Button type="primary" htmlType="submit" className="login-form-button ">
                  Login
                </Button>
              </Form.Item>
              <Form.Item >
              <div className="width-style"> 
                <Form.Item name="remember"  noStyle>
                <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a className="login-form-forgot" href={'./forgot'}>
                  Forgot password
                </a> 
                    </div>
              </Form.Item>
              <Form.Item  className="botoom-border" >
                Don&apos;t have an account? <a className="a-style" href={'./register'}>Register</a>
                <br />
                Having an issue? <a className="a-style" href={'./guide'}>Contact us</a>
              </Form.Item>
            </div>
    </Form>
              </Col>
        <Col className="login__right-image" span={12}>   
            <div>
              <img src={imgLogin} className="grayscale loginImag" width="100%" height="721vh" alt="" />
              <p className="para"><span>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. </span></p>
            </div>
        </Col>
    </Row>
    </Content>
  </Layout>
 </>     
  );
}

export default Login;