import './login.css';
import React, { useState  } from "react";
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import imgLogin from '../../assets/login.jpg';
import imagelogin from '../../assets/logo.svg';
import  { Redirect } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Helmet} from "react-helmet";

const { Content } = Layout;
function Login ()  {
  const [red,setred] = useState(false)
  const [messageerr,setmessageerr] = useState("")
  
  const handleFormSubmit = values => {
    const name = values.username,
    pass=values.password

    let formdata = new FormData();
    formdata.append("username", name);
    formdata.append("password", pass);
    fetch("https://api.ticket.tempserver.ir/api/token/",{
      method:"POST",
      redirect:"follow",
      body:JSON.stringify({
        username:name,
        password:pass
      }),
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
        }
      }
    )
    .then((res)=>{
      if(res.status===200){
        return res.json()
      }else if(res.status === 401){
        setmessageerr("username or password is invalid")
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
    }).catch((err)=>{
      console.log(err.message)
    })
  };

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
};
  let redirected;
  if(red){
    redirected=<Redirect to="/home"/>
  }
  
    return (
      
 <>
      <Helmet>
          <title>Ticketing - Login Page</title>
      </Helmet>
    
    {redirected}
   <Layout>
    <Content>
    <Row>
        <Col className="item_center" span={12}>  
            <div><img src={imagelogin} className="imglogo"  alt="" /></div>
            <p className="p-size">Welcome Back</p>
      
            <Form 
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={handleFormSubmit}
            >
              <span style={{color: "red",
                          margin:"10px auto",
                          display:"inline-block"}
    }>{messageerr}</span>
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
                <Input
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
                Don't have an account? <a className="a-style" href={'./register'}>Register</a>
                <br />
                Having an issue? <a className="a-style" href={'./guide'}>Contact us</a>
              </Form.Item>
            </div>
    </Form>
              </Col>
        <Col  span={12}>   
            <div>
              <img src={imgLogin} className="grayscale" width="100%" height="721vh" alt="" />
              <p className="para"><span>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. </span></p>
            </div>
        </Col>
    </Row>
    </Content>
  </Layout>
 </>     
  );
};

export default Login;