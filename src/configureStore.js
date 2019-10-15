import { createStore, combineReducers } from 'redux';
import authoringReducer from './containers/App/reducers'

const configureStore = () => {
     const store = createStore(combineReducers({
          collections: authoringReducer
     }))
     return store;
}

export default configureStore