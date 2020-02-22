const express = require('express');
const router = express.Router();
const User = require('../model/user');
const Topic = require('../model/topic');
const Comment = require('../model/comment');
const Follow = require('../model/follow');
const Collection = require('../model/collection');
const multer = require('multer');
const path = require('path');

//处理登录请求
router.post("/api/login", async (req, res) => {
    let result = await User.login(req.body);
    //登录成功
    if (result.code == 101) {
        //把用户的信息保存到session中
        req.session.user = result.user;
        res.json(result);
    }
    //登录失败
    else {
        res.json(result);
    }
})

//处理注册用户的请求
router.post("/api/register", async (req, res) => {
    let result = await User.register(req.body);
    res.json(result)

})
//获取session数据的请求
router.get("/api/getsession", async (req, res) => {
    if (req.session.user) {
        var user = req.session.user;
        res.json({ code: 101, msg: "查询成功！", user });
    }
    else {
        res.json({ code: 100, msg: "未登录，请登录后再试！" })
    }
})
//退出登录
router.get("/api/logout", (req, res) => {
    req.session.user = null;
    res.json({ code: 101, msg: "操作成功，您已退出登录！" })
})

//配置multer存储文件的信息(包含要存储的文件的名字已经文件存在哪里)
var storage = multer.diskStorage({
    //配置图片存储的位置
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/img'))
    },
    //配置图片保存的名字
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }
})

//创建一个multer对象用来处理文件上传
//multer 可以帮我们解析 content-type:mulipart/form-data这种方式提交的请求数据
var upload = multer({ storage: storage })
var uploadimg = multer({
    storage: multer.diskStorage({
        //配置图片存储的位置
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, '../public/img'))
        },
        //配置图片保存的名字
        filename: function (req, file, cb) {
            cb(null, Date.now() + "-" + file.originalname)
        }
    })
})
//上传多个图片，发表帖子
router.post("/api/uploadimg", uploadimg.array('file', 9), async (req, res) => {
    if (req.session.user) {
        var user = req.session.user;
        var files = req.files;
        //获取文件保存的路径
        var img_src = [];
        files.map(item => {
            var savepath = path.join("/public/img", item.filename);
            img_src.push(savepath)
        })
        req.body.img_src = img_src;
        req.body.nickname = user.nickname;
        req.body.user_id = user._id;
        req.body.icon = user.avatar;
        req.body.img_src = img_src
        req.body.img = img_src[0]
        let result = await Topic.AddTopic(req.body);
        if (result.code == 101) {
            res.json({ code: 101, message: '发布成功！' })
        }
        else {
            res.json({ code: 100, message: '发布失败！' });
        }
    }
    else{
        res.json({ code: 102, message: '请先登录再发布帖子！' });
    }

})
//处理用户信息修改
router.post("/api/modifyperson", upload.single('avatar'), async (req, res) => {
    var file = req.file;
    //获取文件保存的路径
    var savepath = path.join("/public/img", file.filename);
    //将文件保存的路径信息放入到req.body里面
    req.body.avatar = savepath;
    let result = await User.ModifyUserMessage(req.body._id, req.body);
    if (result.code == 101) {
        //当修改用户信息成功之后，我们需要将最新的user重新保存到session
        req.session.user = result.user;
        res.json({ code: 101, msg: "用户信息更新成功！" })
    }
    else {
        res.json({ code: 100, msg: "用户信息更新失败" })
    }
})

//处理修改密码的请求
router.post("/api/modifyPassword", async (req, res) => {
    //修改密码
    var body = req.body;
    //1.判断用户输入的原密码和当前的session中所保存的用户密码是否一致
    if (body.oldpassword == req.session.user.password) {
        //2.如果一致，说明用户输入的原密码正确，则继续判断用户输入的密码和确认密码是否一致，如果一致，则可以修改密码
        if (body.renewpassword == body.newpassword) {
            //3.执行修改密码操作
            let result = await User.ModifyPwd(body.newpassword, req.session.user._id);
            //4.修改密码成功
            if (result.code == 101) {
                req.session.user.password = body.newpassword;
                res.json(result);
            }
        }
        //用户输入的两次密码不一致
        else {
            res.json({ code: 100, msg: "两次密码不一致" });
        }
    }
    //用户输入的原密码错误
    else {
        res.json({ code: 100, msg: "原密码错误" });
    }
})

