import React, { Component } from 'react'

export default class Detail extends Component {
    state = {
        data:[
            {id:'1',title:'好消息1',content:'中国加油1'},
            {id:'2',title:'好消息2',content:'中国加油2'},
            {id:'3',title:'好消息3',content:'中国加油3'},
            {id:'4',title:'好消息4',content:'中国加油4'}
        ]
    }
    render() {
        const {id} = this.props.match.params
        const result = this.state.data.find((arr) => {
            return arr.id === id
        })
        return (
            <ul>
                <li>id:{result.id}</li>
                <li>title:{result.title}</li>
                <li>content:{result.content}</li>
            </ul>
        )
    }
}
