import { Drawer, Button,  Select,Spin } from 'antd';
import React, { useState,useEffect,memo } from 'react';
import './open-ticket.css';
import { Comment, Avatar , message } from 'antd';
import {useRef} from 'react';
import JoditEditor from "jodit-react";
import { ArrowLeftOutlined } from '@ant-design/icons';
import axios from 'axios';

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
      actions={[<span key="comment-nested-reply-to" onClick={props.reply}>Reply to</span>]}
      author={<div>{props.name} <span>{props.email}</span></div>}
      datetime={<div className="mt-1">{props.date.split(".")[0]}</div>}
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

  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [comment, setComment] = useState([{ticket:0}]);
  const [Load, setLoad] = useState(false);
  const [spiner, setSpiner] = useState(false);
  
  function onClose (){
      props.hidefunc()
  }; 

  const config = {
    readonly: false // all options from https://xdsoft.net/jodit/doc/
  }
  useEffect(()=>{
    setComment(props.comments)
    setLoad(true)
  },[Load])
 useEffect(()=>{
  message.success("Ticket open");
 },[])
  const submited=(id)=>{
    if(content.trim()===""){
      message.error("plase type somthing")
      return false
    }
    setSpiner(true)
    axios.post("https://api.ticket.tempserver.ir/api/comment/",{
      body:content,
      file01:"",
      file02:"",
      ticket:comment[0].ticket
    },
    {headers:{
        'content-type': 'application/json',
        "AUTHORIZATION" : "Bearer "+token
      }
    })
    .then(res=>{
      console.log(res)
      if(res.status===200||res.status===201){
        setContent("")
        props.changeComment()
        setLoad(true)
        setSpiner(false)
        message.success("Tickets sent");
      }else{
        message.error("somthing Wrong")
      }
      
    })
    .catch(err=>{
      setSpiner(false)
      console.log(err.message)
    }
    )
  }
  const deletingTicket=()=>{
    props.deletTicket(comment[0].ticket)
    onClose()
  }
  const replyfunc=()=>{
    const elem=document.querySelectorAll(".jodit-wysiwyg")
    if(elem!==undefined){
      elem[elem.length-1].focus()
    }
  }
  let commented
  if(Load){
    commented=props.comments.map((val,key)=>{
      return <ExampleComment1 reply={replyfunc}  key={key} name={val.user.username} date={val.updated_at} email={val.user.email} message={val.body}></ExampleComment1>})
    }else{
    commented=""
  }
  let elem,attr,classStatus
  if(spiner){
    attr={disabled:true}
    elem =<Spin />

  }
  classStatus="ant-tag-green"
  if(props.data.status[0]==="done"){
    classStatus="ant-tag-red"
  }
    return (
        <>
        <Drawer
        title={[
         <p className="p-align"><ArrowLeftOutlined className="icon-back" onClick={onClose}/><span className="ticket-id">ticket {props.data.key}</span></p>,
         <span><span className="openTicket__subject">{props.data.subject}</span></span>,
         <span><span className={"ant-tag "+classStatus}>{props.data.status[0].toUpperCase()}</span></span>,
         <span className="font-span">- Created {props.data.created.split(".")[0]} - Requester: {props.data.requester}<span className="color-name"></span></span>
        ]}          
          width={720} 
          onClose={onClose}
          visible={props.open}
          bodyStyle={{ paddingBottom: 30 }}
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
              tabIndex={1} // tabIndex  of textarea
              onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={newContent => {}}
            />
            <br/>
            <Button onClick={deletingTicket}  className="btn-drwer btn-cancel ">
                Close
              </Button>
              <Button onClick={onClose} style={{ marginRight: 8 }} className="btn-cancel btn-drwer">
                Cancel
              </Button>
              <Button {...attr} onClick={submited} className="btn-drwer">
                Send
                {elem}
              </Button>
            </div>
          }
        >
        {commented}
        </Drawer>
      </>
      );
  }
  
  
  export default memo(OpenTicket);