import {FETCH_NIEUWS_ERROR, FETCH_NIEUWS_SUCCES, FETCH_NIEUWS_PENDING} from './NieuwsConstants'

const initialStateNieuws = {
  nieuws: [],
  isPending: true
}

export const requestNieuws = (state=initialStateNieuws, action={}) => {
  switch (action.type) {
    case FETCH_NIEUWS_PENDING:
      return Object.assign({}, state, {isPending: true})
    case FETCH_NIEUWS_SUCCES:
      return Object.assign({}, state, {nieuws: action.payload, isPending: false})
    case FETCH_NIEUWS_ERROR:
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}
