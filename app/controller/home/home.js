const Model = require('../../mocks/article/list');

exports.index = function* (ctx) {
  console.log("render home")
  yield ctx.render('home/home.js', Model.getPage(1, 10));
};


exports.client = function* (ctx) {
    console.log("renderClient home")
  yield ctx.renderClient('home/home.js', Model.getPage(1, 10));
};


exports.element = function* (ctx) {
  yield ctx.render('element/element.js', Model.getPage(1, 10));
};

exports.pager = function* (ctx) {
  const pageIndex = ctx.query.pageIndex;
  const pageSize = ctx.query.pageSize;
  ctx.body = Model.getPage(pageIndex, pageSize);
};
