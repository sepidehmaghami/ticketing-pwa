import {
  PlusSquareOutlined,
  QuestionCircleOutlined,
  UserOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import React from "react";
import { Layout } from "antd";
import "./header.css";
import { Row, Col } from "antd";
import image from "../../assets/white-logo.svg";
import { Menu, Dropdown, message } from "antd";
import AddTicket from "../add ticket/add-ticket";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Popconfirm } from "antd";

const { Header } = Layout;

function Head(props) {
  const history = useHistory();
  const [newTicket, setNewTicket] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const username = localStorage.getItem("username");

  const routeChange = () => {
    message.success("Guide page");
    history.push("/guide");
  };
  const dashboard = () => {
    message.success("Dashboard page");
    history.push("/dashboard");
  };
  const Profile = () => {
    message.success("profile");
    history.push("/profile");
  };
  const logOut = () => {
    message.success("Log out");
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("auth");
    history.push("/login");
  };
  const cancel = () => {
    message.error("Log out canceled");
  };
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <a href={"./profile"} onClick={Profile}>
          Profile
        </a>
      </Menu.Item>
      <Menu.Item key="2">
        <Popconfirm
          title="Sure to logout?"
          onConfirm={logOut}
          onCancel={cancel}
        >
          <a href={"./login"}>Log out</a>
        </Popconfirm>
      </Menu.Item>
    </Menu>
  );

  let newTicketElem = "";
  let guide = "";
  let btnAdmin = "";
  let userElem = (
    <a href="/login">
      <span className="login">Login</span>
    </a>
  );
  const token = localStorage.getItem("auth");
  if (token) {
    guide = (
      <a href="/guide" title="Guide">
        <span className="icons-list">
          <QuestionCircleOutlined onClick={routeChange} />
        </span>
      </a>
    );
    newTicketElem = (
      <abbr title="Add Ticket" className="icons-list">
        <PlusSquareOutlined
          style={{ paddingRight: "15px" }}
          onClick={() => {
            setNewTicket(true);
          }}
        />
      </abbr>
    );
    btnAdmin = (
      <a href="/admin" title="Admin">
        <span className="icons-list">
          <IdcardOutlined
            twoToneColor="white"
            style={{ padding: "0px 13px 0px 2px" }}
          />
        </span>
      </a>
    );
    userElem = (
      <Dropdown
        overlay={menu}
        visible={dropdown}
        onVisibleChange={(e) => {
          setDropdown(e);
        }}
        placement="bottomRight"
      >
        <span className="username-style icons-list">
          {username}
          <UserOutlined />
        </span>
      </Dropdown>
    );
  }
  return (
    <>
      <Layout className="layout">
        <Header>
          <Row wrap={false} className="display">
            <Col flex="none">
              <div>
                <a to="/dashboard" title="Dashboard">
                  <img
                    src={image}
                    width="40px"
                    height="40px"
                    alt="logo"
                    onClick={dashboard}
                  />
                </a>
              </div>
            </Col>
            <Col>
              <div>
                {newTicketElem}
                {btnAdmin}
                {guide}
                {userElem}
              </div>
            </Col>
          </Row>
        </Header>
      </Layout>
      <AddTicket
        changeTicket={() => {
          props.changeTicket();
        }}
        open={newTicket}
        hidefunc={() => {
          setNewTicket(false);
        }}
      />
    </>
  );
}
export default Head;
