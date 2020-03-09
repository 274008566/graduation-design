import axios from "axios"; //导入axios

const url = {
    getGrowList:'/grow/get-list'
}


export function getSidebarList (time) {
  return axios.get(`/api${url.getGrowList}?id=${time}`);
}
 