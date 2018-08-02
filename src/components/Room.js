import React from 'react'
import {connect} from 'react-redux'
import {Scene, Entity} from 'aframe-react'
// import AFRAME from "aframe-core"
// import {component as draw} from "aframe-draw-component"
// import {component as textwrap} from "aframe-textwrap-component"
// AFRAME.registerComponent("draw", draw);
// AFRAME.registerComponent("textwrap", textwrap);



class Room extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
        <Entity>
            <Entity 
                primitive = "a-box" height= "1" width = "10" depth ="10"
                position="0 4 -8"
                rotation="-90 0 0"
                src = "#netflix"
                message = "hello world">
                    <Entity text={{value: `Ben is helping`, align: 'center', height : 6, width:6}} position={{x: 0, y: 1, z: 0}} />
            </Entity>

            <a-entity id="box" geometry="primitive: box" position="0 2 0" draw="background: #D7E8FF" textwrap="textAlign: center; x: 128; y: 128; text: Hello world!"></a-entity>


            <Entity static-body
                primitive = "a-box" height= "1" width = "10" depth ="10"
                position="8 4 0"
                rotation="0 0 -90"
                src = "#wallGrey"/> 
        </Entity>
        )
    }
}
export default connect(null)(Room)