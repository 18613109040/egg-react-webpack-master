import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {match, RouterContext} from 'react-router'
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config'
import Layout from 'framework/layout/phoneLayout.jsx';
import App from './app';
import { create } from 'store/configureStore';
import routes from './routes'
const clientRender = () => {
    const store = create(window.__INITIAL_STATE__);
    const url = store.getState().url;
    ReactDOM.render(
        <div>
            <Provider store={ store }>
                <BrowserRouter>
                    <App url={ url }/>
                </BrowserRouter>
            </Provider>
        </div>,
        document.getElementById('app')
    );
};

const serverRender = (context, options)=> {
    const url = context.state.url;
    const branch = matchRoutes(routes, url);
    const promises = branch.map(({route}) => {
        const fetch = route.component.fetch;
        return fetch instanceof Function ? fetch() : Promise.resolve(null)
    });
    return Promise.all(promises).then(data => {
        const initState = context.state;
        data.forEach(item => {
            Object.assign(initState, item);
        });
        context.state = Object.assign({}, context.state, initState);
        const store = create(initState);
        return () =>(
            <Layout>
                <div>
                    <Provider store={store}>
                        <StaticRouter location={url} context={{}}>
                            <App url={url}/>
                        </StaticRouter>
                    </Provider>
                </div>
            </Layout>
        )
    });
};

export default isServer ?  serverRender : clientRender();



