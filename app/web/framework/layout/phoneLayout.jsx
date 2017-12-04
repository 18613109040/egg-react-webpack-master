import React, {Component} from 'react';

export default class Layout extends Component {
    render() {
        return <html>
        <head>
            <title>{this.props.title}</title>
            <meta charSet="utf-8"></meta>
            <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"></meta>
            <meta name="keywords" content={this.props.keywords}></meta>
            <meta name="description" content={this.props.description}></meta>
            <meta charset="UTF-8"/>
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
            <meta name="apple-mobile-web-app-title" content="react"/>
            <meta content="telephone=no" name="format-detection"/>
            <meta content="email=no" name="format-detection"/>

            <meta name="screen-orientation" content="portrait"/>

            <meta name="full-screen" content="yes"/>

            <meta name="browsermode" content="application"/>

            <meta name="x5-orientation" content="portrait"/>

            <meta name="x5-fullscreen" content="true"/>

            <meta name="x5-page-mode" content="app"/>
            <link rel="shortcut icon" href="http://vb.sibumbg.cn/resources/favicon.ico" type="image/x-icon"/>
        </head>
        <body>
        <div id="app"></div>
        </body>
        </html>;
    }
}