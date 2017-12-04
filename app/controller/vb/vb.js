exports.home = function* (ctx) {

    yield ctx.render('vb/index.js', { url: ctx.url });
};

