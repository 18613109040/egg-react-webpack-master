module.exports = app => {
  return async function proxy(ctx, next) {
     await next();

    let body = this.body;
    const {request} = ctx ;
    const result = await ctx.curl(app.host+request.url, {
          method: request.method,
          headers:request.header,
          contentType: request.header['content-type'],
          data: JSON.stringify(body),
          dataType: 'json',
       });
    ctx.status = result.status;
    ctx.set(result.headers);
    ctx.body = result.data;
  };
};