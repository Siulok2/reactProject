import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom';
import Detail from '../home_messages_detail/detail';

export default class Messages extends Component {

    state = {
        messages:[]
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                messages:[      
                    {id:'1',title:'好消息1'},
                    {id:'2',title:'好消息2'},
                    {id:'3',title:'好消息3'},
                    {id:'4',title:'好消息4'},
                ]
            })
        }, 1000);
    }

    pushShow = (id) => {
        this.props.history.push(`/home/messages/detail/${id}`)
    }
    
    replaceShow = (id) => {
        this.props.history.replace(`/home/messages/detail/${id}`)
    }

    back = () => {
        this.props.history.goBack()
    }

    forward = () => {
        this.props.history.goForward()
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((obj) => {
                            return (
                                <li key={obj.id}>
                                    <Link replace to={`/home/messages/detail/${obj.id}`}>{obj.title}</Link>
                                    <button onClick={()=>{this.pushShow(obj.id)}}>push查看</button>
                                    <button onClick={()=>{this.replaceShow(obj.id)}}>replace查看</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={this.back}>后退</button>
                <button onClick={this.forward}>前进</button>
                <hr/>
                <Route path="/home/messages/detail/:id" component={Detail}/>
            </div>
        )
    }
}
