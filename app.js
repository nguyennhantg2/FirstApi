const Koa = require('Koa');

const bodyParser = require("koa-bodyparser");

const commentRouter = require("./routes/index");

const app = new Koa();

app.use(bodyParser());

app.use(commentRouter.routes()).use(commentRouter.allowedMethods());

app.use(ctx => {
    ctx.body = "hello Koa nha";
})

app.listen(4000);

console.log('Koa is running');