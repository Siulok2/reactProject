import React from 'react';
import About from './components/about/about'
import Home from './components/home/home'
import {NavLink,Route,Redirect,Switch} from 'react-router-dom'
class App extends React.Component{
  render(){
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React路由器</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 加NavLink 可以给点击的当前的标签加一个active属性

                  使用activeClassName="XXX" ,可以给点击的当前的标签加一个XXX的属性

              */}

              <NavLink className="list-group-item" activeClassName="color" to="/about">About</NavLink>
              <NavLink className="list-group-item" activeClassName="color" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* Redirect:默认跳转到某个标签 
                
                    Switch:匹配到路由就不往下走了
                */}
                <Switch>
                  <Route path="/about" component={About}/>
                  <Route path="/home" component={Home}/>
                  <Redirect to="/home"/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
