/**
 * 首页 专区
 *
 */
import React, {Component} from "react";
import {WhiteSpace, Flex} from 'antd-mobile';
import {Link} from "react-router";
import PropTypes from 'prop-types';
import Text from "../Text";
import './index.less'

class ActivityItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Flex className="activity-item">
                <Flex.Item style={{flex: 1.5}}>
                    <div className="title">{this.props.title}</div>
                    <WhiteSpace/>
                    <div className="outders"></div>
                    <WhiteSpace size="lg"/>
                    <div className="description">
                        <Text text={this.props.description} row={2} size="md"/>
                    </div>
                </Flex.Item>
                <Flex.Item style={{flex: 1}}>
                    <div className="image">
                        <img src={this.props.image}/>
                    </div>
                </Flex.Item>
            </Flex>
        )
    }
}
ActivityItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}
ActivityItem.contextTypes = {
    router: PropTypes.object.isRequired,
}
ActivityItem.defaultProps={

}
export default ActivityItem
