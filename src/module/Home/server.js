import axios from "axios"; //导入axios

const url = {
    getArticleList:'/api/api/v1/article-list',
    getArticleDetail:'/api/api/v1/articlebyId',
    updataArticle:'/api/api/v1/article-update'
}


export function getArticleList(type) {
  if(type){
    return axios.get(`${url.getArticleList}?type=${type}`);

  }else{
    return axios.get(`${url.getArticleList}`);

  }
}

export function getArticleDetail(id) {
  return axios.get(`${url.getArticleDetail}?id=${id}`);
}

export function updataArticle(id,data) {
  return axios.post(`${url.updataArticle}/${id}`,data);
}