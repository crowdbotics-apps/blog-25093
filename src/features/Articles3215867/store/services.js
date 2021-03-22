import axios from "axios";

const articlesAPI = axios.create({
  baseURL: "http://blog-25093.botics.co/modules/articles",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"

  }
})

export function article_list(action) {
  return articlesAPI.get(`/article/`)
}

export function article_read(action) {
  return articlesAPI.get(`/article/${action.id}/`)
}

export async function article_add(action) {
  let newArticle = await axios.post(`https://blog-25093.botics.co/modules/articles/article/`, {
     title: action.data.title,
     body: action.data.body,
     author: action.data.author.user.id,
    },
    {
      headers: {
        "X-CSRFToken": action.data.author.token
      }
  })
  let articles = await articlesAPI.get(`/article/`)
  return articles
}
export async function article_edit(action) {
  let editedArticle = await axios.patch(`https://blog-25093.botics.co/modules/articles/article/${action.article_id}/`, {
   title: action.newTitle,
   body: action.newBody,
   author: action.auth.user.id,
  },
  {
    headers: {
      "X-CSRFToken": action.auth.token
    }
  })
  let articles = await articlesAPI.get(`/article/`)
  return articles
}

//Doesn't work - 405 error from backend
export async function article_delete(action) {
  console.log(action.data)
  console.log(action.data.auth.token)

  axios({
    method: 'delete',
    url: `https://blog-25093.botics.co/modules/article/${action.data.article_id}/`,
    params: {
    },
    headers:{
      "X-CSRFToken": action.data.auth.token,
    }
  })
  let articles = await articlesAPI.get(`/article/`)
  return articles;
}
