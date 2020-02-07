import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    search = () => {
        const {value} = this.refs.keyWord

        this.props.updataAppState({isFirst:false,isLoading:true})

        axios.get('https://api.github.com/search/users',{params:{q:value}}).then(
            (response) => {
                this.props.updataAppState({
                    isLoading:false,
                    users:response.data.items
                })
            },
            (error) => {
                this.props.updataAppState({
                    isLoading:false,
                    error:error.message
                })
            }
        )
         
    }
    render() {
        return (
            <div>
                <div>
                    <input type="text" placeholder="enter the name you search" ref="keyWord"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </div>
        )
    }
}
