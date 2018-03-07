import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'lib-flexible';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import HeaderIndex from './components/HeaderIndex';
import Sidebar from './components/Sidebar';
import List from './pages/List';
import ListTheme from './pages/ListTheme'
import NewsDetail from './pages/NewsDetail';
import Comments from './pages/Comments';

import reducer from './redux/reducer';

let store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
<Router>
    <div>
        <HeaderIndex /> 
        <Sidebar />
        <Route exact path="/" component={List} />
        <Route path="/theme/:id" component={ListTheme} />
        <Route path="/news/:id" component={NewsDetail} />
        <Route path="/comments/:id" component={Comments} />
    </div>
</Router>
</Provider>,
document.getElementById('root')
);
registerServiceWorker();
