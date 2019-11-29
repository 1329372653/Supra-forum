const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/forumProject', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("已连接数据库......")
});
var Schema = mongoose.Schema;
var collectionSchema = new Schema({
    topic_id: {
        type: String,
        required: [true, "收藏的帖子id不能为空"]
    },
    collector_id: {
        type: String,
        required: [true, "收藏者的id不能为空"]
    },
    collector_avatar: {
        type: String,
        required: [true, "收藏者的头像不能为空"]
    },
    collector_nickname: {
        type: String,
        required: [true, "收藏者的昵称不能为空"]
    },
    poster_nickname:{
        type: String,
        required: [true, "帖子的作者昵称不能为空"]
    },
    topic_title:{
        type: String,
        required: [true, "帖子的标题不能为空"]
    },
    topic_content:{
        type: String,
        required: [true, "帖子的内容不能为空"]
    },
    poster_avatar:{
        type: String,
        required: [true, "发帖者的头像不能为空"]
    },
    topic_createdTime:{
        type: String,
        required: [true, "帖子的发布时间不能为空"]
    },
    created_time: {
        type: Date,
        default: Date.now
    },
    last_modified_time: {
        type: Date,
        default: Date.now
    }
})
//根据Scheme创建一个模型层类
var Collection = mongoose.model('Collection', collectionSchema);

//增加收藏的处理
async function AddCollection(body) {
    var topic_id = body.topic_id;
    var collector_id =body.collector_id;
    var result = await Collection.find({ topic_id: topic_id, collector_id: collector_id })
    if (result.length == 0) {
        var C = new Collection(body);
        let result = await C.save();
        return { code: 101, msg: "添加收藏成功！" };
    }
    else{
        return { code: 100, msg: "已经收藏了！" };
    }
}
//通过收藏者id查询收藏的帖子信息
async function getCollectionById(collector_id){
    let result = await Collection.find({collector_id:collector_id})
    return { code: 101, msg: "查找收藏成功", collection: result };
}
//删除收藏的处理
async function deleteCollection(_id){
    let result = await Collection.deleteMany({_id:_id})
    return { code: 101, msg: "删除成功！" };
}
//通过_id查询收藏信息
async function getCollectionBy_id(_id){
    let result = await Collection.find({_id:_id})
    return { code: 101, msg: "查找收藏成功", collection: result };
}

exports.AddCollection = AddCollection;
exports.getCollectionById = getCollectionById;
exports.deleteCollection = deleteCollection;
exports.getCollectionBy_id = getCollectionBy_id;