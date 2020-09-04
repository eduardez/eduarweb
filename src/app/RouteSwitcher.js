import React from 'react';
import './App.css'

import {Route, Switch, Redirect } from 'react-router-dom';
import {Home, Trabajos, About} from '../views'
import {connect} from 'react-redux'

class RouteSwitcher extends React.Component{
  constructor(props){
    super(props)
    this.location = ''

  }

  render(){
    return(
      <div className='app_body'
        style={{
          color: this.props.activeTheme.body_color,
          background: this.props.activeTheme.body_bg,
          }}>
        <Switch>
          
          <Route exact path="/" component={Home}/>
          <Route exact path="/trabajos" component={Trabajos}/>
          <Route exact path="/about" component={About}/>
          <Redirect to="/404" />
        </Switch>
      </div>
    )
  }
}


function mapStateToProps(state){
  return{
      activeTheme: state.activeTheme
  }
}


export default connect(mapStateToProps)(RouteSwitcher)