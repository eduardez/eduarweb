import React from 'react';
import './LevelSprite.css'

import {ReactSVG} from 'react-svg'
import {connect} from 'react-redux'


class LevelSprite extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <div 
                className={'level_sprite_container' + (this.props.display ? ' active' : '')}>
                <div className='level_sprite_svg'
                    style={{
                        stroke: this.props.activeTheme.svg_color,
                        fill: this.props.activeTheme.svg_color}}>
                    <ReactSVG  
                        id={this.props.extension_class}
                        key={this.props.datos.level + this.props.datos.name} 
                        src={this.props.datos.icon}
                    />
                </div>
                <div className='level_data'>
                    <div className='level_data_name'>
                        {this.props.datos.name}
                    </div>
                </div>
                <div className='level_title' >
                                {this.props.datos.title}
                </div>
                <div className='level_bar' style={{background: this.props.activeTheme.accent}}>
                    <div className='level_progress' 
                        style={{
                            background: this.props.activeTheme.header_bg,
                            width: ( '' + (this.props.display ? this.props.datos.level : '0') + '%')}}>
                            <p style={{color: this.props.activeTheme.header_color}}>{'Level ' + this.props.datos.level}</p>
                    </div>
                    
                </div> 
                <div className='level_sprite_comment'>
                    {this.props.datos.comments}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        activeTheme: state.activeTheme
    }
}


export default connect(mapStateToProps)(LevelSprite) 