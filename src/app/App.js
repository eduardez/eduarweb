import React from 'react';
import './App.css';

import {HashRouter} from 'react-router-dom';
import Header from './Header'
import RouteSwitcher from './RouteSwitcher'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {combinedReducers, initialState} from '../redux/reducers'
const store = createStore(combinedReducers, initialState)
//console.log(store.getState())

export default class App extends React.Component{
  constructor(props){
    super(props)

  }

  render(){
    return(
      <Provider store={store}>
        <HashRouter basename="/">
          <div className="App">
            <Header/>
            <RouteSwitcher />
          </div>
        </HashRouter>
      </Provider>
    )
  }
}
