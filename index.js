const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Vitaly';
});

app.listen(5500);

// commit 1
// commit 2
// commit 3
// commit 4

// some change
// ыавыа