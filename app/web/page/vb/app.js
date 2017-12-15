import React, {Component} from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import { TabBar } from 'antd-mobile';
import ClassIfication from 'containers/ClassIfication/index';
import Home from 'containers/Home/index';
import NavBar from 'component/TabBar/index'

class App extends Component {
    constructor(props) {
        super(props);

    }
    render() {

        return <div className="root">
            <Switch>
                <Route path="/home"  component={Home}/>
                <Route path="/classification"  component={ClassIfication}/>
            </Switch>
            <div className="footer">
                <NavBar {...this}/>
            </div>
        </div>
    }
}
export default App
