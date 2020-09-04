import React from 'react';
import anime from 'animejs'

import {bindActionCreators} from 'redux'
import  {connect} from 'react-redux'
import {selectTheme, selectLang} from '../redux/actions'

import './css/themeButton.css'
import {ReactSVG} from 'react-svg'
import arrow_down from '../assets/svg/arrow_down.svg'

class ThemeButton extends React.Component{
    constructor(props){
        super(props)
        this.state={
            active_color: 'black',
            drop_open: false
        }
        this.isOpen = false
        this.changeTheme = this.changeTheme.bind(this)
        this.changeLang = this.changeLang.bind(this)
    }


    openDropdown(){
        var isOpen = this.state.drop_open
        const dropdown_timeline = anime.timeline({
            duration: 500,
            easing: 'easeOutExpo',
            direction: isOpen ? 'reverse' : 'normal'
        });

        const opt_timeline = anime.timeline({
            duration: 350,
            easing: 'easeOutExpo'
        });

        const arrow_timeline = anime.timeline({
            duration: 500,
            easing: 'easeOutExpo'
        })

        dropdown_timeline.add({
            targets: '.dropdown_body',
            opacity: isOpen ? '0%' : '100%',
           
        })

        opt_timeline.add({
            targets:'#dropdown_option',
            translateX: isOpen ? -100 : 0,
            opacity: isOpen ? '0%' : '100%',
            delay: function(el, i, l) {
                return i * 100;
              },
            endDelay: function(el, i, l) {
                return (l - i) * 100;
            }
        })
        
        arrow_timeline.add({
            targets:'.dropdown_arrow',
            rotate: isOpen ? 0 : 180
        })

        this.setState({drop_open: !isOpen})

    }



    changeTheme(color_scheme){
        this.props.selectTheme(color_scheme)
        this.openDropdown()
    }

    changeLang(language){
        this.props.selectLang(language)
        this.openDropdown()
    }

    render(){
        var all_schemes = this.props.colors.map((col) => {
            return(
                <div 
                    key={col} 
                    id="dropdown_option" 
                    onClick={() => this.changeTheme(col)}
                    style={{
                        transform: 'translateX(-100px)', 
                        opacity: '0',
                        cursor:'pointer',
                        }}
                    > 
                        {col.name}
                        <div className='dropdown_option_color' style={{background:col.primary}}/>
                    </div>
            )
        });

        var all_langs = this.props.langs.map((lng) => {
            return(
                <div
                    key={lng}
                    className='dropdown_lang'
                    id={'dropdown_option'}
                    onClick={() => this.changeLang(lng)}>
                    {lng.name}
                    <ReactSVG  
                        className='dropdown_languaje_icon'
                        src={lng.icon}
                    />
                </div>
            )
        })

        return(
            
            <div className='theme_dropdown'
                style={{
                    color:this.props.activeTheme.header_color,
                    fill:this.props.activeTheme.header_color,
                }}>
                <div className='dropdown_header' onClick={() => this.openDropdown()} >
                    {this.props.activeTheme.name} 
                    <ReactSVG  
                        className='dropdown_arrow'
                        src={arrow_down}
                    />
                </div>
                <div className='dropdown_body' 
                    id='theme_dropdown_body' 
                    style={{ display: this.state.drop_open ? 'flex' : 'none'}}>
                        {all_schemes}
                        {all_langs}
                </div>
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        colors: state.colors,
        langs: state.lang,
        activeTheme: state.activeTheme,
        activeLang: state.activeLang
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectTheme: selectTheme, selectLang: selectLang}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ThemeButton)