import React from 'react'
import {connect} from 'react-redux'
import {Scene, Entity} from 'aframe-react'


class Room extends React.Component{
        constructor(){
                super()
                this.state = {
                        play: "false"
                }
                this.handleClick= this.handleClick.bind(this)
        }
        async handleClick(evt){
                evt.preventDefault();
                console.log('clicked on monalisa')
                await this.setState({
                        play: "true"
                })
                console.log('state: ', this.state.play)
        }

        render(){
                return(
                <Entity>

                        <Entity primitive = "a-image" classname = "Mona Lisa" src ="#MonaLisa" position="0 3 11.9" width="2.3" height="4" rotation="0 180 0"
                                events={{click: this.handleClick}}>
                                <Entity primitive ="a-sound" src = "#monaDescription" autoplay= {this.state.play}/>
                        </Entity>
                        <Entity primitive = "a-image" classname = "VanGoghPortrait" src ="#VanGoghPortrait" position="6 3 11.9" width="2.7" height="4" rotation="0 180 0"/>
                        <Entity primitive = "a-image" classname = "Cezanne1" src ="#Cezanne1" position="7 3 -6.1" width="5" height="4" rotation="0 180 0"/>
                        <Entity primitive = "a-image" classname = "Garden" src ="#Garden" position="-7 3 -6.1" width="5" height="4" rotation="0 180 0"/>
                        <Entity primitive = "a-image" classname = "ManetPortrait" src ="#ManetPortrait" position="-6 3 11.9" width="2.7" height="4" rotation="0 180 0"/>
                        <Entity primitive = "a-image" classname = "VanGogh" src ="#VanGogh" position="-12 3 3.1" width="6" height="4" rotation="0 90 0"/>
                        <Entity primitive = "a-image" classname = "Dejeuner" src ="#Dejeuner" position="-12 3 -13.9" width="6" height="4" rotation="0 90 0"/>
                        <Entity primitive = "a-image" classname = "Lac" src ="#Lac" position="12 3 -13.9" width="7" height="4" rotation="0 90 0"/>
                        <Entity primitive = "a-image" classname = "Cezanne" src ="#Cezanne" position="12 3 3.1" width="7" height="4" rotation="0 90 0"/>
                        <Entity id="myCameraPosition" position="0 0 50" />
                        <Entity primitive = "a-camera" classname = "camera" position = "3 0 0"/>
                
                        <Entity className="floor" static-body
                                geometry="primitive: box; width: 25; height: 65; depth:0.5"
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
                                position="-7.5 -0 -22.5"
                                rotation="180 180 0"
                                material={`shader: flat; src: #wallGrey ; repeat: 5 2`}/> 
                        <Entity className="second frontWall" static-body
                                geometry="primitive: box; width: 10; height: 12.5;"
                                position="7.5 -0 -22.5"
                                rotation="180 180 0"
                                material={`shader: flat; src: #wallGrey ; repeat: 5 2`}/>

                        <Entity className="Sep Wall" static-body
                                geometry="primitive: box; width: 10; height: 12.5;"
                                position="7.5 -0 -5.5"
                                rotation="180 180 0"
                                material={`shader: flat; src: #wallGrey ; repeat: 5 2`}/>  
                        <Entity className="Sep Wall" static-body
                                geometry="primitive: box; width: 10; height: 12.5;"
                                position="-7.5 -0 -5.5"
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