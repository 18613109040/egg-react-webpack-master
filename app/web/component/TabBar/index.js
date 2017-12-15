import React, {Component} from "react";
import {TabBar, Icon} from 'antd-mobile';
import {Link} from "react-router";
import PropTypes from 'prop-types';
import './index.less'

class MallNavBar extends Component {


    constructor(props) {
        super(props);
        //const {pathname} = this.props.location;
        this.state = {
           selectedTab:  '/home' //pathname == "/" ? "/home" : pathname
        }

    }
    componentWillReceiveProps(nexprops){
        // const {pathname} = nexprops.location;
        // this.state = {
        //     selectedTab: pathname == "/" ? "/home" : pathname
        // }

    }
    componentDidMount() {

    }
    render() {

        return (
            <div className="sb-tab-bar">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#FFDB53"
                    barTintColor="white"
                >
                    {
                        this.props.tabBarData.map((item, id) => (

                            <TabBar.Item
                                title={item.title}
                                key={id}
                                icon={<div className="tabbar" style={{
                                    background: `url(${item.icon}) no-repeat`,
                                }}
                                />}
                                selectedIcon={<div className="tabbar" style={{
                                    background: `url(${item.selectIcon}) no-repeat`,

                                }}
                                />}
                                selected={this.state.selectedTab === item.path}
                                badge={this.props.badge}
                                dot={this.props.dot}
                                onPress={() => {

                                    this.context.router.history.push(`${item.path}`)
                                    this.setState({
                                        selectedTab: item.path,
                                    });
                                }}
                            >
                            </TabBar.Item>

                        ))
                    }
                </TabBar>
            </div>
        )
    }
}
MallNavBar.defaultProps={
    tabBarData: [
        {
            title: "首页",
            icon: require("asset/images/home.png"),
            path: "/home",
            selectIcon: require("asset/images/home-fill.png"),
        }, {
            title: "分类",
            icon: require("asset/images/class.png"),
            path: "/classification",
            selectIcon: require("asset/images/class-fill.png"),
        }, {
            title: "购物车",
            icon: require("asset/images/cart.png"),
            path: "/shopcart",
            selectIcon: require("asset/images/cart-fill.png"),
        }, {
            title: "我的",
            icon: require("asset/images/my.png"),
            path: "/myinfo",
            selectIcon: require("asset/images/my-fill.png"),
        }
    ],
    badge: "",
    dot: false
}
MallNavBar.contextTypes = {
    router: PropTypes.object.isRequired
};
export default MallNavBar
