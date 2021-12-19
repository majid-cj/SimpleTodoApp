import 'react-native-gesture-handler';
import React, {FC, useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './src/actions';
import {AppNavigation} from './src/navigations';
import {appReducer} from './src/reducers';
import {getAppLanguage, setAppLanguage} from './src/i18n';

const App: FC = () => {
  const [lang, setLang] = useState<undefined | string>(undefined);
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(appReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);

  useEffect(() => {
    (async () => {
      let local = await getAppLanguage();
      const language = await setAppLanguage(local);
      setLang(language);
    })();
  }, []);

  if (lang === undefined) {
    return null;
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
