import React from 'react';
import './css/card.css'
import {ReactSVG} from 'react-svg'
import shortid from 'shortid';
import TrackVisibility from 'react-on-screen';
import {connect} from 'react-redux'


class Card extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='card' id={this.props.id}>
                <div className='card_header'>
                    {this.props.title}
                </div>
                <div className='card_body' id={this.props.body_type}>
                    <div style={{stroke: this.props.activeTheme.svg_color, fill: this.props.activeTheme.svg_color}}>
                        <TrackVisibility offset={500}>
                            <ReactSVG  
                                className='card_body_img'
                                id={this.props.extension_class}
                                key={shortid.generate()} 
                                src={this.props.image}
                            />
                        </TrackVisibility>
                    </div>
                    <div className='card_body_text'>{this.props.card_text}</div>
                </div>
                <div className='card_footer'>
                    {this.props.footer}
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


export default connect(mapStateToProps)(Card) 