import React, { useReducer, useEffect } from 'react';
import './App.css';
import { View } from './views';
import { State, Store } from './modal';
import { getInitialState } from './utils';
import { todoReducer } from './store/reducer';
import { Provider } from './context';
import { setLoader } from './store';

const initialState: State = getInitialState();

const App: React.FC = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const store: Store = {
    state,
    dispatch
  };
  useEffect(() => {
    dispatch(setLoader(true));
  }, [])
  return (
    <Provider value={store}>
      <div className="App">
        <View />
      </div>
    </Provider>
  );
}

export default App;
