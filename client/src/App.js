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

function App() {
  return (
    <Router>  
      <Switch>  
        <Route exact path="/"><Redirect to="/login" /></Route>  
        <Layout exact path="/test1" layout={MainLayout} component={ChartComponent}/>
        <Layout exact path="/test2" layout={MainLayout} component={MultiSelect}/>
        <Layout exact path="/login" layout={LoginLayout} component={Login}/>
      </Switch>  
    </Router>  
  )
}
export default App;   