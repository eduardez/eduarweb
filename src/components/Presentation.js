import React from 'react';
import './css/presentation.css'
import Anime from 'react-anime'

import profile from '../assets/img/finale.png'


export default class Presentation extends React.Component{
    constructor(props){
        super(props)
        this.state={
            pos_adjetivo:0
        }
    }


    componentDidMount() {
        this.timeout = setInterval(() => {
          let curro_pos_adjetivo = this.state.pos_adjetivo;
          this.setState({ pos_adjetivo: curro_pos_adjetivo + 1 });
        }, 3000);
      }
    
      componentDidUnmount() {
        clearInterval(this.timeout);
      }
    

    render(){
        const config = {
            loop:true, 
            opacity:[0,1],
            direction:'alternate',
            duration:1500,
            easing:'cubicBezier(0.420, 0.000, 0.000, 0.995)'
        }

        let adjetivo_mostrado = this.props.adj[this.state.pos_adjetivo % this.props.adj.length];

        return(
                <div className='home_presentation'>
                    <img className='home_presentation_image' key='pres_image' alt='edulmage' src={profile}/>
                    <div className='home_presentation_text'>
                        <p id='pres_nombre'>Eduardo Garcia Aparicio</p>
                        <Anime {...config} >
                            <p>{adjetivo_mostrado}</p>
                        </Anime>
                    </div>
                </div>
        )
    }
}