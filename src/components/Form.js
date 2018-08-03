import React from 'react'
import {setName} from '../reducer/user'
import {setTheme} from '../reducer/theme'
import {setMusic} from '../reducer/music'
import{connect} from 'react-redux'
import { Button, Jumbotron } from 'react-bootstrap';

class Form extends React.Component{
    constructor(){
        super()
        this.state= {
            name: '',
            theme: '',
            music: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    async handleChange(event){
        if(event.target.name === "Name"){
            await this.setState({
                name: event.target.value
            })
        }
        else if(event.target.name === 'Theme'){
            await this.setState({
                theme: event.target.value
            })
        }
        else if(event.target.name === 'Music'){
            await this.setState({
                music: event.target.value
            })
        }
        console.log('LOCAL STATE: ',this.state)
    }
    async handleSubmit(event){
        event.preventDefault();
        await this.props.setName(this.state.name)
        await this.props.setTheme(this.state.theme)
        await this.props.setMusic(this.state.music)
        console.log( "Store music: ", this.props.music, "Store name: ", this.props.name, "Store theme: ", this.props.theme)
        this.props.history.push('/home')
    }
    render(){
        return(
            <div>
                <Jumbotron>
                    <h1>Welcome to the VR museum!</h1>
                    <p>
                        This webXR experience was implemented with JavaScript, React, Redux, AFrame, and Aframe react. 
                    </p>
                    <p>
                        <a href = "https://github.com/vli8/VR-Project"><Button bsStyle="primary">Learn more</Button></a>
                    </p>
                </Jumbotron>

                <form onSubmit = {this.handleSubmit}>
                    <input placeholder="Name" name = 'Name'  onChange = {this.handleChange} />

                    <select name = "Theme" onChange = {this.handleChange}>
                        <option>Please select one theme </option>
                        <option value="Art-Moderne">Art-Moderne</option>
                        <option value="Movie">Movie</option>
                    </select>

                    <select name = "Music" onChange = {this.handleChange}>
                        <option>Please select the music </option>
                        <option value="Chopin">Chopin</option>
                        <option value="Mozart">Mozart</option>
                    </select>

                    <Button bsStyle = "primary" type="submit"> submit </Button>
                </form>

            </div>
        )
    }
}

const mapState = (state)=>{
    return{
        name: state.user.name,
        theme: state.theme.selectedTheme,
        music: state.music.song
    }
}
const mapDispatch = (dispatch)=>{
    return{
        setName: (name)=>dispatch(setName(name)),
        setTheme: (theme)=>dispatch(setTheme(theme)),
        setMusic: (music)=>dispatch(setMusic(music))
        
    }
}

export default connect(mapState, mapDispatch)(Form)