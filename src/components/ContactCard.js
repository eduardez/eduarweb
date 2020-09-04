import React from 'react';
import './css/contactCard.css'
import {ReactSVG} from 'react-svg'

export default class ContactCard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const mapped_rrss = this.props.rrss.map(function(data){
            return(
                <div className='rrss_container'
                    style={{
                        background: data.bg, 
                        color: data.color, 
                        fill:data.color}}
                    >
                    <ReactSVG  
                        className='rrss_icon'
                        src={data.icon}/>
                    <p className='rrss_name'> {data.name} </p>
                    <a  className='button rrss_link'
                        href={data.link}
                        target='_blank'
                        style={{background:data.color, color: data.bg}}
                        > Open </a>
                </div>
            )
        })
        return(
            <div className='contact_card' >
                <h1 style={{alignSelf:'center'}}>{this.props.title}</h1>
                <div className='contact_container' >
                    {mapped_rrss}
                </div>
            </div>
            
        )
    }
}