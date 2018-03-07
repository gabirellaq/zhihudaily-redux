import request from 'superagent';
const baseUrl = 'http://localhost:1111/api/';


const superagent = (type="get", url= '', data={}) => {
    return new Promise((resolve,reject)=>{
        type = type.toLowerCase();
        if(type === "get") {
            request
            .get(baseUrl + url)
            .query(data)
            .then(res =>{
                resolve(res.body);
            }).catch(err => {
                reject(err);
            })
        }
        if(type === "post") {
            request
            .post(baseUrl + url)
            .send(data)
            .then(res =>{
                resolve(res.body);
            }).catch(err => {
                reject(err);
            })
        }
    })
}

export default superagent;