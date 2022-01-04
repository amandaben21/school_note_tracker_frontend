import './index.css';   
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; //replaces window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './containers/App'
import { notesReducer } from './reducers/notesReducer'

import { BrowserRouter as Router} from 'react-router-dom';

const store = createStore( 
  notesReducer, 
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render( 
  <Provider store={store}> 
    <Router>
      <App />
    </Router>
  </Provider>,
    
  document.getElementById('root')
)
