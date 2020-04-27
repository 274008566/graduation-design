import axios from "axios"; //导入axios

const url = {
    getGrowList:'/api/api/v1/flow-list',
    getGrowDetail:'/api/api/v1/flow'
}


export function getList () {
  return axios.get(`${url.getGrowList}`);
}

export function getGrowDetail (id) {
  return axios.get(`${url.getGrowDetail}?id=${id}`);
}