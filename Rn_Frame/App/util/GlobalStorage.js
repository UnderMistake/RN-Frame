/*
 * @Author: wzx 
 * @Date: 2016-12-24 02:03:33 
 * @Last Modified by: wzx
 * @Last Modified time: 2016-12-26 06:35:31
 */

import { AsyncStorage } from 'react-native';
import Storage from 'react-native-storage'

var storage = new Storage({
    // 最大容量，默认值1000条数据循环存储
    size: 1000,
    // 数据过期时间，默认一整天（1000 * 3600 * 24秒）
    defaultExpires: 1000 * 3600 * 24,
    // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
    // 如果不指定则数据只会保存在内存中，重启后即丢失
    storageBackend: AsyncStorage,
    // 读写时在内存中缓存数据。默认启用。
    enableCache: true
})

var global = { storage: storage }

module.exports = global