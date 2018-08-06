import React from 'react'
import {Entity, Scene} from 'aframe-react';
import {connect} from 'react-redux'
import 'aframe-room-component'
import Room from './Room'
import MovieRoom from './MovieRoom'
import 'aframe-look-at-component'

class VR extends React.Component {
    constructor(props) {
        super(props);
        this.state={color: 'red'};
    }

    changeColor() {
        const colors=['red', 'orange', 'yellow', 'green', 'blue'];
        this.setState({
        color: colors[Math.floor(Math.random() * colors.length)]
    });
    }

    render () {
        return (
        <Scene >
            <a-assets>
            <img crossOrigin="anonymous " alt="descriptiveImage" id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
            <img crossOrigin="anonymous"alt="descriptiveImage" id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
            <img crossOrigin="anonymous"alt="descriptiveImage" id="wallGrey" src="Wall Paint.jpg" />
            <img crossOrigin="anonymous" alt="descriptiveImage" id="netflix" src="https://ucarecdn.com/3de19143-0fd3-4a35-9e4d-e5ba031a194f/"/>
            <img crossOrigin="anonymous" alt="descriptiveImage" id="starSky" src="https://ucarecdn.com/1d9107f8-734c-48cc-b6e2-865af551a73a/"/>
            <img crossOrigin="anonymous" alt="descriptiveImage" id="parquet" src="marble.jpg"/>
            <img crossOrigin="anonymous" alt="descriptiveImage" id="MonaLisa" src="mona-lisa-framed.jpeg" />
            <img crossOrigin="anonymous" alt="descriptiveImage" id="VanGoghPortrait" src="Van-Gogh-portrait.jpg" />
            <img crossOrigin="anonymous" alt="descriptiveImage" id="VanGogh" src="Van-Gogh.jpg" />
            <img crossOrigin="anonymous" alt="descriptiveImage" id="Cezanne" src="Cezanne.jpg" />
            <img crossOrigin="anonymous" alt="descriptiveImage" id="ManetPortrait" src="Manet-Portrait.jpg" />
            <img crossOrigin="anonymous" alt="descriptiveImage" id="Cezanne1" src="Cezanne-Sainte-Victoire.jpg" />
            <img crossOrigin="anonymous" alt="descriptiveImage" id="Dejeuner" src="Dejeuner.jpg" />
            <img crossOrigin="anonymous" alt="descriptiveImage" id="Lac" src="Monet-Lac.jpg" />
            <img crossOrigin="anonymous" alt="descriptiveImage" id="Garden" src="Monet Garden.jpg" />
            <img crossOrigin="anonymous" alt="descriptiveImage" id="MovieWall" src="M-wall3.jpg" />            
            <img crossOrigin="anonymous" alt="descriptiveImage" id="Boat" src="dicaprio.jpg" />            
            <img crossOrigin="anonymous" alt="descriptiveImage" id="Forrest" src="M-Forrest.jpg" />
            <img crossOrigin="anonymous" alt="descriptiveImage" id="GoodWill" src="M-goodWill.jpg" />
            <img crossOrigin="anonymous" alt="descriptiveImage" id="Hitch" src="M-hitch.jpg" />
            <img crossOrigin="anonymous" alt="descriptiveImage" id="Dicaprio" src="M-titanic-Poster.jpg" />
            <img crossOrigin="anonymous" alt="descriptiveImage" id="Pulp" src="M-Pulp.jpg" />
            <img crossOrigin="anonymous" alt="descriptiveImage" id="Sable" src="https://ucarecdn.com/808d625d-3fdf-40d2-9cdf-959bcecb107b/" />
            <img crossOrigin="anonymous" alt="descriptiveImage" id="instructions" src="Instructions.jpg" />
            {/* <video crossOrigin="anonymous" id="Titanic" autoPlay loop="true" src="M-Titanic.mp4"></video> */}

            <audio crossOrigin="anonymous"id="monaDescription" src="monalisaDescription.mp3"/>
            <audio crossOrigin="anonymous" id="sound2" src="Bach.mp3"/>
            <audio crossOrigin="anonymous" id="kiss" src="kissScene.mp3"/>
            <audio  crossOrigin="anonymous"id="sound1" src="https://ia801002.us.archive.org/12/items/FredericChopinNocturneOp.9No.1InBFlatMinor/Frederic%20Chopin%20-%20Nocturne%20Op.%209%2C%20no.%201%20in%20B%20flat%20minor.ogg" />
            </a-assets>

            <Entity primitive="a-light" type="ambient" color="#445451"/>
            <Entity primitive="a-light" type="point" intensity=".5" position="2 4 4"/>
            <Entity primitive="a-sky" className="sky" src="#starSky" rotation="0 90 0"/>
            
            <Entity particle-system={{preset: 'snow', particleCount: 2000}}/>
            <Entity text={{value: `Thanks For Visiting ${this.props.name}!`, align: 'center', height : 6, width:6}} position={{x: 0, y: 2, z: -22}} />

            {this.props.music !=='Bach'? <Entity primitive="a-sound" src="#sound1" autoPlay="true"/>:  <Entity primitive="a-sound" src="#sound2" autoPlay="true"/> }

            <Entity id="box"
                geometry={{primitive: 'box'}}
                material={{color: this.state.color, opacity: 0.6}}
                animation__rotate={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
                animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
                position={{x: 0, y: 1, z: -26}}
                static body
                events={{click: this.changeColor.bind(this)}}>
                    <Entity animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '2 2 2'}}
                            geometry={{primitive: 'box', depth: 0.2, height: 0.2, width: 0.2}}
                            material={{color: '#24CAFF'}}/>
            </Entity>

                {this.props.theme==="Art-Moderne"? <Room />: <MovieRoom />}
            <Entity primitive="a-camera" position="0 0 -28" rotation=" 0 180 0"   id="cameraStarter">
                <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
            </Entity>
            <Entity text={{value: `Hi ${this.props.name}!`, align: 'center', height : 6, width:6}} position={{x: 0, y: 2, z: -23}} rotate="0 360 0"look-at="#cameraStarter"  />
        </Scene>
        );
    }
}

const mapState=(state)=>{
    return{
        name: state.user.name,
        theme: state.theme.selectedTheme,
        music: state.music.song
    }
}

export default connect(mapState)(VR)