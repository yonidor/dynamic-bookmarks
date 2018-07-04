import { call, put, takeEvery } from 'redux-saga/effects'
import { OPEN_BOOKMARK_REQUEST } from '../actions/action-types'
import { openNewTab } from '../utils/open-new-tab'
import { resolveBookmark } from '../utils/resolve-bookmark'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* openBookmark(action) {
   try {
      const resolvedBookmark = resolveBookmark(action.payload.template, action.payload.parameterValues)
      yield call(openNewTab, resolvedBookmark);
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
    console.log("Saga runs!");
    yield takeEvery(OPEN_BOOKMARK_REQUEST, openBookmark);
}

export default mySaga;