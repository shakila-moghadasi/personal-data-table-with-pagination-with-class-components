import React, { Component } from 'react'

export default class Table extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">FirstName</th>
                    <th scope="col">LastName</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {this.props.data.map((res) => {
                    <tr>
                        <td>{res.id}</td>
                        <td>{res.first_name}</td>
                        <td>{res.last_name}</td>
                        <td>{res.email}</td>
                    </tr>
                })}
            </tbody>
        </table>
      </div>
    )
  }
}
