import Login from '../components/login/login';
import Profile from '../components/profile/profile';
import Guide from '../components/guide/guide';
import Home from '../components/home/home';
import Forgot from '../components/forgot/forgot';
import Register from '../components/register/register';
import AddTicket from '../components/add ticket/add-ticket';
import OpenTicket from '../components/open ticket/open-ticket';
import 'antd/dist/antd.css';
import {Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">       
         <Switch>
          <Route path="/" exact>
          {JSON.parse(localStorage.getItem('auth')) ? <Redirect to="/home" /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login">
          <Login />
          </Route>
          <Route path="/register">
          <Register />
          </Route>
          <Route path="/forgot">
          <Forgot />
          </Route>
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/guide">
          <Guide />
          </PrivateRoute>
          <PrivateRoute path="/profile">
          <Profile />
          </PrivateRoute>
          
          
          {/* <Route path="/login" component={Login}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/guide" component={Guide}/>
          <Route path="/home" component={Home}/>
          <Route path="/forgot" component={Forgot}/>
          <Route path="/register" component={Register}/>
          <Route path="/addticket" component={AddTicket}/>
          <Route path="/openticket" component={OpenTicket}/> */}
        </Switch>
        </div>
    </Router>
  );
}

export default App;

function PrivateRoute({ children, ...rest }) {
    return (
        <Route
        {...rest}
        render={({ location }) =>
        JSON.parse(localStorage.getItem("auth")) ? (
        children
        ) : (
        <Redirect
        to={{
        pathname: "/login",
        state: { from: location },
        }}
        />
        )
        }
        />
    );
}


