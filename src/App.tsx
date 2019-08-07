import React, { useReducer, useEffect } from 'react';
import './App.css';
import { View } from './views';
import { State, Store } from './modal';
import { getInitialState } from './utils';
import { todoReducer } from './store/reducer';
import { Provider } from './context';
import { setLoader } from './store';
import { makeStyles } from '@material-ui/core';

const initialState: State = getInitialState();

const useStyles = makeStyles((theme) => ({
  app: {
      height: "97%"
  }
}));

const App: React.FC = () => {
  const classes = useStyles();
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
      <div className={classes.app}>
        <View />
      </div>
    </Provider>
  );
}

export default App;
