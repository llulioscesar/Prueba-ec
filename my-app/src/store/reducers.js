import {combineReducers} from 'redux';
import {routesSearchReducer, routesGetReducer} from './routes/reducer'

export default combineReducers({
    routesSearch: routesSearchReducer,
    home: routesGetReducer
})