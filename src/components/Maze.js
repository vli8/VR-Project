import React from 'react'
import {connect} from 'react-redux'
import {Scene, Entity} from 'aframe-react'
// import AFRAME from "aframe-core"
// import {component as draw} from "aframe-draw-component"
// import {component as textwrap} from "aframe-textwrap-component"
// AFRAME.registerComponent("draw", draw);
// AFRAME.registerComponent("textwrap", textwrap);



class Maze extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
        <Entity>
            <a-maze id="maze1" 
            maze='size: 5 6; wall: #wall-one; cap: #end-cap; open: S 0 N 1 2 4 E 5;' 
            position='0 0.5 0'
            rotation='0 0 0'></a-maze>

            
        </Entity>
        )
    }
}
export default connect(null)(Maze)