import { all, call, put, spawn, takeEvery } from "redux-saga/effects";
import * as types from "./constants"
import * as actions from "./actions"
import { article_list,
         article_read,
         article_add,
         article_edit,
         article_delete} from "./services"

function* article_listWorker(action) {
  try {
    const result = yield call(article_list, action)
    yield put(actions.article_listSucceeded(result.data, action))
  } catch (err) {
    yield put(actions.article_listFailed(err, action))
  }
}

function* article_listWatcher() {
  yield takeEvery(types.ARTICLE_LIST, article_listWorker)
}


function* article_readWorker(action) {
  try {
    const result = yield call(article_read, action)
    yield put(actions.article_readSucceeded(result.data, action))
  } catch (err) {
    yield put(actions.article_readFailed(err, action))
  }
}

function* article_readWatcher() {
  yield takeEvery(types.ARTICLE_READ, article_readWorker)
}


function* article_addWorker(action) {
  try {
    console.log('@@@@@ ADDING ADD ARTICLE WORKER')
    const result = yield call(article_add, action)
    console.log(result)
    yield put(actions.article_addSucceeded(result.data, action))
  } catch (err) {
    console.log("ERROR IN ADDING ARTICLE")
    console.log(err)
    yield put(actions.article_addFailed(err, action))
  }
}

function* article_addWatcher() {
  console.log('@@@@@ ADDING ADD ARTICLE WATCHER')
  yield takeEvery(types.ARTICLE_ADD, article_addWorker)
}

function* article_editWorker(action) {
  try {
    const result = yield call(article_edit, action.data)
    yield put(actions.article_editSucceeded(result.data, action))
  } catch (err) {
    console.log(err)
    yield put(actions.article_editFailed(err, action))
  }
}

function* article_editWatcher() {
  yield takeEvery(types.ARTICLE_EDIT, article_editWorker)
}

function* article_deleteWorker(action) {
  try {
    const result = yield call(article_delete, action)
    yield put(actions.article_deleteSucceeded(result.data, action))
  } catch (err) {
    console.log(err)
    yield put(actions.article_deleteFailed(err, action))
  }
}

function* article_deleteWatcher() {
  yield takeEvery(types.ARTICLE_DELETE, article_deleteWorker)
}

export default function* rootSaga() {
  const sagas = [
    article_listWatcher,
    article_readWatcher,
    article_addWatcher,
    article_editWatcher,
    article_deleteWatcher,
  ]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
