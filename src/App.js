import React, { Fragment } from 'react';
import './App.css';
import Page from './components/Page'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Fragment>
        <Page/>
       <div className="App">
      
      </div>
    </Fragment>
    </Router>
    
    
  );
}

export default App;
