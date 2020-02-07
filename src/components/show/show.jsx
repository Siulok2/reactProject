import React, { Component } from 'react'
import Item from '../item/item'

export default class Show extends Component {
    render() {
        const {isFirst,isLoading,users,error} = this.props
        if(isFirst){
            return <h2>第一次打开页面请输入关键字点击搜索</h2>
        }else if(isLoading){
            return <h2>loading...</h2>
        }else if(error){
            return <h2>{error}</h2>
        }else{
            return (
                <div className="row">
                    {
                        users.map((user) => {
                            return <Item key={user.login} {...user}/>
                        })
                    }
                </div>
            )
        }
    }
}
