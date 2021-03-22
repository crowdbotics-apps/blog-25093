import * as types from "./constants"

const initialState = {
  api: {
    isFetching: false,
  },
  articles: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ARTICLE_LIST:

      return Object.assign({}, state, {
        api: {
          isFetching: true,
        },
      })
    case types.ARTICLE_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        api: {
          isFetching: false,
        },
        articles: [state.articles, ...action.response]
      })
    case types.ARTICLE_LIST_FAILED:
      return Object.assign({}, state, {
        api: {
          isFetching: false,
          errors: action.response
        }
      })
    case types.ARTICLE_READ:
      return Object.assign({}, state, {
        api: {
          isFetching: true,
        },
      })
    case types.ARTICLE_READ_SUCCEEDED:
      return Object.assign({}, state, {
        api: {
          isFetching: false,
        },
        articles: [
          state.articles.filter(record => record.id !== action.response.id),
          action.response
        ]
      })
    case types.ARTICLE_LIST_FAILED:
      return Object.assign({}, state, {
        api: {
          isFetching: false,
          errors: action.response
        }
      })

     case types.ARTICLE_ADD:

     console.log("REDUCER!!!!")
      return Object.assign({}, state, {
        api: {
          isFetching: true,
        },
      })
    case types.ARTICLE_ADD_SUCCEEDED:
      return Object.assign({}, state, {
        api: {
          isFetching: false,
        },
        articles: [state.articles, ...action.response]
      })
    case types.ARTICLE_ADD_FAILED:
      return Object.assign({}, state, {
        api: {
          isFetching: false,
          errors: action.response
        },
        articles: [state.articles, ...action.response]
      })
    case types.ARTICLE_EDIT:

     console.log("REDUCER!!!!")
      return Object.assign({}, state, {
        api: {
          isFetching: true,
        },
      })
    case types.ARTICLE_EDIT_SUCCEEDED:
      return Object.assign({}, state, {
        api: {
          isFetching: false,
        },
        articles: [state.articles, ...action.response]
      })
    case types.ARTICLE_EDIT_FAILED:
      return Object.assign({}, state, {
        api: {
          isFetching: false,
          errors: action.response
        },
        articles: [state.articles, ...action.response]
      })

      case types.ARTICLE_DELETE:

     console.log("REDUCER!!!!")
      return Object.assign({}, state, {
        api: {
          isFetching: true,
        },
      })
    case types.ARTICLE_DELETE_SUCCEEDED:
      return Object.assign({}, state, {
        api: {
          isFetching: false,
        },
        articles: [state.articles, ...action.response]
      })
    case types.ARTICLE_DELETE_FAILED:
      return Object.assign({}, state, {
        api: {
          isFetching: false,
          errors: action.response
        }
      })
    default:
      return state
  }
}
