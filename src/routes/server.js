import axios from "axios"; //导入axios

const url = {
    getGrowList:'/api/api/v1/message-list',
    createMessage:'/api/api/v1/message-create'
}


export function getSidebarList () {
  return axios.get(`${url.getGrowList}`);
}

export function createMessage (id) {
  return axios.post(`${url.createMessage}`,id);
}