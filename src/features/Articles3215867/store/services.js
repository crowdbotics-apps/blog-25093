import axios from "axios";

const articlesAPI = axios.create({
  baseURL: "https://blog-25093.botics.co/modules/articles",
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
  return articlesAPI.post(`/article/${action.id}/`)
}

export function article_edit(action) {
	//add payload and fill out post
  return articlesAPI.put(`/article/${action.id}/`)
}

export function article_delete(action) {
	//add payload and fill out post
  return articlesAPI.delete(`/article/${action.id}/`)
}