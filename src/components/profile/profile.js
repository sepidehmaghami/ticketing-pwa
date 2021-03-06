import './profile-style.css';
import Head from '../header/header';
import { Layout ,message } from 'antd';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import { LockOutlined} from '@ant-design/icons';
import { Button } from 'antd';
import {useState,useEffect} from "react"
import {Helmet} from "react-helmet";
import axios from "axios"
import Gravatar from "react-gravatar"
const {  Header,Content } = Layout;

function Profile ()  {
  const [user,setuser]=useState({name:"",email:"",first_name:"",last_name:""})
  const [formdata,setformdata]=useState({ pass: "", confimpass: "", oldpass: ""})
  const token=localStorage.getItem("token")

  const submitHandler=(e)=>{
      e.preventDefault()      
      if(formdata.pass!==formdata.confimpass){
        message.error("password and confirm password not equal")
        return false
      }
      const senddata ={
        old_password:formdata.oldpass,
        password:formdata.pass,        
      }

     console.log(senddata)
      axios.post("https://api.ticket.tempserver.ir/api/changepassword/",
      senddata,
      {
        'content-type': 'application/json',
        'WWW-Authenticate' : "Bearer "+token
      })
      .then(()=>{
        setformdata({email: "", name: "", lastname: "", pass: "", confimpass: ""})
      }).catch((err)=>{
        console.log(err.message)
      })
    }
    useEffect(()=>{
      axios.get("https://api.ticket.tempserver.ir/api/users/",{
        headers: {
          'content-type': 'application/json',
          "AUTHORIZATION" : "Bearer "+ token
        }
       })
      .then((res)=>{
        if(res.status===200){
          return res.data
        }else{
          message.error("something wrong to fetch data user")
        }
      }).then((res)=>{
        return res.results
      }).then((result)=>{
        const user=result.find((arr)=>{
          return arr.username === localStorage.getItem("username")
        })
        setuser({name:user.username,email:user.email,last_name:user.last_name,first_name:user.first_name})
      }).catch((err)=>{
        console.log(err.message)
      })
    },[])
    return (
              <>
               <Helmet>
                  <title>Ticketing - Profile Page</title>
              </Helmet>
              <Layout className="layout">   
            
                <Header>
                  <Head/>
                </Header>
            
              <Content style={{ padding: '0 100px' }}>
              
                <div className="site-layout-content">

                <Row style={{marginTop:'8%'}}>
                    <Col flex={2} style={{margin:"50px" , marginBottom:"0px"}}>
                    <div className="avatar">
                    <Gravatar 
                        email={user.email} 
                        size={120}
                        className="CustomAvatar-image"/>

                    </div>
                    <p className="user-name">{user.name}</p>
                    <p>{user.first_name}</p>
                    <p>{user.last}</p>
                    <p>{user.email}</p>
                    </Col>

                    <Col flex={1} className="left-border"></Col>
                    <Col flex={4} className="form-con" style={{margin:"50px" , marginBottom:"0px"}}>
                    <form onSubmit={(e)=>{submitHandler(e)}}>
                    <h2>User Information change</h2>
                    <Input value={formdata.oldpass} onChange={(e)=>{setformdata((prev)=>{
                      return {...prev,oldpass:e.target.value}
                    })}} size="large" placeholder="old password" className="ant-icon" prefix={<LockOutlined />} />
                    <br />
                    <br />
                    <Input value={formdata.pass} onChange={(e)=>{setformdata((prev)=>{
                      return {...prev,pass:e.target.value}
                    })}} size="large" placeholder="Password" className="ant-icon" prefix={<LockOutlined />} />
                    <br />
                    <br />
                    <Input value={formdata.confimpass} onChange={(e)=>{
                      setformdata((prev)=>{
                      return {...prev,confimpass:e.target.value}
                    })}} size="large" placeholder="Confirm Password" className="ant-icon" prefix={<LockOutlined />} />
                    <br />
                    <br />
                   <div className="btn-position">
                   <Button className="button"  key="submit" htmlType="submit"  ghost>
                    Save
                    </Button>
                   </div>
                   </form>
                    </Col>
                </Row>
                                
                </div>
              </Content>
             
              </Layout>
              </>
       
       );
}

export default Profile;