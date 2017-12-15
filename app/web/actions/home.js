//获取产品
import {get,gettest} from "./BaseAction";
import {host} from "./hostConf";
export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";


export function getProduct(data,that){
    const response =  get(`${host.test_host}imcategory/list`,data)
    response.then(json=>{
        that.props.dispatch({
            type: GET_PRODUCT_LIST,
            json: json
        })
    })
}


