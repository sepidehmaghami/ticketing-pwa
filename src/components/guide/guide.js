import "./guide-style.css";
import Head from "../header/header";
import { Layout, Breadcrumb } from "antd";
import { Helmet } from "react-helmet";
const { Header, Content, Footer } = Layout;
import logo from "../../assets/white-logo.svg";

function Guide() {
  return (
    <>
      <Helmet>
        <title>Ticketing - Guide Page</title>
      </Helmet>
      <Layout className="layout">
        <Header>
          <Head />
        </Header>

        <Content style={{ padding: "0 100px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
          </Breadcrumb>
          <div className="site-layout-content">
            <h2 className="arashweb">
              <a href="https://arashweb.com/fa/blog/">Arashweb Company</a>
            </h2>
            <div className="or"></div>
            <div>
              <h4 className="goal">Team&apos;s Goal : </h4>
              <h5 className="goal_context">
                This is a platform for communication between the employer and
                the company&apos;s programming team. In this context,
                programmers are required to support projects implemented by
                them, during the project or after delivery to the client. If the
                employer encounters any questions during the project, he can
                create his question on this site as a task or issue and
                determine its priority level. The programming team will evaluate
                the ticket at the first opportunity and solve it.
              </h5>
            </div>
            <div className="or"></div>
          </div>
        </Content>
        <Footer className="footer_content">
          <a href="https://arashweb.com/fa/blog/">
            <img src={logo}></img>
            <h4 className="white">Arashweb Company</h4>
          </a>
          <div>
            <div className="footer_content">
              <p>
                front-end developer : <b>Mobina Ansari Astaneh</b>
              </p>
            </div>
            <div className="footer_content">
              <p>
                back-end developer : <b>Atta Attarian</b>
              </p>
            </div>
            <div className="footer_content">
              <a href="info@arashweb.ir">Email: info@arashweb.ir</a>
            </div>
          </div>
        </Footer>
      </Layout>
    </>
  );
}

export default Guide;
