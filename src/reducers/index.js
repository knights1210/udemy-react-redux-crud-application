import { combineReducers } from 'redux';
import events from './events'

export default combineReducers({ events })
//このファイルでreducerを管理する
// export default combineReducers({foo, bar, baz})等