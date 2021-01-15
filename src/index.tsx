import React from 'react';
import ReactDOM from 'react-dom';
import { unregister, reportWebVitals } from './core';

ReactDOM.render(<div>Hello World</div>, document.getElementById('root'));

unregister();

reportWebVitals();
