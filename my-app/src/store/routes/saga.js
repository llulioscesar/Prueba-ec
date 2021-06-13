import {put, call, select, takeEvery} from 'redux-saga/effects'
import {RoutesApi} from './api'
import {AXIOS_CONFIG} from '../../core/consts';
import {routerSet, ROUTES_SET_TERM, routerSetLoading, ROUTER_GET_ALL, ROUTER_DELETE, ROUTER_NEW} from './actions';

const api = new RoutesApi(AXIOS_CONFIG);

export function* getAll() {
    try {
        const resp = yield call(api.getAll);
        yield put(routerSet(resp));
    } catch (error) {
        console.error(error);
        yield put(routerSet([]));
    }
}

export function* deleteRoute({payload}) {
    try {
        yield call(api.delete, payload)
    } catch (error) {
        console.error(error);
    }
    yield call(getAll);
}

export function* createRoute({payload}) {
    try {
        yield call(api.newRoute, payload);
    } catch (error) {
        console.error(error);
    }
}

export function* getRoutesParentsForChildrenID({payload}) {
    yield put(routerSetLoading(true));
    try {
        const findParents = yield select(state => state.routesSearch.findParent);
        const resp = yield call(findParents ? api.getParentsForChildrenID : api.getChildrensForChildrenID, payload);
        yield put(routerSet(resp));
    } catch (error) {
        console.error(error);
        yield put(routerSet([]));
    }
    yield put(routerSetLoading(false));
}

export default function* () {
    yield takeEvery(ROUTES_SET_TERM, getRoutesParentsForChildrenID);
    yield takeEvery(ROUTER_GET_ALL, getAll);
    yield takeEvery(ROUTER_DELETE, deleteRoute);
    yield takeEvery(ROUTER_NEW, createRoute);
}