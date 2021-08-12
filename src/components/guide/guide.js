import './guide-style.css';
import Head from '../header/header';
import { Layout ,Breadcrumb } from 'antd';
import {Helmet} from "react-helmet";
const {  Header,Content } = Layout;

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
         <h2>Arashweb</h2>
         <h4>Company : <a href="https://arashweb.com/fa/blog/">Arashweb</a></h4>
          Email : <a href="info@arashweb.ir">Arashweb - Email</a> <br/>
          Tel : +98 (513) 848-2949 <br/>
          Phone : +98 (915) 715-3194 <br/>
          Address: Ebn Sina St. #211, Floor 2, Office A, Mashhad, Iran <br/><br/>
          <h4>FrontEnd by : <a href={'./profile'}> Mrs. Mobina Ansari Astaneh</a></h4>
          Email : <a href="mobinaansariit@gmail.com">Ansari - Email</a> <br/>
          Telegram : <a href="@M_Ansari_Astaneh">Ansari - Telegram</a> <br/>
          Linkedin : <a href="">Linkedin</a> <br/>
          Phone : +98 915 445 0822
          <br/><br/>
          <h4>BackEnd by : <a href={'./profile'}> Mr. Ata Attarian</a> </h4>
          Email : <a href="ata.attarian78@gmail.com">Attarian - Email</a> <br/>
          Telegram : <a href="">Attarian - Telegram</a> <br/>
          Linkedin : <a href="">Attarian - Linkedin</a>
          <br/><br/>
          <h4>Tested by : <a href={'./profile'}> Mrs. Sepideh Darban Maghami </a></h4>
          Email : <a href="sepidehmaghamiit@gmail.com">Maghami - Email</a> <br/>
          Telegram : <a href="@S_darban_maghami">Attarian - Telegram</a> <br/>
          Linkedin : <a href="">Attarian - Linkedin</a> <br/>
          Phone : +98 915 066 0935
          <br/><br/>
        </div>
      </Content>
     
      </Layout>
      </>
      );
}

export default Guide;