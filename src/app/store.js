import {createStore, applyMiddleware} from 'redux';
import promise from "redux-promise";
import reducers from '../redux/reducers';


const store = applyMiddleware(promise)(window.devToolsExtension ? window.devToolsExtension()(createStore): createStore)(reducers);

export default store;
