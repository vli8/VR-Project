import React from 'react'
import {setName} from '../reducer/user'
import{connect} from 'react-redux'
import {Switch} from 'react-router-dom'

class Form extends React.Component{
    constructor(){
        super()
        this.state= {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState({
            name: event.target.value
        })
    }
    async handleSubmit(event){
        event.preventDefault();
        console.log('VALUE: ', event.target.value)
        await this.props.setName(this.state.name)
        this.props.history.push('/home')
    }
    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input placeholder="Name" name = 'Name'  onChange = {this.handleChange} />
                    <button type = "submit"> submit </button>
                </form>
            </div>
        )
    }
}

const mapState = (state)=>{
    return{
        name: state.user.name
    }
}
const mapDispatch = (dispatch)=>{
    return{
        setName: (name)=>dispatch(setName(name))
    }
}

export default connect(mapState, mapDispatch)(Form)