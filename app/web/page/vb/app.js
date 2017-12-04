import React, {Component} from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import {connect} from "react-redux";
import ClassIfication from 'containers/ClassIfication/index';
import Home from 'containers/Home/index';

class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.dir(this)
        return <div>
            <div>
                <Link to="/vb/home">首页</Link>
            </div>
            <div>
                <Link to="/vb/classification">分类</Link>
            </div>
            <div>
                <Route path="/vb/home" component={Home}/>
                <Route path="/vb/classification" component={ClassIfication}/>
            </div>
        </div>;
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(App)
