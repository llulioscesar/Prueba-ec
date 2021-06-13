import {ROUTER_SET_LOADING, ROUTES_SET, ROUTES_SET_TERM, ROUTER_SET_FIND_PARENT} from './actions';

const stateRoutesSearchInitial = {
    term: '',
    routes: [],
    loading: false,
    findParent: true,
}


const stateHome = {
    routes: [],
}


export const routesSearchReducer = (state = stateRoutesSearchInitial, action) => {
    const {type, payload} = action;

    switch (type) {
        case ROUTES_SET_TERM:
            return Object.assign({}, state, {term: payload});
        case ROUTES_SET:
            return Object.assign({}, state, {routes: payload});
        case ROUTER_SET_LOADING:
            return Object.assign({}, state, {loading: payload});
        case ROUTER_SET_FIND_PARENT:
            return Object.assign({}, state, {findParent: payload});
        default:
            return state;
    }
}

export const routesGetReducer = (state = stateHome, action) => {
    const {type, payload} = action;
    switch (type) {
        case ROUTES_SET:
            return Object.assign({}, state, {routes: payload});
        default:
            return state;
    }
}