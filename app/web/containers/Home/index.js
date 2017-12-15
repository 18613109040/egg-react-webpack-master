import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from 'react-router-dom'
import Transform from 'component/alloyTouch/transform'
import ActivityItem from 'component/ActivityItem/index'
import Swipers from 'component/Swipers/index'
import {Carousel,WingBlank, WhiteSpace,Grid} from 'antd-mobile';
import {getProduct} from "actions/home";

import './index.less'
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}

    }
    componentWillMount() {

    }
    componentDidMount() {
        let target = document.querySelector("#scroller");
        //给element注入transform属性
        Transform(target, true);
        let at = new AlloyTouch({
            touch: "#wrapper",//反馈触摸的dom
            vertical: true,//不必需，默认是true代表监听竖直方向touch
            target: target, //运动的对象
            property: "translateY",  //被滚动的属性
            sensitivity: 1,//不必需,触摸区域的灵敏度，默认值为1，可以为负数
            factor: 1,//不必需,默认值是1代表touch区域的1px的对应target.y的1
            min: window.innerHeight - 45 - 48 - 2000, //不必需,滚动属性的最小值
            max: 0, //不必需,滚动属性的最大值
            step: 40,
            animationEnd: function (value) {
                //console.log(value);
            },
            pressMove: function (evt, value) {
                //console.log(evt.deltaX + "_" + evt.deltaY + "__" + value);
            }
        })
        document.addEventListener("touchmove", function (evt) {
            evt.preventDefault();
        }, false);

        getProduct({},this);
    }
    clickGird(){

    }
    linktoPath(item) {


    }
    render() {
        return (
            <div id="wrapper" className="home">
                <div id="scroller">
                  {/**首页轮播图**/}
                    <Carousel
                        className="my-carousel-sild"
                        autoplay={true}
                        infinite={true}
                        selectedIndex={1}
                        swipeSpeed={35} >
                            {this.props.bannerList.map((item, id) => (
                                    <img
                                        src={item.imageUrl}
                                        style={{width: "100%"}}
                                        alt="icon" />

                            ))}
                    </Carousel>
                    <div className="menu-nav">
                        <Grid data={this.props.classicMenu}
                        columnNum={this.props.classicMenu.length}
                        hasLine={false}
                        className="home-square-grid"
                        renderItem={dataItem => (
                            <div className="am-grid-item-inner-content ">
                                <img src={dataItem.icon} className="home-grid-icon" alt="icon"/>
                                <div>
                                    <span className="am-grid-text">{dataItem.text}</span>
                                </div>
                            </div>
                        )}
                        onClick={this.clickGird}/>
                    </div>
                    <WhiteSpace/>
                    <div className="background-base">
                        <WingBlank size="sm">
                            <WhiteSpace/>
                            {
                                this.props.activeMenu.map((item, index) => (
                                    <div style={{width: '50%', display: 'inline-block'}} key={index}
                                         onClick={this.linktoPath.bind(this, item)}>
                                        <WingBlank size="sm">
                                            <ActivityItem {...item}/>
                                        </WingBlank>
                                        <WhiteSpace/>
                                    </div>
                                ))
                            }
                        </WingBlank>
                    </div>
                    <WhiteSpace/>
                    {
                        this.props.product.data.map((item, index) => (
                            <div key={index}>
                                <div className="banner-img">
                                    <Link
                                        to={item.categoryType == 0 ? `/vbexchange?id=${item.imCategoryId}` : `/classification`}>
                                        <img src={item.imageUrl}/>
                                    </Link>
                                </div>
                                <div className="swiper-div">
                                    <Swipers data={item.products}/>
                                </div>
                                <WhiteSpace/>
                            </div>
                        ))
                    }

                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        classicMenu:state.classicMenu,
        bannerList :state.bannerList,
        activeMenu:state.activeMenu,
        product:state.product
    }
}

export default connect(mapStateToProps)(Home)
