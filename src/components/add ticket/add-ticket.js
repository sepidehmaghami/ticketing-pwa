import { Modal, Button } from 'antd';
import React, { useState } from 'react';
import { Input } from 'antd';
import { Radio } from 'antd';

import './add-ticket.css';

import {useRef} from 'react';
import JoditEditor from "jodit-react";

function AddTicket(props) {
    const [value1, setValue1] = React.useState("normal");
    const [value2, setValue2] = React.useState(1);
    const [value3, setValue3] = React.useState("");
    const onChange1 = e => {
      setValue1(e.target.value);
    };
    const onChange2 = e => {
      setValue2(e.target.value);
    };

    const editor = useRef(null);
    const [content, setContent] = useState('');
    
    function Modalhidefunc ()  {
        props.hidefunc();
      };
    function AddTicket(e){
      e.preventDefault()
      const token=localStorage.getItem("token")
      const dataset={
        subject:value3,
        priority:value1,
        description: content,
        team: value2,
        file01: "",
        file02:"",
      }
      fetch("https://api.ticket.tempserver.ir/api/ticket/",{
        method:"POST",
        body:JSON.stringify({
          ...dataset
        }),
        headers:new Headers({
          'content-type': 'application/json',
          "AUTHORIZATION" : "Bearer "+token
        })
      }).then(res=>res.json())
      .then(result=>{
        console.log(result)
      }).catch((err)=>{
        console.log(err.message)
      })
      props.hidefunc();
    }  

      
        const config = {
          readonly: false // all options from https://xdsoft.net/jodit/doc/
        }
    return (
      <> 
        <Modal
          title={[
            <p>Add ticket</p>,
            <Input value={value3} onChange={(e)=>setValue3(e.target.value)} placeholder="Subject" />
          ]}
          centered
          visible={props.open}
          onCancel={Modalhidefunc}
          footer={[
            <Button key="back" onClick={Modalhidefunc} className="btn-cancel  btn-modal">
              Cancel
            </Button>,
            <Button key="submit"  onClick={(e)=>AddTicket(e)} className="btn-modal">
              Add
            </Button>,
          ]}
        >
    
      <div className="b-border">
        <span className="m-r">Type </span>
        <Radio.Group onChange={onChange2} value={value2}>
          <Radio value={1}>Issue</Radio>
          <Radio value={2}>Task</Radio>
        </Radio.Group>
      </div>
    <br />
      <div className="b-border">
        <span className="m-r">Priority </span>
        <Radio.Group onChange={onChange1} value={value1} >
          <Radio value={"normal"}>Normal</Radio>
          <Radio value={"urgent"}>Urgent</Radio>
          <Radio value={"crirical"}>Crirical</Radio>
        </Radio.Group>
      </div>
      <br/>
      <p className="m-r align-text">Description </p>
      <JoditEditor
              ref={editor}
                value={content}
                config={config}
              tabIndex={1} // tabIndex of textarea
              onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {}}
            />
    </Modal>
      </>
      );
  }
  
  
  export default AddTicket;