//帖子的发布
router.post("/api/posttopic", async (req, res) => {
    if (req.session.user) {
        var img_src = JSON.parse(req.body.img_src)
        var user = req.session.user;
        var body = req.body;
        body.nickname = user.nickname;
        body.user_id = user._id;
        body.icon = user.avatar;
        body.img_src = img_src
        let result = await Topic.AddTopic(body)
        if (result.code == 101) {

            res.json({ code: 101, message: '发布成功！' })
        }
        else {
            res.json({ code: 100, message: '发布失败！' });
        }
    } else {
        res.json({ code: 102, message: '请先登录再发布！' })
    }
})
//获取全部帖子
router.get("/api/get/topic", async (req, res) => {
    let result = await Topic.GetTopics();
    var topicAll = result.topics;
    if (result.code == 101) {
        res.json({ code: 101, message: '获取全部帖子成功', topics: topicAll })
    } else {
        res.json({ code: 100, message: '获取全部帖子失败！', topics: topicAll })
    }
})
//通过plate查询帖子
router.post("/api/get/topicByPlate", async (req, res) => {
    var plate = req.body.plate;
    var result = await Topic.GetTopicByPlate(plate)
    var topics = result.topic;
    res.json({ code: 101, message: '获取分类帖子成功', topics: topics })
})

//通过帖子id查询帖子的内容
router.post("/api/get/topicById", async (req, res) => {
    var _id = req.body._id;
    var result = await Topic.GetTopicById(_id);
    var topic = result.topic;
    var c = topic.clickNum;
    var clickNum = c + 1
    var result2 = await Topic.GetClickNumAndUpdate(_id, clickNum)
    res.json({ code: 101, message: '获取帖子内容成功！', topic: topic })

})
//通过帖子id查询本帖子的评论内容
router.post("/api/get/topic/comment", async (req, res) => {
    var _id = req.body._id;
    var result = await Comment.GetComment(_id);
    var comments = result.comment
    if (result.code == 101) {
        res.json({ code: 101, message: '获取成功！', comments })
    }
    else {
        res.json({ code: 100, message: '获取失败！' })
    }
})
//提交评论处理
router.post("/api/commit/comment", async (req, res) => {
    var commentData = req.body;
    if (req.session.user) {
        var user = req.session.user;
        commentData.conmmenter_avatar = user.avatar;
        commentData.comment_nickname = user.nickname;
        commentData.commenter_id = user._id;
        commentData.comment_nickname = user.nickname;
        let result = await Comment.AddComment(commentData);

        if (result.code == 101) {
            var _id = commentData.topic_id;
            var result2 = await Topic.GetTopicById(_id);
            var topic = result2.topic;
            var c = topic.commentNum;
            var commentNum = c + 1;
            let result3 = await Topic.GetCommentNumAndUpdate(_id, commentNum)
            res.json({ code: 101, message: '提交成功！' })
        }
        else {
            res.json({ code: 100, message: '提交失败！' })
        }
    }
    else {
        res.json({ code: 102, message: '请先登录再评论！' })
    }
})

//关注请求处理
router.post("/api/addFriend", async (req, res) => {
    if (req.session.user) {
        var body = req.body;
        body.userID = req.session.user._id.toString();
        body.user_nickname = req.session.user.nickname;
        body.user_avatar = req.session.user.avatar;
        var result = await Follow.AddFriend(body);
        res.json({ code: 101, message: '关注成功！' });
    }
    else {
        res.json({ code: 100, message: '请先登录' })
    }
})
//判断是否已经关注了
router.post("/api/judgeFriend", async (req, res) => {
    var body = req.body;
    if (req.session.user) {
        body.userID = req.session.user._id
        let friend_result = await Follow.JudgeFriend(body);
        var friend = friend_result.friend;
        res.json({ code: 101, message: '查询关注信息成功!', judgeInfor: friend })
    }
    else {
        res.json({ code: 100, message: '未登录，查询关注信息失败！' })
    }

})
//取消关注的处理
router.post("/api/delete/friend", async (req, res) => {
    if (req.session.user) {
        var body = req.body;
        body.userID = req.session.user._id;
        var result = await Follow.DeleteFriends(body);
        res.json({ code: 101, message: '取消关注成功' });
    }
    else {
        res.json({ code: 100, message: '请先登录' })
    }
})
//来到我的帖子
router.post("/api/getMyTopics", async (req, res) => {
    var userID = req.body.userID;
    var result = await Topic.GetTopicByUserID(userID);
    var topics = result.topics;
    res.json({ code: 101, message: '获取我的帖子成功！', topics: topics });

})
//来到我的关注
router.post("/api/getMyFriends", async (req, res) => {
    var userID = req.body.userID;
    var result = await Follow.GetFriends(userID);
    if (result.code == 101) {
        res.json({ code: 101, message: '获取我的帖子成功！', friends: result.Friends });
    }
})
//查看我的粉丝
router.post("/api/getMyFans", async (req, res) => {
    var userID = req.body.userID;
    var result = await Follow.GetFans(userID);
    if (result.code == 101) {
        res.json({ code: 101, message: '获取我的粉丝成功！', Fans: result.Fans });
    }
})
//删除帖子的请求
router.post("/api/delete/myTopic", async (req, res) => {
    var topicID = req.body.topicID;
    var result = await Topic.DeleteTopic(topicID);
    if (result.code == 101) {
        res.json({ code: 101, message: '删除帖子成功！' });
    }
})

