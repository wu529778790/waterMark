/*
 * @Author: 52977890@qq.com 
 * @Date: 2019-05-29 10:26:52 
 * @Last Modified by:   wu529778790 
 * @Last Modified time: 2019-05-29 10:26:52 
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
