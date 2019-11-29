const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/forumProject', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("已连接数据库......")
});
var Schema = mongoose.Schema;
var commentSchema = new Schema({
    topic_id: {
        type: String,
        required: [true, "评论的帖子不能为空"]
    },
    created_time: {
        type: Date,
        default: Date.now
    },
    last_modified_time: {
        type: Date,
        default: Date.now
    },
    commenter_id: {
        type: String,
        required: [true, "评论者的id不能为空"]
    },
    conmmenter_avatar: {
        type: String,
        required: [true, "评论者的头像不能为空"]
    },
    comment_nickname: {
        type: String,
        required: [true, "评论者的姓名不能为空"]
    },
    comment_content: {
        type: String,
        required: [true, "评论者的内容不能为空"]
    }
})
//根据Scheme创建一个模型层类
var Comment = mongoose.model('Comment', commentSchema);

//评论的方法
async function AddComment(comment) {
    var C = new Comment(comment);
    let result = await C.save();
    return { code: 101, msg: "评论保存成功" };
}
//获取评论的方法
async function GetComment(id) {
    let comment = await Comment.find({ topic_id: id });
    return { code: 101, msg: "查找评论成功", comment: comment };
}
//根据用户id查询评论
async function GetCommentById(id) {
    let comments = await Comment.find({ commenter_id: id }).sort({ _id: -1 });
    return { code: 101, msg: "查找评论成功", comments: comments };
}
//根据评论id查询评论
async function GetCommentsByCommentId(_id) {
    let result = await Comment.find({ _id: _id });
    return { code: 101, msg: "查找评论成功", comment: result };
}
//根据评论id删除评论
async function DeleteComment(commentID) {
    var commentID = commentID;
    let result = await Comment.deleteMany({ _id: commentID });
    return { code: 101, msg: "删除成功！" };
}
exports.AddComment = AddComment;
exports.GetComment = GetComment;
exports.GetCommentById = GetCommentById;
exports.DeleteComment = DeleteComment;
exports.GetCommentsByCommentId = GetCommentsByCommentId;