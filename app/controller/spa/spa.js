const reactRouter = require('react-router');

exports.client = function* (ctx) {
  yield ctx.renderClient('spa/client.js', {});
};

exports.redux = function* (ctx) {
  yield ctx.renderClient('spa/redux.js', {});
};

exports.ssr = function* (ctx) {
  console.log(ctx.url)
  yield ctx.render('spa/ssr.js', { url: ctx.url });
};

