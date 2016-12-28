/*
 * @Author: wzx 
 * @Date: 2016-12-22 04:28:46 
 * @Last Modified by: wzx
 * @Last Modified time: 2016-12-22 07:08:54
 */

import {
    AsyncStorage
} from 'react-native';
import storage from 'react-native-simple-store';
//import storage from 'react-native-storage';

/*初始化*/
// var storage = new Storage({
//     //最大容量，默认值1000条数据循环存储
//     size: 1000,

//     //数据过期时间，默认一整天（1000 * 3600 * 24秒）
//     defaultExpires: 1000 * 3600 * 24,

//     //读写时在内存中缓存数据。默认启用。
//     enableCache: true,

//     //如果storage中没有相应数据，或数据已过期，
//     //则会调用相应的sync同步方法，无缝返回最新数据。
//     sync: require('./sync')
// });

// global.storage = storage;

/**
 * @param key
 * @param fetchFunc
 * @param cached 是否从缓存中取
 */
export default CacheHelper = (key, fetchFunc, cached = true) => {
    if (!cached) {
        //不缓存
        console.log(`cached = false. get api data from network ————  key = ${key}`);
        return fetchFunc();
    }
    return storage.get(key).then(value => {
        if (value) {
            console.log(`get api data from storage ————  key = ${key}`);
            return value;
        } else {
            return fetchFunc().then(value => {
                console.log(`get api data from network ————  key = ${key}`);
                //存储
                storage.save(key, value);
                return value;
            });
        }
    });
};