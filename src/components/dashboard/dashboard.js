import Head from '../header/header';
import './dashboard.css';
import { Layout ,Breadcrumb } from 'antd';
import { Table ,Tag  } from 'antd';
import { Row, Col } from 'antd';
import { Pagination , message } from 'antd';
import { Input, Space ,Popconfirm} from 'antd';
import {useState,useEffect} from "react"
import OpenTicket from "../open ticket/open-ticket"
import {Helmet} from "react-helmet";
import {useHistory ,useLocation} from "react-router-dom"
import axios from 'axios';
import debounce from 'lodash/debounce'
const {  Header,Content } = Layout;
const { Search } = Input;

function Home(){
  const [data1,setdata1]=useState([])
  const [chnage,setchange]=useState(true)
  const [seeOpenTicket,setseeOpenTicket]=useState(true)
  const [openTicket,setOpenTicket] = useState(false)
  const [openTicketTime,setOpenTicketTime] = useState(false)
  const [idTiketOpen,setidTiketOpen] = useState({name:"",subject:""})
  const [commentTicket,setcommentTicket] = useState()
  const [curentData,setcurentData] = useState()
  const [url,seturl] = useState("https://api.ticket.tempserver.ir/api/ticket/")
  var token= localStorage.getItem("token")
  const deletTicket = id =>{
    axios.get("https://api.ticket.tempserver.ir/api/close/"+id+"/",{
      headers:{
        'content-type': 'application/json',
        "AUTHORIZATION" : "Bearer "+ token
      }
    })
    .then(res=>res.data)
    .then(result=>{
      if(result.message === "OK"){
        message.success("Ticket "+ id+" deleted");
        setchange((prev)=>!prev)
      }else{
        console.log(result)
        message.error("somthing wrong");
      }
    })
    .catch(err=>
      console.log(err.message)
    )
    
  }
  const history=useHistory()    
    const openTicketfunc=(id)=>{
      axios.get("https://api.ticket.tempserver.ir/api/ticket/?limit=10000&offset=0",{
        headers:{
          'content-type': 'application/json',
          "AUTHORIZATION": "Bearer "+token
        }
      })
      .then(res=>{
        if(res.status===200){
          return res.data
        }else{
          message.error("try agin")
        }
      })
      .then(result=>{
        return result.results
      })
      .then(result=>{
        const resul=[...result]
        const find =resul.find((val)=>Number(id)===val.id)
        return find
      }).then( (find)=>{
        history.push("/"+id)
         setidTiketOpen({
          key: find.id,
          status: [find.tag],
          subject:find.subject,
          created:find.created_at,
          created2:(+ new Date(find.created_at)),
          requester:find.user.username,
        })
         setcommentTicket(find.comments)
         setOpenTicket(true)
         setOpenTicketTime(true)    
        })
      .catch((err)=>{
        console.log(err.message)
      })
    }
  const columns = [
    {
      title: 'Status',
      dataIndex: 'status',
      // eslint-disable-next-line react/display-name
      render: status => (
        <span>
          {status.map(tag => {
            let color = 'green';
            if(tag==="done"){
              color="red"
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
                })}
      </span>
    ),
    
    filters: [
      {
        text: 'New',
        value: 'new',
      },
      {
        text: 'Active',
        value: 'active',
      },
       {
        text: 'Assigned',
        value: 'assigned',
      },
      {
        text: 'Pending',
        value: 'pending',
      },
      {
        text: 'Open',
        value: 'open',
      },{
        text: 'Done',
        value: 'done',
      },
    ],
    onFilter: (value, record) => {
      return record.status.indexOf(value) === 0
    },
    },
    {
      title: '#',
      dataIndex: 'number',
      sorter: (a, b) => a.number - b.number,
    },
    {
        title: 'Subject',
        dataIndex: 'subject',
      },
      {
        title: 'Created',
        dataIndex: 'created',
        sorter: (x, y) => x.created2 - y.created2,

      },
  
      {
        title: 'Requester',
        dataIndex: 'requester',
        // eslint-disable-next-line react/display-name
        render: text => <a style={{color:"#3699FF"}} href={'./profile'}>{text}</a>,
      },
      {
        title: 'Customer',
        dataIndex: 'customer',
      },
      {
        title: 'Updated',
        dataIndex: 'updated',
            sorter: (a, b) => a.updated2 - b.updated2,
      },
    {
        title: 'Action',
        dataIndex: 'action',
        // eslint-disable-next-line react/display-name
        render: function(id, record){
          return (
            <>
            <Space size="middle" style={{color:"#3699FF"}}>
            <Popconfirm
            title="Do you want to delete this ticket?"
            onConfirm={ ()=>{deletTicket(record.key)}}
            >
              <a>Delete {record.name}</a>
            </Popconfirm>
              <a onClick={()=>{openTicketfunc(record.key)} } >Open</a>
            </Space>
            </>
            
          )},
      },
  ];
  
  var arr=[]
  useEffect(()=>{
    axios.get(url,{
      headers:{
        'content-type': 'application/json',
        "AUTHORIZATION" : "Bearer "+token
      }
    })
    .then(res=>{
      if(res.status===200){
        return res.data
      }else{
        message.error("try agin")
      }
    })
    .then(result=>{
      setcurentData(result.count)      
      return result.results
    })
    .then(result=>{
      arr=[]
      const resul=[...result]
      console.log(resul[0].created_at.split(".")[0])

      resul.map((val)=>{
          arr.push({
            key: val.id,
            status: [val.tag],
            number: arr.length+1,
            subject:val.subject,
            created:val.created_at.split(".")[0],
            created2: (+ new Date(val.created_at.split(".")[0])),
            requester:val.user.username,
            customer:"Main",
            updated:val.updated_at.split(".")[0],
            updated2:(+ new Date(val.updated_at.split(".")[0])),
          })
      })
      return result
    })
    .then(()=>{
      setdata1(arr)
    })
    .catch((err)=>{
      console.log(err.message)
    })

  },[chnage])

  let openTicketElem=openTicketTime?(
  <OpenTicket 
    deletTicket={deletTicket} 
    data={idTiketOpen}
    comments={commentTicket}
    open={openTicket} 
    changeComment={()=>{
        openTicketfunc(idTiketOpen.key)
    }}
    hidefunc={()=>{
      setOpenTicket(false)
      setTimeout(()=>{
        setOpenTicketTime(false)
      },1000)
      }}/>):""
  const location=useLocation().pathname.split("/")[1]
  if(seeOpenTicket){
    if(location!=="" && location!==null && location!==undefined){
      if(data1[0]!==undefined ){
        setseeOpenTicket(false)
        openTicketfunc(location)
      }
    }
  }
   

    
  const onSearch =debounce(value =>{
    if(value.target.value.trim() !==""){
      axios.get("https://api.ticket.tempserver.ir/api/ticket/?search="+value.target.value,{
        headers:{
          'content-type': 'application/json',
          "AUTHORIZATION" : "Bearer "+token
        }
      })
      .then(res=>{
        if(res.status===200){
          return res.data
        }else{
          message.error("try agin")
        }
      })
      .then(result=>{
        return result.results
      })
      .then(result=>{
        arr=[]
        const resul=[...result]
        resul.map((val)=>{
          arr.push({
            key: val.id ,
            status: [val.tag],
            number: arr.length+1,
            subject:val.subject,
            created:val.created_at,
            created2:(+ new Date(val.created_at)),
            requester:val.user.username,
            customer:"Main",
            updated:val.updated_at,
            updated2:(+ new Date(val.updated_at)),
          })
        })
        return result
      })
      .then(()=>{
        setdata1(arr)
      })
      .catch((err)=>{
        console.log(err)
      }) 
  }else if(value.target.value.trim() ===""){
    setchange((prev)=>!prev)
  }
},1000)

  const changePage=(curent)=>{
    let ofset =(curent-1)*10
    seturl("https://api.ticket.tempserver.ir/api/ticket/?limit=10&offset="+ofset)
    setchange(prev=>!prev)
  }
  
      
  return (
    <>
    <Helmet>
          <title>Ticketing - Dashboard</title>
      </Helmet>
    <Layout className="layout">   

    <Header>
    <Head changeTicket={()=>{setchange(prev=>!prev)}}/>
    </Header>

    <Content style={{ padding: '0 100px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
      <Row wrap={false} className="display">
        <Col flex="none">
            <div>
                {/* <MenuList/> */}
            </div>
        </Col>
        <Col >
        <div className="search-table">
            <Search onChange={(e)=>onSearch(e)} style={{ width: 200,height: 30,marginRight:'20px' }} />
            <Pagination defaultCurrent={1} onChange={changePage} total={curentData} />  
        </div>
        </Col>
       </Row>
      </Breadcrumb>
      <div className="site-layout-content">    
          <Table  columns={columns} dataSource={data1} scroll={{ x: 'calc(650px + 50%)' }}/>
      </div>
    </Content>
      {openTicketElem}
    </Layout>
    </>
    );
}

export default Home;