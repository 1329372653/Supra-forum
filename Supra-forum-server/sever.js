const express = require('express');
const app = express();
const router = require('./router/router');
const path = require('path');
const bodyParser = require('body-parser')
const expressSession = require('express-session')
var fs = require('fs');

//使用express-session 中间件
app.use(expressSession({
	//cookie的名字
    name : "gaofei", 
    //cookie签名的信息
    secret : 'secret',
    //cookie的有效时间
    cookie : {
        maxAge : 1000 * 60 * 60 * 24, 
    },
    //即使session的信息没有变化，也会重新保存session
    resave : false,
    //如果saveUninitialized为true，他会将没有初始化的session的数据保存到storage中
    saveUninitialized: false,
    //主要作用：每次请求都重置cookie过期时间
    rolling: true,
    //指定session数据存储的地方(数据库),默认情况下session会话数据是保存在服务器的内存中
    store:null
}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use("/public",express.static(path.join(__dirname, './public')))
app.use("/node_modules",express.static(path.join(__dirname, './node_modules')))

//配置art-template
app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/')) // 默认就是 ./views 目录

//解析上传的图片的工具
var formidable = require('formidable');

//提交文本内容的时候做的处理
app.post('/submit',(req,res)=>{   
    //把文本暂时性的放在了一个html文件上，可以将其存在数据库里   
    // fs.writeFile('./public/temp.html',req.body.content,()=>{
    //     console.log(req.body.content);
    //     res.send('ok')
    // })  
    console.log(req.body.content);
        res.send('ok')
})

//接收上传图片的时候，图片的处理
app.post('/api/upload',(req,res)=>{
    // 文件将要上传到哪个文件夹下面
    var uploadfoldername = 'uploadfiles';
    var uploadfolderpath = __dirname + '/public/' + uploadfoldername;

    // ---------------------- 跨域上传 ----------------------
    // 使用第三方的 formidable 插件初始化一个 form 对象
    var form = new formidable.IncomingForm();

    //设置接收到的图片存储的位置，在这里只是一个暂存文件夹
    form.uploadDir = path.join(__dirname,"/temp");
    
    //处理 request
    form.parse(req, function (err, fields, files) {
        if (err) {
            return console.log('formidable, form.parse err');
        }
        //取出图片文件内容
        var file = files['wangEditor_uploadImg'];
        // formidable 会将上传的文件存储为一个临时文件，现在获取这个文件的路径
        var tempfilepath = path.join(__dirname,'/temp/'+path.basename(file.path));
        // 获取文件类型
        var type = file.type;
        // 获取文件名，并根据文件名获取扩展名
        var filename = file.name;
        var extname = path.extname(filename)
        // 将文件名重新赋值为一个随机数（避免文件重名）
        filename = Math.random().toString().slice(2) + extname;

        // 构建将要存储的文件的完整路径
        var filenewpath = uploadfolderpath + '/' + filename;
        // 将临时文件保存为正式的文件

        let readStream = fs.createReadStream(tempfilepath)
        let writeStream = fs.createWriteStream(filenewpath)
        
        readStream.on('data',(chunk)=>{
            writeStream.write(chunk)
        })
        readStream.on('end',(chunk)=>{
            var imgurl = '/public/uploadfiles/'+filename;
            var result = {url:"http://localhost:9000"+imgurl }
            res.send(result);
        })
    });
})


//设置跨域请求
// app.all('*', function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", ' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
//   });

app.use("/",router);



app.listen(9000,function(){
    console.log("服务器正在运行中....")
})