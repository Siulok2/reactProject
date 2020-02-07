import React from 'react';
import Search from './components/search/search';
import Show from './components/show/show';
class App extends React.Component{
  state= {
    isFirst:true,
    isLoading:false,
    error:'',
    users:[]
  }

  updataAppState = (obj) => {
    this.setState(obj)
  }

  render(){
    return (
      <div className="container">
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <Search updataAppState={this.updataAppState}/>
        </section>
        <Show {...this.state}/>
      </div>
    )
  }
}
export default App;
