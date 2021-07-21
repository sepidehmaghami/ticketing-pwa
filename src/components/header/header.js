import { SearchOutlined,PlusSquareOutlined,QuestionCircleOutlined,UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Layout } from 'antd';
import './header.css';
import { Row, Col } from 'antd';
import image from '../../assets/white-logo.svg';
import { Menu,Dropdown,message } from 'antd';
import AddTicket from "../add ticket/add-ticket"
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {  Popconfirm } from 'antd';

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}
function logOut(){
  message.success("Log out");
  window.location = './login';
}
function cancel(){
  message.error("cancel");
}
const { Header } = Layout;
const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" >
    <a href={'./profile'}>Profile</a>
      {/* Profile */}
    </Menu.Item>
    <Menu.Item key="2" >
    <Popconfirm
          title="Sure to logout?"
          onConfirm={ logOut}
          onCancel={cancel}
        >
    <a href={'./login'}>Log out</a>
        </Popconfirm>
    </Menu.Item>
  </Menu>
);
function Head (){
  const history = useHistory();
  const routeChange = () =>{ 
    let path = `./guide`; 
    history.push(path);
  }
  const [newTicket,setNewTicket] = useState(false)
  const username=localStorage.getItem("username")
  return(
    <>
  <Layout className="layout">
    <Header>
      <Row wrap={false} className="display">
      <Col flex="none">
        <div><img src={image} width="30px" height="40px" alt="" /></div>
      </Col>
      <Col > <div className="icons-list">
       <PlusSquareOutlined style={{ padding: '0 8px' }} onClick={()=>{setNewTicket(true)}}/>
       <QuestionCircleOutlined style={{ padding: '0 7px' }} onClick={routeChange}/> 
       <span style={{ fontSize:'13px', padding:'0px 0px 0px 7px' }}>{username}</span>
       <Dropdown overlay={menu} placement="bottomCenter" >
       <UserOutlined style={{ padding: '0 2px' }}/> 
      </Dropdown>
       </div>
       </Col>
    </Row>
    </Header>
  </Layout>
  <AddTicket open={newTicket} hidefunc={()=>{setNewTicket(false)}}/>
     </>
  );
}
export default Head;