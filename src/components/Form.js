import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comment:'',
             topic: ''
        }
    }
    handleusernameChange =(event)=>{
        this.setState({
            username: event.target.value
        })
    }
    
    handlecommentChange =(event)=>{
        this.setState({
            comment: event.target.value
        })
    }

    handleTopicChange =(event)=>{
        this.setState({
            topic: event.target.value
        })
    }

    
    
    handleSubmit = (event) =>{
        event.preventDefault()
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        
    }


    render() {
        return (
           <form onSubmit = {this.handleSubmit}>
               <div>
                   <label> UserName </label>
                   <input type = 'text' 
                   value={this.state.username}
                   onChange= {this.handleusernameChange}
                   ></input>
               </div>

               <div>
                   <label> comment </label>
                   <input type = 'text' 
                   value={this.state.comment}
                   onChange= {this.handlecommentChange}
                   ></input>
               </div>
               <div>
                   <label> Topic </label>
                   <select 
                   value={this.state.topic}
                   onChange= {this.handleTopicChange}
                   >
                       <option value='react'> React </option>
                       <option value='angular'> Angular </option>
                       <option value='vue'> vue </option>
                   </select> 
               </div>

            <button type='submit'> click me </button>
           </form>
        )
    }
}

export default Form
