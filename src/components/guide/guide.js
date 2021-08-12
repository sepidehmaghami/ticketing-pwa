import './guide-style.css';
import Head from '../header/header';
import { Layout ,Breadcrumb } from 'antd';
import {Helmet} from "react-helmet";
const {  Header,Content } = Layout;
import { Card, Col, Row } from 'antd';
// const { Meta } = Card;
import { PhoneOutlined , SendOutlined , FileTextOutlined } from '@ant-design/icons';
import Maghami from '../../assets/Maghami.jpg';
import Ansari from '../../assets/Ansari.jpg';
import { Typography } from 'antd';
const { Paragraph } = Typography;
// import Heidari from '../../assets/Heidari.jpg';


function Guide ()  {
    return (
      <>
       <Helmet>
          <title>Ticketing - Guide Page</title>
      </Helmet>
      <Layout className="layout">   
    
        <Header>
          <Head/>
        </Header>
    
      <Content style={{ padding: '0 100px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
         {/* <Breadcrumb.Item style={{ fontWeight: 'bold' }}>Guide</Breadcrumb.Item> */}
        </Breadcrumb>
        <div className="site-layout-content">
         <h2 className="arashweb"><a href="https://arashweb.com/fa/blog/">Arashweb Company</a></h2>
         <div className="or"></div>
          <div className="site-card-wrapper">
            <Row gutter={32}>
            <Col span={6}>
                <Card title="CEO" bordered={false}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="Parham Heidari" src="https://www.chat.arashweb.com/avatar/parham" />}
                  >
                    <h6><a href={'./profile'}>Parham Heidari</a></h6>
                    <FileTextOutlined style={{ padding: '1px 6px 4px 0px' }}/>Email : <Paragraph copyable>heidari1377@gmail.com</Paragraph>
                    <PhoneOutlined style={{ padding: '1px 6px 4px 0px' }}/>Phone Number : <Paragraph copyable>+98 (513) 848-2949</Paragraph>
                    <SendOutlined style={{ padding: '1px 6px 4px 0px' }}/>Telegram : <Paragraph copyable>@parhamheidari</Paragraph>
                    {/* <LinkedinOutlined style={{ padding: '1px 6px 4px 0px' }}/><a href="https://www.linkedin.com/in/parhamheidari/">Linkedin-Heidari</a>*/}
                    </Card>
              </Col>
              <Col span={6}>
                <Card title="Front-end Developer" bordered={false}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="Mobina Ansari" src={Ansari} />}
                  >
                    <h6><a href={'./profile'}>Mobina Ansari Astaneh</a></h6>
                    <FileTextOutlined style={{ padding: '1px 6px 4px 0px' }}/>Email : <Paragraph copyable>mobinaansariit@gmail.com</Paragraph>
                    <PhoneOutlined style={{ padding: '1px 6px 4px 0px' }}/>Phone Number : <Paragraph copyable>+98 915 445 0822</Paragraph>
                    <SendOutlined style={{ padding: '1px 6px 4px 0px' }}/>Telegram : <Paragraph copyable>@M_Ansari_Astaneh</Paragraph>
                    {/* <LinkedinOutlined style={{ padding: '-10px 5px 4px 0px' }}/><a href="https://www.linkedin.com/in/mobina-ansari-astaneh-431981213/">Linkedin-Ansari</a>*/}
                </Card>
              </Col>
              <Col span={6}>
                <Card title="Back-end Developer" bordered={false}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="Ata Attarian" src="https://www.chat.arashweb.com/avatar/ataattarian" />}
                  >
                    <h6><a href={'./profile'}>Ata Attarian</a></h6>
                    <FileTextOutlined style={{ padding: '1px 6px 4px 0px' }}/>Email : <Paragraph copyable>ata.attarian78@gmail.com</Paragraph>
                    <PhoneOutlined style={{ padding: '1px 6px 4px 0px' }}/>Phone Number : <Paragraph copyable>+98 (915) 715-3194</Paragraph>
                    <SendOutlined style={{ padding: '1px 6px 4px 0px' }}/>Telegram : <Paragraph copyable>@atta_attarian</Paragraph>
                    {/* <LinkedinOutlined style={{ padding: '-10px 5px 4px 0px' }}/><a href="https://www.linkedin.com/in/atta-attarian-741919193/">Attarian - Linkedin</a> */}
                </Card>
              </Col>
              <Col span={6}>
                <Card title="Suppoter" bordered={false}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="Sepideh Maghami" src={Maghami} />}
                  >
                <h6><a href={'./profile'}>Sepideh Darban Maghami</a></h6>
                    <FileTextOutlined style={{ padding: '1px 6px 4px 0px' }}/>Email : <Paragraph copyable>sepideh@gmail.com</Paragraph>
                    <PhoneOutlined style={{ padding: '1px 6px 4px 0px' }}/>Phone Number : <Paragraph copyable>+98 915 066 0935</Paragraph>
                    <SendOutlined style={{ padding: '1px 6px 4px 0px' }}/>Telegram : <Paragraph copyable>@S_darban_maghami</Paragraph>
                    {/* <LinkedinOutlined style={{ padding: '-10px 5px 4px 0px' }}/><a href="https:https://www.linkedin.com/in/sepideh-darban-maghami-7bbb4b1b9/">Linkedin-Ansari</a>*/}
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </Content>
     
      </Layout>
      </>
      );
}

export default Guide;