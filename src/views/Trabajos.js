import React from 'react';
import {CustomContainer, Card} from '../components'
import './css/trabajos.css'
import {connect} from 'react-redux'

class Trabajos extends React.Component{

    render(){
        var information_mapped = this.props.activeLang.trabajos.map(function(info){
            return (<Card 
                id='trabajos_div_card' 
                title={info.title} 
                image={info.icon} 
                card_text={info.description}
                footer={info.footer}
                />)
        })
        
        return(
            <CustomContainer>
                {window.scrollTo(0, 0)}
                <div className='trabajos_div'>
                    {information_mapped}
                </div>
            </CustomContainer>
        )
    }
}

function mapStateToProps(state){
    return{
        activeLang: state.activeLang
    }
}


export default connect(mapStateToProps)(Trabajos)