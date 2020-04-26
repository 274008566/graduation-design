import axios from "axios"; //导入axios

const url = {
    getGrowList:'/api/api/v1/grow-list',
    getGrowDetail:'/api/api/v1/grow'
}


export function getSidebarList (id) {
  return axios.get(`${url.getGrowList}?time=${id}`);
}

export function getGrowDetail (id) {
  return axios.get(`${url.getGrowDetail}?id=${id}`);
}