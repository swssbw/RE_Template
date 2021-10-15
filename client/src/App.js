import React from 'react';  
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';  

// Layouts
import Layout from "./layouts/Layout";
import MainLayout from './layouts/MainLayout';
import LoginLayout from './layouts/LoginLayout';

// Components
import ChartComponent from './components/Chart';
import MultiSelect from './components/MultiSelect';
import Login from './components/Login';
import Mypage from './components/Mypage';

// Redux
import { useSelector } from 'react-redux'

function App() {

  const { isAuthenticated } = useSelector(state => state.user);

  return (
    <Router>  
      <Switch>  
        {
          isAuthenticated 
          ? (
            <>
              <Layout exact path="/test1" layout={MainLayout} component={ChartComponent}/>
              <Layout exact path="/test2" layout={MainLayout} component={MultiSelect}/>
              <Layout exact path="/login" layout={LoginLayout} component={Login}/>
              <Layout exact path="/mypage" layout={LoginLayout} component={Mypage}/>
            </>
          )
          :
          <> 
            <Redirect to="/login" />
            <Layout exact path="/login" layout={LoginLayout} component={Login}/> 
          </>
        }
        {/* <Route exact path="/"><Redirect to="/login" /></Route>   */}
      </Switch>  
    </Router>  
  )
}
export default App;   