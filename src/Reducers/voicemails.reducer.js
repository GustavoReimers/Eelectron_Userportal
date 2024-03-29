import * as CONSTS from '../Constants'

export default (state = {loading: false}, action) => {
  switch (action.type) {
    case CONSTS.SENDING_API_REQUEST:
      return {...state, loading: true}
    case CONSTS.GET_ALL_VMBOXES_SUCCESS:
      return {...state, vmboxes: action.payload.data}
    case CONSTS.GET_ALL_MESSAGES_ON_AN_ACCOUNT_SUCCESS:
      return {...state, allmessages: action.payload, loading:false}
    case CONSTS.SET_SELECTED_VMBOX_ID:
    default:
      return state
  }
}
