const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/forumProject',{useNewUrlParser:true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("已连接数据库......")
});
var Schema = mongoose.Schema;
var userSchema = new Schema({
    email: {
        type: String,
        //表单验证
        validate: {
            validator: function(v) {
                return /^\w+@\w+\.\w+(\.\w+)?$/.test(v);
            },
            message: "邮箱格式不正确"
        },
        required: [true,'邮箱不能为空']
    },
    nickname: {
        type: String,
        required: [true,"用户名不能为空"]
    },
    password: {
        type: String,
        required: [true,"密码不能为空"]
    },
    created_time: {
        type: Date,
        default: Date.now
    },
    last_modified_time: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type: String,
        default: '/public/img/default-img/avatar-default.png'
    },
    bio: {
        type: String,
        default: 'Hello，记录美好生活！'
    },
    gender: {
        type: Number,
        enum: [-1, 0, 1],
        default: -1
    },
    birthday: {
        type: Date
    },
    status: {
        type: Number,
        // 0 没有权限限制
        // 1 不可以评论
        // 2 不可以登录
        enum: [0, 1, 2],
        default: 0
    }
})
//根据Scheme创建一个模型层类
var User = mongoose.model('User', userSchema);

//注册的方法
async function register(user){
    //先查看用户数据是否存在
    let users = await User.find({$or:[{nickname:user.nickname},{email:user.email}]});
    //用户信息不存在，注册
    if(users.length == 0){
        var u = new User(user);
        let result = await u.save();
        return {code:101,msg:"用户名昵称已经存在"};
    }
    //用户信息存在，不可注册
    else{
        return {code:100,msg:"用户名昵称已经存在"};
    }
}

//修改用户信息的方法
async function ModifyUserMessage(id,user){
    //{new:true} 获取修改后的数据
    let result = await User.findByIdAndUpdate(id,user,{new:true})
    return {code:101,msg:"修改用户信息成功",user:result};
}
//修改密码
async function ModifyPwd(newpwd,id){
    let result = await User.findByIdAndUpdate(id,{$set:{password:newpwd}});
    return {code:101,msg:"修改密码成功"};
}
//通过帖子id查询发帖人的信息
async function GetAuthorById(user_id){
    let author = await User.find({_id:user_id});
    return {code:101,msg:"查询发帖人信息成功！",author:author};
}
//通过用户id查询用户信息
async function GetUserById(user_id){
    let user = await User.find({_id:user_id});
    return {code:101,msg:"查询用户信息成功！",user:user};
}





//登录的方法
async function login(user){
    let users = await User.find({email:user.email,password:user.password});
    if(users.length >0){
        return {code:101,msg:"success",user:users[0]};
    }
    else{
        return {code:100,msg:"用户名/密码错误"};
    }
}

//注册的方法
async function register(user){
    //先查看用户数据是否存在
    let users = await User.find({$or:[{nickname:user.nickname},{email:user.email}]});
    //用户信息不存在，注册
    if(users.length == 0){
        var u = new User(user);
        let result = await u.save();
        return {code:101,msg:"注册成功！"};
    }
    //用户信息存在，不可注册
    else{
        return {code:100,msg:"用户名昵称已经存在！"};
    }
}


exports.register = register;
exports.login = login;
exports.ModifyUserMessage = ModifyUserMessage;
exports.ModifyPwd = ModifyPwd;
exports.GetAuthorById = GetAuthorById;
exports.GetUserById = GetUserById;