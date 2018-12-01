import React, { Component } from 'react';

import Header from './components/Header';

import Home from './container/Home';
import Kajian from './container/Kajian';
import Kitab from './container/Kitab';
import Mondok from './container/Mondok';
import NotFound from './container/NotFound';

import {Route, Switch} from 'react-router-dom';


class App extends Component {
  state = {
    page : "Home"
  }

  handleChangePage = (params)=>{
    this.setState({
      page : params
    })
  }
  
  render() {
   return(
     <div>
       <Header/>

       <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/kajian" component={Kajian}/>
          <Route path="/kitab" component={Kitab}/>
          <Route path="/mondok" component={Mondok}/>
          <Route component={NotFound}/>
       </Switch>
     </div>
   )
  }
}

export default App;
