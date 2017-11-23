exports.list = function* (ctx) {
    const results = yield ctx.app.mysql.select('user');
    
    return results
};
