import Head from '../header/header';
import './home.css';
import { Layout ,Breadcrumb } from 'antd';
import { Table ,Tag  } from 'antd';
import { Row, Col } from 'antd';
import { Pagination } from 'antd';
// import MenuList from './menu';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import {useState,useEffect} from "react"
import OpenTicket from "../open ticket/open-ticket"
import {Helmet} from "react-helmet";

const {  Header,Content } = Layout;
const { Search } = Input;

  

const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );


 

function Home() {
  const [data1,setdata1]=useState([])
  const [chnage,setchange]=useState(true)
  const [openTicket,setOpenTicket] = useState(false)
  const [idTiketOpen,setidTiketOpen] = useState()
  const [curentData,setcurentData] = useState()
  const [url,seturl] = useState("https://api.ticket.tempserver.ir/api/ticket/")
  var token= localStorage.getItem("token")

  const deletTicket = id =>{
    fetch("https://api.ticket.tempserver.ir/api/close/"+id+"/",{
      method:"GET",
      headers:new Headers({
        'content-type': 'application/json',
        "AUTHORIZATION" : "Bearer "+ token
      })
    }).then(res=>res.json())
    .then(result=>{
      if(result.message === "OK"){
        console.log(id +" id closed ticket ")
      }else{
        console.log(result)
      }
    })
    .catch(err=>
      console.log(err.message)
    )
  }
  
  const openTicketfunc=(id)=>{
    const find =data1.find((val)=>id===val.key)
    setidTiketOpen({id:id,created:find.created,subject:find.subject})
    setOpenTicket(true)
  }

  const columns = [
    {
      title: 'Status',
      dataIndex: 'status',
      render: status => (
        <span>
          {status.map(tag => {
            let color = 'green';
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
    },
    {
        title: 'Subject',
        dataIndex: 'subject',
      },
      {
        title: 'Created',
        dataIndex: 'created',
      },
  
      {
        title: 'Requester',
        dataIndex: 'requester',
        render: text => <a style={{color:"#3699FF"}}>{text}</a>,
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
        render: (id, record) => (
            <Space size="middle" style={{color:"#3699FF"}}>
              <a onClick={()=>{deletTicket(record.key)} } >Delete {record.name}</a>
              <a onClick={()=>{openTicketfunc(record.key)} } >Open</a>
            </Space>
          ),
      },
  ];
  

  
  var arr=[]
  useEffect(()=>{
    fetch(url,{
      method:"GET",
      headers:new Headers({
        'content-type': 'application/json',
        "AUTHORIZATION" : "Bearer "+token
      })
    })
    .then(res=>res.json())
    .then(result=>{
      setcurentData(result.count)      

      return result.results
    })
    .then(result=>{
      arr=[]
      const resul=[...result]
      resul.map((val)=>{
          arr.push({
            key: val.id,
            status: [val.tag],
            number: arr.length+1,
            subject:val.subject,
            created:val.created_at,
            requester:val.user.username,
            customer:"Main",
            updated:val.updated_at,
            updated2:(+ new Date(val.updated_at)),
          })
      })
      return result
    })
    .then((res)=>{
      setdata1(arr)
    })
    .catch((err)=>{
      console.log(err.message)
    })

  },[chnage])

  const onSearch = value =>{
    if(value.target.value.trim() !==""){
      fetch("https://api.ticket.tempserver.ir/api/ticket/?search="+value.target.value,{
        method:"GET",
        headers:new Headers({
          'content-type': 'application/json',
          "AUTHORIZATION" : "Bearer "+token
        })
      }).then(res=>res.json())
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
            requester:val.user.username,
            customer:"Main",
            updated:val.updated_at,
            updated2:(+ new Date(val.updated_at)),
          })
        })
        return result
      })
      .then((res)=>{
        setdata1(arr)
      })
      .catch((err)=>{
        console.log(err)
      }) 
  }else if(value.target.value.trim() ===""){
    setchange((prev)=>!prev)
  }
}

  const changePage=(curent)=>{
    let ofset =(curent-1)*10
    seturl("https://api.ticket.tempserver.ir/api/ticket/?limit=10&offset="+ofset)
    setchange(prev=>!prev)
  }
  return (
    <>
    <Helmet>
          <title>Ticketing - Home Page</title>
      </Helmet>
    <Layout className="layout">   

    <Header>
    <Head/>
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
            <Search  onChange={(e)=>onSearch(e)} style={{ width: 200,marginRight:'15px' }} />
            <Pagination defaultCurrent={1} onChange={changePage} total={curentData} />  
        </div>
        </Col>
       </Row>
      </Breadcrumb>
      <div className="site-layout-content">    
          <Table  columns={columns} dataSource={data1} scroll={{ x: 'calc(650px + 50%)' }}/>
      </div>
    </Content>
    {

    }
    {openTicket?<OpenTicket title={idTiketOpen.subject} date={idTiketOpen.created}  id={idTiketOpen.id} open={openTicket} hidefunc={()=>{setOpenTicket(false)}}/>:""}

    </Layout>
    </>
    );
}


export default Home;