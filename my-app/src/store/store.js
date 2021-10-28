import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


// const middleware = applyMiddleware(thunk, logger);
// const middleware = applyMiddleware();
const store = createStore(rootReducer, {}, composeWithDevTools() );

export default store;