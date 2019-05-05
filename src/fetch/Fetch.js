import axios from "axios";
const catchNetwork = axiosPromise => new Promise((resolve,reject) =>{
  axiosPromise.then(response=>resolve(response))
    .catch(error=>{
      reject(error)
    })
})
export default class Fetch {
  constructor(path) {
   this.path=path;
   this.axios=axios;

  }
//  get请求
getServerDate(subPath,param){
    return catchNetwork(
      this.axios.get("${this.path}${subPath}?${param}")
    )
};
}
