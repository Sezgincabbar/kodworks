import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducers from './reducers';
import initialState from './store';

const store = createStore(reducers, initialState);

export default function ({children}) {
  return <Provider store={store}>{children}</Provider>;
}