//来到我的评论
router.post("/api/getMyComments", async (req, res) => {
    var userID = req.body.userID;
    var result = await Comment.GetCommentById(userID);
    var comments = result.comments;
    res.json({ code: 101, message: '查询我的评论成功！', comments: comments });

})
//删除评论
router.post("/api/delete/myComment", async (req, res) => {
    var commentID = req.body.commentID;
    var result2 = await Comment.GetCommentsByCommentId(commentID);
    var topicID = result2.comment[0].topic_id;
    let result3 = await Topic.GetTopicById(topicID);
    if (result3.topic) {
        var c = result3.topic.commentNum;
        var result = await Comment.DeleteComment(commentID);
        if (result.code == 101) {
            var commentNum = c - 1;
            let result4 = await Topic.GetCommentNumAndUpdate(topicID, commentNum)
            res.json({ code: 101, message: '删除我的评论成功！' });
        }
    }
    else {
        var result = await Comment.DeleteComment(commentID);
        if (result.code == 101) {
            res.json({ code: 101, message: '删除我的评论成功！' });
        }

    }

})

//搜索文章标题
router.post("/api/search", async (req, res) => {
    var searchContent = req.body.searchContent;
    var result = await Topic.GetTopicBySearch(searchContent);
    if (result.code == 101) {
        res.json({ code: 101, message: '获取搜索内容成功！', topics: result.topics });
    }
})

//添加收藏
router.post("/api/add/collection", async (req, res) => {
    var body = req.body;
    let result = await Collection.AddCollection(body);
    if (result.code == 101) {
        var topic_id = body.topic_id;
        var result2 = await Topic.GetTopicById(topic_id);
        var topic = result2.topic;
        var c = topic.likeNum;
        var likeNum = c + 1;
        let result3 = await Topic.GetLikeNumAndUpdate(topic_id, likeNum)
        res.json({ code: 101, message: '添加收藏成功！' })
    }
    else if (result.code == 100) {
        res.json({ code: 100, message: "您已经收藏过了！" });
    }
})
//获取我的收藏
router.post("/api/get/myCollection", async (req, res) => {
    var user_id = req.body.userID;
    let result = await Collection.getCollectionById(user_id);
    if (result.code == 101) {
        res.json({ code: 101, message: '查询我的收藏成功！', collection: result.collection })
    }
})
//删除收藏
router.post("/api/delete/collection", async (req, res) => {
    var _id = req.body._id;
    var result2 = await Collection.getCollectionBy_id(_id);
    var topic_id = result2.collection[0].topic_id;
    let result = await Collection.deleteCollection(_id);
    if (result.code == 101) {
        var result3 = await Topic.GetTopicById(topic_id);
        var topic = result3.topic;
        var c = topic.likeNum;
        var likeNum = c - 1;
        let result4 = await Topic.GetLikeNumAndUpdate(topic_id, likeNum)
        res.json({ code: 101, message: '取消收藏成功！' })
    }
})
//获取热门帖子的处理
router.get("/api/get/hostPost", async (req, res) => {
    var result = await Topic.GetHostPost();
    if (result.code == 101) {
        res.json({ code: 101, message: '获取热门帖子成功！', topics: result.topics })
    }

})
//轮播图随机返回5条数据的处理
router.get("/api/get/lunboData",async (req,res)=>{
    var result = await Topic.GetlunboData();
    if (result.code == 101) {
        res.json({ code: 101, message: '获取轮播数据成功！', lunboData: result.topics })
    }
})

module.exports = router;