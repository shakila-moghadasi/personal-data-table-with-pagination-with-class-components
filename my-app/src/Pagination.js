import React, { Component } from 'react'
import Button from './Button'
import Table from './Table'

export default class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
        }
        this.fetchdata = this.fetchdata.bind(this)
    }
    async fetchdata(page) {
        const result = await fetch(`https://reqres.in/api/users?page=${page}`).then((res) => res.json())
        this.setState({data : result.data})
    }
    render(){
        return(
            <div>
                <Button clickHandler = {() => this.fetchdata(1)}>page 1</Button>
                <Button clickHandler = {() => this.fetchdata(2)}>page 2</Button>
                <Table data = {this.state.data}/>
            </div>
        )
    }
}