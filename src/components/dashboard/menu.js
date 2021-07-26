import {useState} from "react"

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import AddTicket from "./add-ticket"

function MenuList() {
  const [newTicket,setNewTicket] = useState(false)
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="#">Active</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">Assigned</a>
      </Menu.Item>
      <Menu.Item key="2" >
        <div onClick={()=>{setNewTicket(true)}} >New</div>
      </Menu.Item>
      <Menu.Item key="3">
        <a href="#">Pending</a>
      </Menu.Item>
      <Menu.Item key="4">
        <div >Open</div>
      </Menu.Item>
      <Menu.Item key="5">
        <a href="#"  >Closed</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
    <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{color:"#000",fontWeight:"bold"}}>
     All tickets <DownOutlined />
    </a>
    </Dropdown>
       <AddTicket open={newTicket} hidefunc={()=>{setNewTicket(false)}}/>
    </>
    );
}


export default MenuList;