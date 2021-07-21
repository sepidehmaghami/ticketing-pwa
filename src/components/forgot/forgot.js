import './forgot.css';
import React, { useContext , useState } from "react";
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import imgLogin from '../../assets/login.jpg';
import imagelogin from '../../assets/logo.svg';
import { useHistory,useLocation } from 'react-router';
import { Form, Input, Button, Checkbox } from 'antd';
import {Helmet} from "react-helmet";
const { Content } = Layout;

function Forgot ()  {
  const [stge,setstage]=useState(false)
  const onFinished = (values) => {
  fetch("https://api.ticket.tempserver.ir/api/reset-password/",{
      method:"POST",
      body:JSON.stringify({
        email:values.email
      }),
      headers:new Headers({
        "content-type": "application/json",
      })
    }).then((res)=>{
      if(res.status === 200){
        setstage(true)
      }
      return res.json()
    }).then((result)=>{
        console.log(result)
    })
    .catch(err=>console.log(err.message))
  };

  const onFinished2 = (values) => {
    fetch("https://api.ticket.tempserver.ir/api/confirm-password/",{
        method:"POST",
        body:JSON.stringify({
          token:values.token,
          uid:values.uid,
          password:values.password
        }),
        headers:new Headers({
          "content-type": "application/json",
        })
      }).then((res)=>{
        if(res.status===200){
          setstage(false)
        }
        return res.json()
      }).then((result)=>{
        alert(JSON.stringify(result))
        console.log(result)
      })
      .catch(err=>console.log(err.message))
    };


  let form=(<Form
    name="normal_login"
    className="login-form"
    initialValues={{
      remember: true,
    }}
    onFinish={onFinished}
  >
  <div className="flex-space">
  <Form.Item className="ant-input-size"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your Email!',
        },
      ]}
    >
      <Input type="email" placeholder="Email" />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" className="login-form-button-purple">
        Submit
      </Button>
    </Form.Item>
  
    <Form.Item  className="botoom-border" >
      Any other way? <a className="a-style" href="#">Register</a>
      <br />
      Having an issue? <a className="a-style" href="#">Contact us</a>
    </Form.Item>
  </div>
</Form>)
  if(stge){
    form=(<Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinished2}
    >
    <div className="flex-space">

    <Form.Item className="ant-input-size"
        name="token"
        rules={[
          {
            required: true,
            message: 'Please input your token!',
          },
        ]}
      >
        <Input type="token" placeholder="token" />
      </Form.Item>
      <Form.Item className="ant-input-size"
        name="uid"
        rules={[
          {
            required: true,
            message: 'Please input your uid!',
          },
        ]}
      >
        <Input type="uid" placeholder="uid" />
      </Form.Item>
      <Form.Item className="ant-input-size"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your new password!',
          },
        ]}
      >
        <Input type="new password" placeholder="new password" />
      </Form.Item>
      
      <Form.Item>
        <Button htmlType="submit" className="login-form-button-purple">
          Submit
        </Button>
      </Form.Item>
    </div>
  </Form>)
  }

return (      
 <>
      <Helmet>
          <title>Ticketing - Forgotten Password Page</title>
      </Helmet>
   <Layout>
    <Content>
    <Row>
        <Col className="item_center" span={12}>  
            <div><img src={imagelogin} className="imglogo"  alt="" /></div>
            <p className="p-size">Forgotten Password ?</p>
            <p className="note-size">Enter your email to reset your password</p>
            
            {form}


              </Col>
        <Col  span={12}>   
            <div>
              <img src={imgLogin} className="original" width="100%" height="721vh" alt="" />
              <p className="para"><span>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. </span></p>
            </div>
        </Col>
    </Row>
    </Content>
  </Layout>
 </>     
  );
};

export default Forgot;