import {combineReducers} from 'redux'
import ColorReducer, {initialScheme} from './reducer-colors'
import LanguageReducer, {initialLang} from './reducer-langs'
import {activeThemeReducer, activeLangReducer} from './reducer-activeReducers'

const combinedReducers = combineReducers({
    colors: ColorReducer,
    lang:LanguageReducer,
    activeTheme: activeThemeReducer,
    activeLang: activeLangReducer
})

const initialState = ({
    activeTheme: initialScheme,
    activeLang: initialLang
})


export {combinedReducers, initialState}





