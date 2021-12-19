import 'react-native-gesture-handler';
import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './src/actions';
import {AppNavigation} from './src/navigations';
import {appReducer} from './src/reducers';

const App: FC = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(appReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
