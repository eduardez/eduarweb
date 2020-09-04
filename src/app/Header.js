import React from 'react';
import Anime from 'react-anime'

import './header.css'
import profile from '../assets/img/profile.jpg'
import { FaFortAwesome,FaGitkraken,FaLaravel } from "react-icons/fa";
import {ThemeButton} from '../components'
import {connect} from 'react-redux'

const iconify = (name, icon, ref, accent, font_color) =>{
    return(
        <div className='navBar_link' href={ref}>
            <a href={ref} className='name' style={{color: font_color}}>{name}</a>
            <div className="underbar" style={{background: accent}}></div>
            <a href={ref} className='icon' style={{color: font_color}}>{icon}</a>
        </div>
    )
}

class Header extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.addScrollController()
    }

    addScrollController(){
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navigation_bar").style.top = "0";
            } else {
                document.getElementById("navigation_bar").style.top = "-5em";
            }
        prevScrollpos = currentScrollPos;
        } 
    }

    render(){
        return(
            <div className='navBar' id='navigation_bar'
                style={{
                    color: this.props.activeTheme.header_color, 
                    background: this.props.activeTheme.header_bg
                }}>
                <img className='navBar_logo' src={profile}/>
                <div className='navBar_container'>
                    <Anime opacity={[0,1]} duration={5000}>
                        {iconify(this.props.activeLang.navBar.tab_1, <FaFortAwesome/>, '#/', this.props.activeTheme.accent, this.props.activeTheme.header_color)}
                        {iconify(this.props.activeLang.navBar.tab_2, <FaLaravel/>, '#/trabajos',this.props.activeTheme.accent, this.props.activeTheme.header_color)}
                        {iconify(this.props.activeLang.navBar.tab_3, <FaGitkraken/>, '#/about',this.props.activeTheme.accent, this.props.activeTheme.header_color)}
                        <ThemeButton />
                    </Anime>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        activeTheme: state.activeTheme,
        activeLang: state.activeLang
    }
}

export default connect(mapStateToProps)(Header) 