import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { I18nProvider } from '@lingui/react'

ReactDOM.render(
	 <I18nProvider language="en">
	    <App />
	  </I18nProvider>,
	document.getElementById('root'));
