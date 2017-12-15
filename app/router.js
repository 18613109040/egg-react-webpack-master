module.exports = app => {
    app.get('(/.+)?', app.controller.vb.home);
    app.router.get('/api(/.+)?', app.controller.proxy.get);
};
