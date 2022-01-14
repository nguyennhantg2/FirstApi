const {getAll, getById, removeById, save, update} = require("../dal/comment.dao");

const createComment = async ({cmt_by, content, in_id}) => {{
    const comment = {
        cmt_by,
        content,
        in_id
    }
    return await save(comment);
}}


const getComments = async () => {
    return await getAll();
}

const getComment = async (id) => {
    return await getById(id);
}

const deleteComment = async id => {
    return await removeById(id);
}

const updateComment = async (id, {content}) => {
    return await update(id, {content});
}

module.exports = {createComment, getComments, getComment, deleteComment, updateComment}