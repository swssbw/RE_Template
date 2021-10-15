import React from 'react';  
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';  
  
// Layouts
import Layout from "./layouts/Layout";
import MainLayout from './layouts/MainLayout';
  
// Components
import ChartComponent from './components/Chart';
import MultiSelect from './components/MultiSelect';

function App() {
  return (
    <Router>  
      <Switch>  
        <Route exact path="/"><Redirect to="/test1" /></Route>  
        <Layout exact path="/test1" layout={MainLayout} component={ChartComponent}/>
        <Layout exact path="/test2" layout={MainLayout} component={MultiSelect}/>
      </Switch>  
    </Router>  
  )
}
export default App;   