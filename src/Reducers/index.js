import { combineReducers } from 'redux'
import vmreducer from './voicemails.reducer'
import auth from './auth.reducer'
import systemmessage from './systemmessage.reducer'

export default combineReducers({
  vmreducer,
  auth,
  systemmessage
})
