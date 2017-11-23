import React, { Component } from 'react';
export default class SweepStakes extends Component {
    componentDidMount() {
        console.log('----componentDidMount-----');
    }
    render() {
        console.dir(this.props)
        return <div>
            <div className="main">
                sss
            </div>
        </div>;
    }
}