const Router = require("koa-router")
const router = new Router()
const comments = require('./Comments')
router.use("/Comments", comments)
module.exports = router.routes()
