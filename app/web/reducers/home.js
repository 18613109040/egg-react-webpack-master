import { GET_PRODUCT_LIST } from 'actions/home.js';


export  function product(state = {data:[]}, action) {
    let json = action.json;
    switch (action.type) {
        case GET_PRODUCT_LIST:
            return Object.assign({},state,json);
        default:
            return state
    }
}

export  function bannerList(state=[], action) {
    return state
}

export  function classicMenu(state=[{
    icon: require('asset/images/yugou.png'),
    text: "云购",
    href: `http://kuaigou.sibu.cn/`,
    id: 1
},
    {
        icon: require('asset/images/xinping.png'),
        text: "新品",
        href: "/newshelves",
        id: 1
    }, {
        icon: require('asset/images/baokuan.png'),
        text: "爆款",
        href: "/explosionRecom",
        id: 2
    }, {
        icon: require('asset/images/rendui.png'),
        text: "热兑",
        href: "/vbexchange?id=ad32d726-8544-45ee-a53b-0d67351752a4",
        id: 3
    },],action) {
    return state
}
export  function activeMenu(state=[{
    title: "优惠券",
    description: "狂撒一亿现金券还在等什么",
    image: require("asset/images/coupon.png"),
    path:"/couponCentre"
}, {
    title: "全球购",
    description: "全球商品任您挑",
    image: require("asset/images/quanqiugou.png"),
    path:`http://kuaigou.sibu.cn/activity/happy-list`
}, {
    title: "特价专区",
    description: "价格低至你无法想象",
    image: require("asset/images/dejia.png"),
    path:"/activityProduct?id=73"
}, {
    title: "品牌特卖",
    description: "超值优惠精选好货",
    image: require("asset/images/pingpai.png"),
    path:"/brandsale"
}], action) {
    return state
}


