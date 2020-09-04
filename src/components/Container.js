import React from 'react';
import './css/container.css'
import Anime from 'react-anime'

export default class CustomContainer extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <div className='container'>
                <Anime opacity={[this.props.min_opacity,this.props.max_opacity]} duration={this.props.duration}>
                    {this.props.children}
                </Anime>
            </div>
        )
    }
}

CustomContainer.defaultProps = {
    duration: 5000,
    min_opacity: 0,
    max_opacity: 1
}