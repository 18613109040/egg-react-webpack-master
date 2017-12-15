import React, {Component} from "react";
import {TabBar, Icon} from 'antd-mobile';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import Transform from 'component/alloyTouch/transform'
import './index.less'
class Swipers extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
        var scroller = document.querySelector("#swipers-scroller");
        Transform(scroller);
        new AlloyTouch({
            touch: "#swipers-container",//反馈触摸的dom
            vertical: false,//不必需，默认是true代表监听竖直方向touch
            target: scroller, //运动的对象
            property: "translateX",  //被运动的属性
            step: 45,
            min:0, //不必需,运动属性的最小值
            max: 0 //不必需,滚动属性的最大值
        })
    }
    render() {
        console.dir(this.props.data)
        return (
            <div className="swipers">
                <div id="swipers-container">
                    <div class="carousel">
                        <div  class="carousel-scroller" id="swipers-scroller">
                            {
                                this.props.data.map(item=>
                                    <img src={item.thumbImg} key={item.id}   />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Swipers.defaultProps={
    data:[]
}
Swipers.contextTypes = {
    router: PropTypes.object.isRequired
}
export default Swipers
