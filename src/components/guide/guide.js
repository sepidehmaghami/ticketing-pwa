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
         <Breadcrumb.Item style={{ fontWeight: 'bold' }}>Guide</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.</div>
      </Content>
     
      </Layout>
      </>
      );
}

export default Guide;