import './register.css';
import React, { useContext,useEffect,useState } from "react";
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import imgLogin from '../../assets/login.jpg';
import imagelogin from '../../assets/logo.svg';
import { useHistory,useLocation } from 'react-router';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
const { Content } = Layout;

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    console.log(values)
    let formdata = new FormData();
    formdata.append("is_superuser", "true");
    formdata.append("username", "parham");
    formdata.append("first_name", values.name);
    formdata.append("last_name", values.LastName);
    //not have phone use email for tell
    formdata.append("email", values.PhoneNumber);
    formdata.append("is_staff", "true");
    formdata.append("is_active", "true");
    formdata.append("team", "");
    formdata.append("password", "12345");

    fetch("http://api.ticket.tempserver.ir/api/users/",{
      method:"POST",
      body:formdata,
      headers:new Headers({
        'WWW-Authenticate': 'Basic',
        'Content-Type': 'multipart/json',
        'AUTHORIZATION': 'XXXXXXX'
    }),
        mode: 'no-cors',
        credentials: 'include',  
      }
    )
    .then((res)=>{   
      console.log(res)
      // localStorage.setItem("auth","true")
      // localStorage.setItem("token",res.data.token)
      // localStorage.setItem("username",res.data.username)
    }).catch((err)=>{
      console.log(err.message)
    })
};
function useAuth() {
  // return useContext(authContext);
}
function Register ()  {
    return (
 <>
   <Layout>
    <Content>
    <Row>
        <Col className="item_center" span={12}>  
            <div><img src={imagelogin} className="imglogo"  alt="" /></div>
            <p className="p-size">Create Account</p>
            <p note-size>Already have an Account ?</p><p><a href={'./login'}>Sign In</a></p>
      
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
            <div className="flex-space">
            <Form.Item className="ant-input-size"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your First Name!',
                  },
                ]}
              >
                <Input type="text" prefix={<UserOutlined className="ant-icon site-form-item-icon " />} placeholder="First Name" />
              </Form.Item>
              <Form.Item className="ant-input-size"
                name="LastName"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Last Name!',
                  },
                ]}
              ><Input className="ant-input-size"
                  prefix={<UserOutlined className="ant-icon site-form-item-icon "  />}
                  placeholder="Last Name"
                /></Form.Item>
                <Form.Item className="ant-input-size"
                name="PhoneNumber"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Phone Number!',
                  },
                ]}
                ><Input className="ant-input-size"
                prefix={<LockOutlined className="ant-icon site-form-item-icon" />}
                type="tel"
                placeholder="Phone Number"
              /></Form.Item>
              <Form.Item >
                <Button type="primary" htmlType="submit" className="login-form-button ">
                Create Account
                </Button>
              </Form.Item>
              
              <Form.Item  className="botoom-border" >
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

export default Register;