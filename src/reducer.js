import { combineReducers } from 'redux'

import { navReducer } from './modules/Reducers'

const reducer = combineReducers({
  nav: navReducer
})

export default reducer
