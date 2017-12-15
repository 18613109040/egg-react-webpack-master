import fetch from "isomorphic-fetch";

import {BrowserRouter} from 'react-router-dom'
import {storage} from "../utils/tools"

/**
 * @desc 格式化一个对象为字符串如 name=pat&city_no=020&old=99;
 * @param data string
 **/
function parseParams(data) {
    if (data == null) {
        return '';
    }
    let list = [];
    for (let item in data) {
        list.push(`${item}=${data[item]}`)
    }
    return list.join("&");
}

export function  get(url = "", data = null) {
    const params = parseParams(data), tarUrl = data == null ? url : `${url}?${params}`;
    return new Promise((resolve, reject) => {
        fetch(tarUrl, {
            method: "GET",
            timeout: 10000,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                "token": storage.get("token")
            }
        }).then((res) => {
            resolve(res.json())
        }, (error) => {
            reject(error);
        })
    })
}

export function post(url = "", data = null, callback = (json) => {
}, reducersConnect = (json) => {
}) {

    const params = parseParams(data)
    return dispatch => {
        return fetch(url, {
            method: "POST",
            body: params,
            timeout: 10000,
            credentials: 'include',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                "token": storage.get("token")
            }
        })
            .then(response => {
                if (response.headers.get("token")) {
                    storage.setObj({
                        token: response.headers.get("token")
                    })
                }
                return response.json()
            })
            .then(json => {
                if (json.code == 1001) {
                    //用户未登录
                    storage.remove("userInfo")
                    hashHistory.push("/login")
                }

                dispatch(reducersConnect(json));
                callback(json);

            })
    }
}


export function commonPost(url = "", data = null, callback = (json) => {
}) {
    return fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        timeout: 10000,
        credentials: 'include',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            "token": storage.get("token")
        }
    })
        .then(response => {
            return response.json()
        })
        .then(json => {
            callback(json);
        })
}


function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}
