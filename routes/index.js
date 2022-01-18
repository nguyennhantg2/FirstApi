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
    // let comment = ctx.request.body;
    let comment =  {
        "cmt_by": "61ce6c246f3081186c49a17f",
        "content": "Bài đăng hay quá ạ",
        "in_id": "61cd2f5a3fa0d8023920ee85"
    }
    console.log('comment', comment)
    console.log('comment-ndv', ctx.request)
    comment = await updateComment(id, comment);
    ctx.status = 200;
    ctx.body = comment;
})


module.exports = router;
