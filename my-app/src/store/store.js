import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './reducers';
import rootSaga from "./sagas";

export const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
}