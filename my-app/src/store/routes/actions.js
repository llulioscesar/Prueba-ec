export const ROUTES_SET_TERM = 'ROUTER_SET_TERM';
export const ROUTES_SET = 'ROUTES_SET';
export const ROUTER_SET_LOADING = 'ROUTES_SET_LOADING';
export const ROUTER_SET_FIND_PARENT = 'ROUTER_SET_FIND_PARENT';
export const ROUTER_GET_ALL = 'ROUTER_GET_ALL'
export const ROUTER_DELETE = 'ROUTER_DELETE';
export const ROUTER_NEW = 'ROUTER_NEW';

export const routesSetFindParent = (find) => ({type: ROUTER_SET_FIND_PARENT, payload: find});
export const routesSetTermAction = (term) => ({type: ROUTES_SET_TERM, payload: term});
export const routerSet = (routes) => ({type: ROUTES_SET, payload: routes});
export const routerSetLoading = (loading) => ({type: ROUTER_SET_LOADING, payload: loading});
export const routerGet = () => ({type: ROUTER_GET_ALL});
export const routerDelete = (id) => ({type: ROUTER_DELETE, payload: id});
export const routerNew = (route) => ({type: ROUTER_NEW, payload: route});