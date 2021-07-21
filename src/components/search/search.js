// import Head from '../components/header';
// import Home from '../components/home';
// import './headergray.css';
// import 'antd/dist/antd.css';
// import { DatePicker, message, Alert } from 'antd';
// import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";

// function Search() {
//   return (
//     <Home>
//       <Head/>
//     </Home>
//   );
// }

// export default Search;
import ReactDOM from "react-dom";
import mountNode from "react-dom";
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Layout ,Breadcrumb } from 'antd';
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

const onSearch = value => console.log(value);


function Searching(){
  
ReactDOM.render(
  <Space direction="vertical">
    <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
    <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
    <Search placeholder="input search text" onSearch={onSearch} enterButton />
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />
  </Space>,
  mountNode,
);
}

export default Searching;