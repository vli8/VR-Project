import React from 'react'
import {Entity, Scene} from 'aframe-react';
import {connect} from 'react-redux'
import 'aframe-room-component'
import Room from './Room'
import MovieRoom from './MovieRoom'

class VR extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: 'red'};
    }

    changeColor() {
        const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
        this.setState({
        color: colors[Math.floor(Math.random() * colors.length)]
    });
    }

    render () {
        return (
        <Scene>
            <a-assets>
            <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
            <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
            <img id = "wallGrey" src = "Wall Paint.jpg" />
            <img id = "netflix" src = "https://ucarecdn.com/3de19143-0fd3-4a35-9e4d-e5ba031a194f/"/>
            <img id = "starSky" src = "https://ucarecdn.com/1d9107f8-734c-48cc-b6e2-865af551a73a/"/>
            <img id = "parquet" src = "marble.jpg"/>
            <img id = "MonaLisa" src = "mona-lisa-framed.jpeg" />
            <img id = "VanGoghPortrait" src = "Van-Gogh-portrait.jpg" />
            <img id = "VanGogh" src = "Van-Gogh.jpg" />
            <img id = "Cezanne" src = "Cezanne.jpg" />
            <img id = "ManetPortrait" src = "Manet-Portrait.jpg" />
            <img id = "Cezanne1" src = "Cezanne-Sainte-Victoire.jpg" />
            <img id = "Dejeuner" src = "Dejeuner.jpg" />
            <img id = "Lac" src = "Monet-Lac.jpg" />
            <img id = "Garden" src = "Monet Garden.jpg" />
            <img id = "MovieWall" src = "M-wall3.jpg" />            
            <img id = "Boat" src = "dicaprio.jpg" />            
            <img id = "Forrest" src = "M-Forrest.jpg" />
            <img id = "GoodWill" src = "M-goodWill.jpg" />
            <img id = "Hitch" src = "M-hitch.jpg" />
            <img id = "Dicaprio" src = "M-titanic-Poster.jpg" />
            <img id = "Pulp" src = "M-Pulp.jpg" />
            <img id = "Sable" src = "https://ucarecdn.com/808d625d-3fdf-40d2-9cdf-959bcecb107b/" />
            <video id="Titanic" autoplay loop="true" src="M-Titanic.mp4"></video>

            {/* <item id="Nefertiti" src="Nefertiti.obj"></item>
            <item id="Nefertiti1" src="Nefertiti.mtl"></item> */}
            {/* <audio id = "sound" src ="https://cdn.aframe.io/basic-guide/audio/backgroundnoise.wav" /> */}
            <audio id = "sound1" src ="https://ia801002.us.archive.org/12/items/FredericChopinNocturneOp.9No.1InBFlatMinor/Frederic%20Chopin%20-%20Nocturne%20Op.%209%2C%20no.%201%20in%20B%20flat%20minor.ogg" />
            </a-assets>

            {/* <Entity primitive="a-plane" src="#parquet" rotation="-90 -1 0" height="100" width="100"/> */}
            {/* <Entity obj-model="obj: #Nefertiti; mtl: #Nefertiti1; width: 2; height: 2"/> */}
            <Entity primitive="a-light" type="ambient" color="#445451"/>
            <Entity primitive="a-light" type="point" intensity=".5" position="2 4 4"/>
            <Entity primitive = "a-sky" className="sky" src="#starSky" rotation="0 90 0"/>
            
            <Entity particle-system={{preset: 'snow', particleCount: 2000}}/>
            <Entity text={{value: `Hi ${this.props.name}!`, align: 'center', height : 6, width:6}} position={{x: 0, y: 2, z: -1}} />

            <Entity primitive= "a-sound" src= "#sound1" autoplay = "true"/>


            <Entity primitive = 'a-cylinder' position={{x:1, y:0.5, z: 2}} src = "#netflix">
                <Entity text={{value: `Ben is helping`, align: 'center', height : 6, width:6}} position={{x: 0, y: 1, z: 0}} />
            </Entity> 


            <Entity id="box"
            geometry={{primitive: 'box'}}
            material={{color: this.state.color, opacity: 0.6}}
            animation__rotate={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
            animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
            position={{x: 0, y: 1, z: -3}}
            static body
            events={{click: this.changeColor.bind(this)}}>
                <Entity animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '2 2 2'}}
                        geometry={{primitive: 'box', depth: 0.2, height: 0.2, width: 0.2}}
                        material={{color: '#24CAFF'}}/>
            </Entity>

                {this.props.theme === "Art-Moderne"? <Room />: <MovieRoom />}
            <Entity primitive="a-camera" position ="0 0 -28" rotation=" 0 180 0" >
                <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
            </Entity>
        </Scene>
        );
    }
}

const mapState = (state)=>{
    return{
        name: state.user.name,
        theme: state.theme.selectedTheme
    }
}

export default connect(mapState)(VR)