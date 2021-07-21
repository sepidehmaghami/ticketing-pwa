import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import React, { useState,useEffect } from 'react';
import './open-ticket.css';
import { Comment, Avatar } from 'antd';
import {useRef} from 'react';
import JoditEditor from "jodit-react";
const { Option } = Select;

const ExampleComment1 = (props) =>{
  let usernameSet=localStorage.getItem("username")
  ,notuser="";
  if(usernameSet !== props.name){
    notuser="active"
  }
  return  (
    <Comment
      className={notuser}
      actions={[<span key="comment-nested-reply-to">Reply to</span>]}
      author={<a>{props.name} <span>{props.email}</span></a>}
      datetime={<p>{props.date}</p>}
      avatar={
        <Avatar className="b-color"
          alt="sepideh">{props.name.split("")[0]}</Avatar>
      }
      content={
        <pre dangerouslySetInnerHTML={{ __html: props.message }}></pre>
      }
    >
      {props.children}
    </Comment>
  )}

function OpenTicket(props) {
 const token = localStorage.getItem("token")
  function onClose (){
    props.hidefunc()
  };  
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [comment, setComment] = useState([]);
  const [Load, setLoad] = useState(false);
  const [chnage, setChange] = useState(false);

  const config = {
    readonly: false // all options from https://xdsoft.net/jodit/doc/
  }
  useEffect(()=>{
    fetch("https://api.ticket.tempserver.ir/api/comment/?limit=1000&offset=0",{
      method:"GET",
      headers:new Headers({
        'content-type': 'application/json',
        "AUTHORIZATION" : "Bearer "+token
      })
    }).then(res=>res.json())
    .then(result=>{
      const findComment = result.results.filter((val)=>{
          return props.id === val.ticket
      })
      console.log(findComment)
      setComment(findComment)
      setLoad(true)
    })
    .catch(err=>
      console.log(err.message)
    )
  },[chnage])
  const submited=(id)=>{
    fetch("https://api.ticket.tempserver.ir/api/comment/",{
      method:"POST",
      headers:new Headers({
        'content-type': 'application/json',
        "AUTHORIZATION" : "Bearer "+token
      })
      ,body:JSON.stringify({
        body:content,
        file01:"",
        file02:"",
        ticket:comment[0].ticket
      })
    })
    .then(res=>res.json())
    .then(result=>{
      setContent("")
      setTimeout(()=>{
        setChange(prev=>!prev)
      },2000)
      console.log(result)
    })
    .catch(err=>
      console.log(err.message)
    )
  }

  let commented
  if(Load){
    commented=comment.map((val,key)=>{
      return <ExampleComment1  key={key} name={val.user.username} date={val.updated_at} email={val.user.email} message={val.body}></ExampleComment1>})
    }else{
    commented=""
  }
    return (
        <>
        <Drawer
        title={[
            <p className="p-align">{props.title}</p>,
            <span><span class="ant-tag ant-tag-green">NEW</span></span>,
            <span className="font-span">- Created 02/03/2020 - Requester: <span className="color-name"></span></span>
        ]}          width={720} 
            onClose={onClose}
          visible={props.open}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
                 <p className="align-text">Add Comment </p>
      <JoditEditor
              ref={editor}
                value={content}
                config={config}
              tabIndex={1} // tabIndex of textarea
              onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {}}
            />
            <br/>
              <Button onClick={onClose} style={{ marginRight: 8 }} className="btn-cancel btn-drwer">
                Cancel
              </Button>
              <Button onClick={submited} className="btn-drwer">
                Send
              </Button>
            </div>
          }
        >
        {commented}
        </Drawer>
      </>
      );
  }
  
  
  export default OpenTicket;