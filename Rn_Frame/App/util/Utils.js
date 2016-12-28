/*
 * @Author: wzx 
 * @Date: 2016-12-23 05:02:13 
 * @Last Modified by: wzx
 * @Last Modified time: 2016-12-24 01:21:11
 */

import React from 'react-native';
const {
    Alert,
} = React;

/**
 * 
 * 
 * @export 网络请求
 * @param {any} url 请求地址
 * @param {any} param ？post参数
 * @returns
 */
export function request(url, param) {
    console.log('url = ', url);
    var isOk;
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => reject(new Error('request timeout')), 30000);
        if (param == undefined) {
            console.log('get');
            fetch(url)
                .then((response) => {
                    if (response.ok) {
                        isOk = true;
                    } else {
                        isOk = false;
                    }
                    return response.json()
                })
                .then((responseData) => {
                    clearTimeout(timeoutId);
                    if (isOk) {
                        console.log('responseData = ', responseData);
                        resolve(responseData);
                    } else {
                        reject(responseData);
                    }
                })
                .catch((error) => {
                    clearTimeout(timeoutId);
                    reject(error);
                })
        } else {
            console.log('post-----body:', param);
            fetch(url, {
                    method: 'POST',
                    header: {
                        Accept: '*/*',
                        'Content-Type': 'application/json'
                    },
                    // mode: 'same-origin',
                    body: param
                })
                .then((response) => {
                    if (response.ok) {
                        isOk = true;
                    } else {
                        isOk = false;
                    }
                    return response.json()
                })
                .then((responseData) => {
                    clearTimeout(timeoutId);
                    if (isOk) {
                        console.log('responseData = ', responseData);
                        resolve(responseData);
                    } else {
                        reject(responseData);
                    }
                })
                .catch((error) => {
                    clearTimeout(timeoutId);
                    reject(error);
                })
        }
    })
}

// export function FileUpload(file) {
//     var input = document.querySelector('input[type="file"]')
//     var data = new FormData()
//     data.append('file', input.files[0])
//     data.append('user', 'hubot')

//     fetch('/avatars', {
//         method: 'post',
//         body: data
//     })
// }

export function showAlert(error) {
    let errorContent = '网络请求失败，请稍后再试！'
    let errorTitle = '当前网络异常！'
    if (error == 'Error: request timeout')
        errorContent = '网络请求超时或未接入公司网络，请检查网络后再试！'
    Alert.alert(errorTitle, errorContent, [{ text: '好' }, ]);
}