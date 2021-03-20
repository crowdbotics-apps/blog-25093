import axios from "axios";

const articlesAPI = axios.create({
  baseURL: "http://blog-25093.botics.co/modules/articles",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"

  }
});

export function article_list(action) {
  return articlesAPI.get(`/article/`)
}

export function article_read(action) {
  return articlesAPI.get(`/article/${action.id}/`)
}

export function article_add(action) {
	//add payload and fill out post
	console.log("~~~~~~@@@@ ::::: adding article from services");
	console.log(action)

  console.log("Token above")
  console.log(action.data.author.token)
  
  return axios.post("http://blog-25093.botics.co/modules/articles/article/", {
   title: action.data.title,
   body: action.data.body,
   author: action.data.author.user.id,
  },
  {
    headers: {
      "X-CSRFToken": action.data.author.token
    }
  })
}



//  // headers: {"X-CSRFToken": action.data.author.token, 'Referer': window.document.referer},
//   return articlesAPI.post(`/article`,  {
//   	title: action.data.title,
//   	body: action.data.body,
//   	author: action.data.author.user.id,
    
  
//   })
// }


export function article_edit(action) {
	//add payload and fill out post
  return articlesAPI.put(`/article/${action.id}/`)
}

export function article_delete(action) {
	//add payload and fill out post
  return articlesAPI.delete(`/article/${action.id}/`)
}