exports.index = function* (ctx) {
    ctx.body = yield ctx.model.User.find({});  // you should use upper case to access mongoose model
}