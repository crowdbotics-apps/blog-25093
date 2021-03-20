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
  

 
  return articlesAPI.post(`/article`, null, {
  	title: 'generated article',
  	body: 'my article text is here',
  	author: action.data.author.user.id,
    headers: {"X-CSRFToken": action.data.author.token, 'Referer': window.document.referer},
    


  })
}


export function article_edit(action) {
	//add payload and fill out post
  return articlesAPI.put(`/article/${action.id}/`)
}

export function article_delete(action) {
	//add payload and fill out post
  return articlesAPI.delete(`/article/${action.id}/`)
}