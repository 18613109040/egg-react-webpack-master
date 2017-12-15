import {combineReducers} from 'redux'

import {bannerList,classicMenu,activeMenu,product} from './home'

const rootReducer = combineReducers({

    bannerList,
    classicMenu,
    activeMenu,
    product
})

export default rootReducer
