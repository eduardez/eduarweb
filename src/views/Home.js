import React from 'react';
import './css/home.css'
import {Presentation, Levels, ContactCard} from '../components'
import Anime from 'react-anime'



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
export default class Home extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <Anime opacity={[0, 1]} duration={3000}>
                {window.scrollTo(0, 0)}
                <Presentation />
                <div className='home_body'>
                    <Levels />
                    <div className='dummy_div'/>
                    <ContactCard rrss={rrss}/>
                    
                </div>
           </Anime>
        )
    }
}