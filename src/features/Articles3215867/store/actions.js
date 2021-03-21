import * as types from "./constants"

export const article_list = () => ({ type: types.ARTICLE_LIST })
export const article_listSucceeded = (response, starter) => ({
  type: types.ARTICLE_LIST_SUCCEEDED,
  response,
  starter
})
export const article_listFailed = (response, starter) => ({
  type: types.ARTICLE_LIST_FAILED,
  response,
  starter
})
export const article_read = () => ({ type: types.ARTICLE_READ })
export const article_readSucceeded = (response, starter) => ({
  type: types.ARTICLE_READ_SUCCEEDED,
  response,
  starter
})
export const article_readFailed = (response, starter) => ({
  type: types.ARTICLE_READ_FAILED,
  response,
  starter
})

export const article_add = (data) => ({type:types.ARTICLE_ADD, data})

export const article_addSucceeded = (response, starter) => ({
  type: types.ARTICLE_ADD_SUCCEEDED,
  response,
  starter
})
export const article_addFailed = (response, starter) => ({
  type: types.ARTICLE_ADD_FAILED,
  response,
  starter
})

export const article_delete = (data) => ({type:types.ARTICLE_DELETE, data})
export const article_deleteFailed = (response, starter) => ({
  type: types.ARTICLE_DELETE_FAILED,
  response,
  starter
})
export const article_deleteSucceeded = (response, starter) => ({
  type: types.ARTICLE_DELETE_SUCCEEDED,
  response,
  starter
})


export const article_edit = (data) => ({type:types.ARTICLE_EDIT, data})
export const article_editFailed = (response, starter) => ({
  type: types.ARTICLE_EDIT_FAILED,
  response,
  starter
})
export const article_editSucceeded = (response, starter) => ({
  type: types.ARTICLE_EDIT_SUCCEEDED,
  response,
  starter
})
