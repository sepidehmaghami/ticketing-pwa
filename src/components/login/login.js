import "./login.css";
import React, { useEffect } from "react";
import { Layout, message } from "antd";
import { Row, Col } from "antd";
import imgLogin from "../../assets/login.jpg";
import imagelogin from "../../assets/logo.svg";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Helmet } from "react-helmet";
import axios from "axios";

const { Content } = Layout;
function Login() {
  // const [red, setred] = useState(false);
  // const [check, setcheck] = useState(false);
  const [form] = Form.useForm();
  const storage = localStorage.getItem("login");
  useEffect(() => {
    const storageObj = JSON.parse(storage);
    if (storage !== null) {
      form.setFieldsValue({
        username: storageObj.username,
        password: storageObj.password,
      });
    }
  }, []);

  const history = useHistory();

  const handleFormSubmit = (values) => {
    const name = values.username,
      pass = values.password;
    axios
      .post("https://api.ticket.tempserver.ir/api/token/", {
        username: name,
        password: pass,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.status);
          localStorage.setItem(
            "login",
            JSON.stringify({
              // change object to json
              username: name,
              password: pass,
            })
          );
          return res.data;
        } else {
          message.error("Please check your username and password");
        }
      })
      .then((res) => {
        localStorage.setItem("auth", "true");
        localStorage.setItem("token", res.access);
        localStorage.setItem("username", name);
        history.push("/dashboard");
      })
      .catch(() => {
        message.error("Please check your username and password");
      });
  };

  return (
    <>
      <Helmet>
        <title>Ticketing - Login Page</title>
      </Helmet>

      <Layout>
        <Content className="login__layout">
          <Row>
            <Col className="item_center" span={12}>
              <div>
                <img src={imagelogin} className="imglogo " alt="" />
              </div>
              <p className="p-size">Welcome Back</p>

              <Form
                name="normal_login"
                className="login-form"
                form={form}
                initialValues={{
                  remember: true,
                }}
                onFinish={handleFormSubmit}
              >
                <div className="flex-space">
                  <Form.Item
                    className="ant-input-size"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Username!",
                      },
                    ]}
                  >
                    <Input
                      prefix={
                        <UserOutlined className="ant-icon site-form-item-icon " />
                      }
                      placeholder="Username/Email *"
                    />
                  </Form.Item>
                  <Form.Item
                    className="ant-input-size"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Password!",
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={
                        <LockOutlined className="ant-icon site-form-item-icon" />
                      }
                      type="password"
                      placeholder="Password *"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button "
                    >
                      Login
                    </Button>
                  </Form.Item>
                  <Form.Item>
                    <div className="width-style">
                      <Form.Item name="remember" noStyle>
                        <Checkbox
                          value="remember"
                          // onChange={(e) => {
                          // setcheck(e.target.checked);
                          // }}
                        >
                          Remember me
                        </Checkbox>
                      </Form.Item>
                      <a className="login-form-forgot" href={"./forgot"}>
                        Forgot password
                      </a>
                    </div>
                  </Form.Item>
                  <Form.Item className="botoom-border">
                    {/* Don&apos;t have an account? <a className="a-style" href={'./register'}>Register</a>
                <br /> */}
                    Having an issue?
                    <a className="a-style" href={"./guide"}>
                      Contact us
                    </a>
                  </Form.Item>
                </div>
              </Form>
            </Col>
            <Col className="login__right-image" span={12}>
              <div>
                <img
                  src={imgLogin}
                  className="grayscale loginImag"
                  width="100%"
                  height="721vh"
                  alt=""
                />
                <p className="para">
                  <span>
                    Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Egestas purus viverra
                    accumsan in nisl nisi. Arcu cursus vitae congue mauris
                    rhoncus aenean vel elit scelerisque. In egestas erat
                    imperdiet sed euismod nisi porta lorem mollis.{" "}
                  </span>
                </p>
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}

export default Login;
