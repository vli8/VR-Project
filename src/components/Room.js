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
                   <Entity className="floor" static-body
                geometry="primitive: box; width: 25; height: 55; depth:0.5"
                position="0 -0.25 0"
                rotation="-90 0 0"
                material={`shader: flat; src:#parquet ; repeat: 15 10`}/>
        <Entity className="backWall" static-body
                geometry="primitive: box; width: 25; height: 12.5;"
                position="0 -0 12.5"
                rotation="180 180 0"
                material={`shader: flat; src: #wallGrey ; repeat: 5 2`}/>
         <Entity className="first frontWall" static-body
                geometry="primitive: box; width: 10; height: 12.5;"
                position="-7.5 -0 -17.5"
                rotation="180 180 0"
                material={`shader: flat; src: #wallGrey ; repeat: 5 2`}/> 
        <Entity className="second frontWall" static-body
                geometry="primitive: box; width: 10; height: 12.5;"
                position="7.5 -0 -17.5"
                rotation="180 180 0"
                material={`shader: flat; src: #wallGrey ; repeat: 5 2`}/>      
        <Entity className="leftWall" static-body
                geometry="primitive: box; width: 35; height: 17; depth:0.5"
                position="-12.5 -2.2 -5"
                rotation="180 90 0"
                material={`shader: flat; src: #wallGrey ; repeat: 5 1`}/>
        <Entity className="rightWall" static-body
                geometry="primitive: box; width: 35; height: 17; depth:0.5"
                position="12.5 -2.2 -5"
                rotation="180 90 0"
                material={`shader: flat; src: #wallGrey; repeat: 5 1`}/>
        </Entity>
        )
    }
}
export default connect(null)(Room)