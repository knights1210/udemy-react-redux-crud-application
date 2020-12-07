import { combineReducers } from 'redux';
import count from './count'

export default combineReducers({ count })
//このファイルでreducerを管理する
// export default combineReducers({foo, bar, baz})等