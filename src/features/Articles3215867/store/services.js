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

export async function article_add(action) {
  console.log("SAMPLE OUTPUT BELOW")
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
  console.log("EDITING ARTICLE")
  console.log(action)

  console.log(action.newTitle)
  console.log(action.newBody)
  
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

export async function article_delete(action) {
  console.log(action.data)
  console.log(action.data.auth.token)

  axios({
    method: 'delete',
    url: `https://blog-25093.botics.co/modules/article/`,
    params: {
    },
    headers:{
      "X-CSRFToken": action.data.auth.token,
    }
  }).then(x => console.log(x)).catch(err => console.log(err));







    // const res2 = await axios.delete(`https://blog-25093.botics.co/modules/article/${action.data.article_id}/`,{
    //   headers: 
    //     {
    //       "X-CSRFToken": action.data.auth.token,
    //       "accept":"application/json",
    //       "Content-Type": "application/json",
    //       "Connection": "keep-alive",
    //       "Accept-Encoding" : "gzip, deflate, br",
    //     },
    //   }, 
      // {
      // data: {
      //   id: action.data.article_id,
      // },
    // }
    // );




    // let response = await axios.delete(`https://blog-25093.botics.co/modules/article/${action.data.article_id}/`, {
    //   headers: {
    //     "X-CSRFToken": action.data.auth.token,
    //     "accept":"application/json",
    //     "Content-Type": "application/json",
    //   },
    //   // data: {
    //   //   // id: action.data.article_id
    //   // }
    // });
    console.log("ASDASD@@@@@@")
    console.log(res2)


    //return a fresh list with deletion reflected
  let articles = await articlesAPI.get(`/article/`)
  return articles;
  // return axios.post(`https://blog-25093.botics.co/modules/articles/article/`, {
  //  title: action.data.title,
  //  body: action.data.body,
  //  author: action.data.author.user.id,
  // },
  // {
  //   headers: {
  //     "X-CSRFToken": action.data.author.token
  //   }
  // })
}






// export function article_delete(action) {

//   console.log("ARTICLE DELETE SERVICE RUNNING")
//   console.log(action)
//   const url = `https://blog-25093.botics.co/modules/articles/article/${action.data.article_id}`;
//   console.log(url)
//   axios.delete(url, {
//   headers: {
//     "X-CSRFToken": action.data.author.token,
//   },
//   data: {
//     id: action.data.article_id
//   }
// });
  
//   return axios.delete(url, {
//   headers: {
//     "X-CSRFToken": action.data.author.token,
//   },
//   data: {
//     id: action.data.article_id
//   }
// });






  // return axios.delete(`https://blog-25093.botics.co/modules/articles/article/${action.data.article_id}`, {
  //  id: action.data.article_id,
   
  // },
  // {
  //   headers: {
  //     "X-CSRFToken": action.data.author.token,
  //   }
  // })
// }