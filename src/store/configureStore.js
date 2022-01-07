import { reducer } from './reducer';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(reducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware))),
    runSaga: sagaMiddleware.run
  }
}