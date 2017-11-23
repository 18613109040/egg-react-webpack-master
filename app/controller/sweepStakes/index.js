
exports.start = function* (ctx) {
    const list = yield  ctx.service.sweepStakes.index.list(ctx);

    const query = ctx.query;
    const body = ctx.request.body;
    yield ctx.render('sweepStakes/index.js',{data:list});
};

