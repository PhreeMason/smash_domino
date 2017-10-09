import { 
  createStore, 
  applyMiddleware, 
  combineReducers 
} from 'redux';

import thunk from 'redux-thunk';
import dominoImageData from '../modules/dominoes/reducer'
const reducers = combineReducers({
  dominoImageData
})

const middleware = [thunk]

export default createStore(
    reducers,
    applyMiddleware(...middleware),
)