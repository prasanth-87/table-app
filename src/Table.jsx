import React from 'react'
import { useState } from 'react'
import "./Table.css"

class Table extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value:[]   ,
         person:{}
      }
    }
    handleData=(e)=>{
        console.log(e);
        this.setState({person:e})
    }
    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/comments`).then(response=>response.json()).then(data=>this.setState({value:data}))
    }
    render(){
  return (
    <div className='container'>
        <div>
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>PostId</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Body</td>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.value.map((item)=>{
                       return(
                        <tr key={item.id} onClick={()=>this.handleData(item)}>
                        <td>{item.id}</td>
                        <td>{item.postId}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.body}</td>
                     
                    </tr>
                       )
                    })
                }
            </tbody>
        </table>
        </div>
        <div className='line'>
        <div className='details'>
            <h2>{this.state.person.name}</h2>
            <h2>{this.state.person.email}</h2>
            <h2>{this.state.person.body}</h2>
        </div>
        </div>
        
    </div>
  )
            }
}

export default Table