import React from 'react';
import './css/home.css'
import {Presentation, Levels, ContactCard} from '../components'
import Anime from 'react-anime'
import {connect} from 'react-redux'



import github from '../assets/svg/social/github.svg'
import linked from '../assets/svg/social/linkedin.svg'
import twitter from '../assets/svg/social/twitter.svg'
import mail from '../assets/svg/social/mail.svg'

const rrss = [
    {
        name: 'GitHub',
        link: 'https://github.com/eduardez',
        icon: github,
        bg: '#FFFFFF',
        color: '#373332'
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/eduardo-garcia-aparicio-3ba073167/',
        icon: linked,
        bg: '#1685AF',
        color: '#FEFEFE'
    },
    {
        name: 'Mail',
        link: 'mailto:eduardo.garcia.aparicio@gmail.com',
        icon: mail,
        bg: '#D6483D',
        color: '#FEFEFE'
    },
    {
        name: 'Twitter',
        link: 'https://twitter.com/EduGarciaAp',
        icon: twitter,
        bg: '#3991F3',
        color: '#FFFFFF'
    },
    
]

class Home extends React.Component{

    render(){
        return(
            <Anime opacity={[0, 1]} duration={3000}>
                {window.scrollTo(0, 0)}
                <Presentation adj={this.props.activeLang.home.adj}/>
                <div className='home_body'>
                    <Levels 
                        niveles={this.props.activeLang.home.levels} 
                        title={this.props.activeLang.home.header_1}/>
                    <ContactCard 
                        title={this.props.activeLang.home.header_3}
                        rrss={rrss}
                        open_label={this.props.activeLang.home.open}/>
                    
                </div>
           </Anime>
        )
    }
}


function mapStateToProps(state){
    return{
        activeLang: state.activeLang
    }
}


export default connect(mapStateToProps)(Home)