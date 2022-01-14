const comments = require('./index').db('store').collection('Comment');

const ObjectId = require('mongodb').ObjectId;

const save = async ({cmt_by, content, in_id}) => {
    const result = await comments.insertOne({cmt_by, content, in_id});
    return result.ops[0];
}

const getAll = async () => {
    const cursor = await comments.find();
    return cursor.toArray();
}


const getById = async (id) => {
    return await comments.findOne({_id: ObjectId(id)});
}


const update = async (id, {content}) => {
    const result = await comments.replaceOne({_id:ObjectId(id)}, {content});
    return result.ops[0];
}

const removeById = async id => {
    await comments.deleteOne({_id:ObjectId(id)});
}


module.exports = {getAll, getById, removeById, save, update}