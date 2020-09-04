import React from 'react';
import './LevelCard.css'
import LevelSprite from './LevelSprite'
import SkyLight from 'react-skylight';
import {ReactSVG} from 'react-svg'
import {connect} from 'react-redux'


import {AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlinePlusCircle} from 'react-icons/ai'

class LevelUniverse extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            level_visib: [],
        }
        this.cambiarLevel = this.cambiarLevel.bind(this)
        this.getModalStyle = this.getModalStyle.bind(this)
    }

    async componentDidMount(){
        var array_visib = []
        for (let index = 0; index < this.props.activeLang.levels.length; index++) {
            array_visib.push(false)
        }
        array_visib[0] = true
        await this.setState({
            level_visib: array_visib
        })
    }

    cambiarLevel = (isAvance) =>{
        var arr_visib = this.state.level_visib
        var activo = arr_visib.indexOf(true)
        var new_activo = mod((activo + ( isAvance ? 1 : -1)), arr_visib.length)
        arr_visib[activo] = false
        arr_visib[new_activo] = true
        this.setState({level_visib: arr_visib})
    }

    getModalStyle(){
        var dialogStyle = {
            backgroundColor: this.props.activeTheme.body_bg,
            color: this.props.activeTheme.body_color,
            top: '40vh',
            width: '50%',
            height: '70%',
            paddingBottom: '20px',
            left: '50%',
            overflowY: 'auto'

        }
        return dialogStyle
    }

    render(){
        const niveles_mapped = this.props.activeLang.levels.map(function(nivel, index){
            return(
                <LevelSprite datos={nivel} key={index} display={this.state.level_visib[index]}/>
            )
        }, this)

        const niveles_dialog = this.props.activeLang.levels.map(function(nivel){
            return(
                <div className='level_sprite_simple_container'>
                    <div className='level_sprite_simple_container_svg'
                        style={{
                            stroke: this.props.activeTheme.svg_color,
                            fill: this.props.activeTheme.svg_color}}>
                    <ReactSVG
                        key={nivel.level + nivel.name + nivel.title} 
                        src={nivel.icon}
                    />
                    </div>
                    <div className='level_sprite_simple_data'>
                        <div className='level_sprite_simple_name'>
                            {nivel.name}
                        </div>                    
                        <div className='level_sprite_simple_title' >
                                    {nivel.title}
                        </div>
                    </div>
                </div>
            )
        }, this)
        return(
            <div className='level_display' >
                <SkyLight
                    isVisible={true}
                    hideOnOverlayClicked ref={ref => this.skillsDialog = ref} 
                    title="All my skills"
                    dialogStyles={this.getModalStyle()}>
                        <div className='level_simple_container' >
                            {niveles_dialog}
                        </div>
                </SkyLight>

                <h1 style={{alignSelf:'center'}}>What I Know</h1>
                <div className='level_container' >
                    <AiOutlinePlusCircle 
                        id='expand_skills' 
                        onClick={() => this.skillsDialog.show()}/>
                    <AiOutlineArrowLeft 
                        className='level_container_arrow' 
                        id='arrow_left' 
                        onClick={() => this.cambiarLevel(false)}/>
                    <div className='level_container_languages'>
                        {niveles_mapped}
                    </div>
                    <AiOutlineArrowRight 
                        className='level_container_arrow' 
                        id='arrow_right'
                        onClick={() => this.cambiarLevel(true)}/>
                </div>
            </div>
        )
    }
}

// HABIA QUE REIMPLEMENTAR LA FUNCION MOD DE JS 
// (No funcionaba bien para numeros negativos,
// pero no es culpa de js, es que mod para n. negativos
// no esta demasiado bien debinida en matematicas y cada
// entorno de desarrollo la implementa como le sale de
// los huevos)
function mod(n, m) {
    return ((n % m) + m) % m;
}



function mapStateToProps(state){
    return{
        activeTheme: state.activeTheme,
        activeLang: state.activeLang
    }
}


export default connect(mapStateToProps)(LevelUniverse)