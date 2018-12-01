import React, { Component } from 'react';

import Header from './components/Header';

import Home from './container/Home';
import Kajian from './container/Kajian';
import Kitab from './container/Kitab';
import Mondok from './container/Mondok';



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
       <Header ChangePage={this.handleChangePage}/>
       {this.state.page == "Home" ? (<Home/>) : this.state.page == "Kajian" ? (<Kajian/>) : this.state.page == "Kitab" ? (<Kitab/>) : this.state.page == "Mondok" ? (<Mondok/>) : (<h1>Page Not Found</h1>)}
     </div>
   )
  }
}

export default App;
