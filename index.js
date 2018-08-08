const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Vitaly\n';
});

app.listen(5500);