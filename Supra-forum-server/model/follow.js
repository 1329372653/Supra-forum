const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/forumProject', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("已连接数据库......")
});
var Schema = mongoose.Schema;
var followSchema = new Schema({
    userID: {
        type: String,
        required: [true, "用户id不能为空"]
    },
    user_nickname: {
        type: String,
        required: [true, "用户的姓名不能为空"]
    },
    user_avatar: {
        type: String,
        required: [true, "用户的头像不能为空"]
    },
    friendID: {
        type: String,
        required: [true, "关注的人的id不能为空"]
    },
    friend_avatar: {
        type: String,
        required: [true, "关注的人的头像不能为空"]
    },
    friend_nickname: {
        type: String,
        required: [true, "关注的人的姓名不能为空"]
    },
    created_time: {
        type: Date,
        default: Date.now
    },
    last_modified_time: {
        type: Date,
        default: Date.now
    },
})
//根据Scheme创建一个模型层类
var Follow = mongoose.model('follow', followSchema);
//添加好友
async function AddFriend(body) {
    var userID = body.userID;
    var friendID = body.friendID;
    var result = await Follow.find({ friendID: `${friendID}` ,userID:userID})
    if (result.length == 0 ) {
        var f = new Follow(body);
        let result = await f.save();
        return { code: 101, msg: "保存好友成功" };
    }
    else{
        return { code: 100, msg: "已经关注了！" };
    }

}

//查询是否已经关注了
async function JudgeFriend(body) {
    var friendID = body.friend_id;
    var userID = body.userID;
    let result = await Follow.find({ friendID: friendID,userID:userID })
    return { code: 101, msg: "查找成功！", friend: result };
}
//取消关注的处理
async function DeleteFriends(body){
    var userID = body.userID;
    var friendID = body.friend_id;
    let result = await Follow.deleteMany({friendID: friendID,userID:userID});
    return { code: 101, msg: "取消关注成功！"};
}
//根据用户id查询我关注的人
async function GetFriends(userID){
    let Friends = await Follow.find({userID:userID}).sort({_id:-1});
    return { code: 101, msg: "查询成功！",Friends:Friends};
}
//根据用户id查询我的粉丝
async function GetFans(userID){
    let Fans = await Follow.find({friendID:userID}).sort({_id:-1});
    return { code: 101, msg: "查询成功！",Fans:Fans};
}


exports.AddFriend = AddFriend;
exports.JudgeFriend = JudgeFriend;
exports.DeleteFriends =DeleteFriends;
exports.GetFriends = GetFriends;
exports.GetFans = GetFans;