const Router = require('@koa/router');

const {createComment, getComments, getComment, deleteComment, updateComment} = require("../api/comment.api");

const router = new Router({
    prefix: "/comment"
});

router.get("/", async ctx => {
    ctx.body = await getComments();
});

router.post("/", async ctx => {
    let comment = ctx.request.body;
    comment = await createComment(comment);
    ctx.response.status = 200;
    ctx.body = comment;
})

router.get("/:id", async ctx =>{
    const id = ctx.params.id;
    console.log(id);
    ctx.body = await getComment(id);
})

router.delete("/:id", async ctx =>{
    const id = ctx.params.id;
    ctx.body = await deleteComment(id);
})

router.put("/:id", async ctx =>{
    const id = ctx.params.id;
    let comment = ctx.request.body;
    comment = await updateComment(comment);
    ctx.status = 200;
    ctx.body = comment;
})


module.exports = router;
