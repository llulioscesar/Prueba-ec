import {all, fork} from 'redux-saga/effects';
import routesSagas from './routes/saga';

export default function* rootSaga() {
    yield all([
        fork(routesSagas),
    ])
}