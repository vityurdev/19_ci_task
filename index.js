const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Vitaly';
});

app.listen(5500);