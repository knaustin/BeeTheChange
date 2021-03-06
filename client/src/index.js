import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Auth from './Auth/Auth';

ReactDOM.render(<App auth={new Auth()} />, document.getElementById('root'));
