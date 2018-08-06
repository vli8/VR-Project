import React from 'react'
import {connect} from 'react-redux'
import {Entity} from 'aframe-react'



class MovieRoom extends React.Component{
    render(){
        return(
            <Entity>
                <Entity primitive="a-image" classname="Forrest" src="#Forrest" position="7 3 -6.1" width="5" height="4" rotation="0 180 0"/>
                <Entity primitive="a-image" classname="GoodWill" src="#GoodWill" position="-7 3 -6.1" width="5" height="4" rotation="0 180 0"/>
                <Entity primitive="a-image" classname="Hitch" src="#Hitch" position="-12 3 -13.9" width="6" height="4" rotation="0 90 0"/>
                <Entity primitive="a-image" classname="Boat" src="#Boat" position="12 3 -13.9" width="7" height="4" rotation="0 90 0"/>
                <Entity primitive="a-image" classname="Pulp" src="#Pulp" position="12 3 3.1" width="7" height="4" rotation="0 90 0"/>
                <Entity id="myCameraPosition" position="0 0 50" />
                <Entity primitive="a-camera" classname="camera" position="3 0 0"/>

                <Entity primitive="a-video" src="#Titanic" autoPlay  width="8" height="4" position="0 3 11.9"/>
                <video crossOrigin="anonymous" id="Titanic" autoPlay loop="true" src="M-Titanic.mp4"></video>


                <Entity primitive="a-image" classname="instructions" src="#instructions" position="6.5 3 -23.1" width="5" height="4" rotation="0 180 0"/>

                <Entity className="floor" static-body 
                    geometry="primitive: box; width:25; height:65; depth: 0.5"
                    position="0 -0.25 0"
                    rotation="-90 0 0"
                    material={`shader: flat; src:#Sable ; repeat: 15 10`}/>

                <Entity className="backWall" static-body
                    geometry="primitive: box; width: 25; height: 12.5;"
                    position="0 -0 12.5"
                    rotation="180 180 0"
                    material={`shader: flat; src: #MovieWall ; repeat: 5 2`}/>

                <Entity className="first frontWall" static-body
                    geometry="primitive: box; width: 10; height: 12.5;"
                    position="-7.5 -0 -22.5"
                    rotation="180 180 0"
                    material={`shader: flat; src: #MovieWall ; repeat: 5 2`}/> 

                <Entity className="second frontWall" static-body
                    geometry="primitive: box; width: 10; height: 12.5;"
                    position="7.5 -0 -22.5"
                    rotation="180 180 0"
                    material={`shader: flat; src: #MovieWall ; repeat: 5 2`}/>

                <Entity className="Sep Wall" static-body
                    geometry="primitive: box; width: 10; height: 12.5;"
                    position="7.5 -0 -5.5"
                    rotation="180 180 0"
                    material={`shader: flat; src: #MovieWall ; repeat: 5 2`}/>  

                <Entity className="Sep Wall" static-body
                    geometry="primitive: box; width: 10; height: 12.5;"
                    position="-7.5 -0 -5.5"
                    rotation="180 180 0"
                    material={`shader: flat; src: #MovieWall ; repeat: 5 2`}/> 

                <Entity className="leftWall" static-body
                    geometry="primitive: box; width: 35; height: 17; depth:0.5"
                    position="-12.5 -2.2 -5"
                    rotation="180 90 0"
                    material={`shader: flat; src: #MovieWall ; repeat: 5 1`}/>
                <Entity className="rightWall" static-body
                    geometry="primitive: box; width: 35; height: 17; depth:0.5"
                    position="12.5 -2.2 -5"
                    rotation="180 90 0"
                    material={`shader: flat; src: #MovieWall; repeat: 5 1`}/>

            </Entity>
                
        )
    }
}

export default connect(null)(MovieRoom)