/*
 Navicat Premium Data Transfer

 Source Server         : mongodb
 Source Server Type    : MongoDB
 Source Server Version : 40200
 Source Host           : localhost:27017
 Source Schema         : forumProject

 Target Server Type    : MongoDB
 Target Server Version : 40200
 File Encoding         : 65001

 Date: 17/02/2020 17:01:03
*/


// ----------------------------
// Collection structure for collections
// ----------------------------
db.getCollection("collections").drop();
db.createCollection("collections");

// ----------------------------
// Documents of collections
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("forumProject");
db.getCollection("collections").insert([ {
    _id: ObjectId("5de0d5c35dd0a380dbc1aca4"),
    "topic_id": "5de0d5bc5dd0a380dbc1aca3",
    "collector_id": "5de0d2696e78ad79c2e2c64a",
    "collector_avatar": "/public/img/1575015590957-1.jpg",
    "collector_nickname": "寂寞ゝ专属.",
    "poster_nickname": "寂寞ゝ专属.",
    "topic_title": "Adobe发布低门槛AR创作Aero、Dimension 3.0等，带来AR营销机遇！",
    "topic_content": "此前，在9月20日的《在新媒介方面“上下求索”的Adobe，最终选择了AR》一文中，VRPinea曾探讨了Adobe在新媒介方面的漫漫探索，并最终选择了AR（感兴趣的读者可点击蓝字自行阅读）。\n\n而本月，于美国当地时间11月2日-6日举办的MAX大会上，Adobe展示了旗下一系列设计工具的最新动态，其中包括最新推出的AR设计工具Aero、以及支持AR的Dimension 3.0，Adobe在AR方面的布局徐徐展开。细谈Adobe在AR方面的布局\n\n在明确了AR的发展方向后，Adobe逐步展开了在此方面的行动。Adobe先是展示了两款基于AR设计的无文本UI概念，随后又正式发行了AR制作工具Aero，并在MAX大会上展示了Dimension 3.0支持AR的新消息。\n\nAdobe XD提出无文本UI设计：Text-Free UI Kit for Adobe XD\n\n在此前体验多人开放世界VR游戏《故土》的时候，小编为游戏惊艳的画面和开放的世界而着迷。但与此同时，小编也发现《故土》这样的VR游戏存在一个问题：由于是针对PC/VR用户同时开发，《故土》的UI设计基本选择了传统网游所采用的文本为主的UI设计。这一UI在传统的2D显示器上问题不大，但在全景的VR环境中体验并不算佳。\n\n此外，过多文本的UI设计也较为影响阅读困难人群以及视障人群的用户体验。目前，世界文盲比例仍高达20%，这一受众群体很难与存在大量文本的UI交互。而对于视障群体而言，在文本不易于识别的情况下，有着高对比度和简单形状的图标能够提供情景上下文。但慢慢随着语音界面以及AR技术的发展，创建UI时文本已逐渐不再是必备的组件。语音界面允许用户通过语音命令与应用进行交互；AR体验也可以在消除潜在视觉干扰的同时添加有用的信息：通过图像和动画来提供清晰的指令，能帮助用户在不需要阅读的情况下与UI交流。\n\n为此， Adobe于10月31日提出了一种用以取代文本UI的设计方案：Text-Free UI Kit for Adobe XD。该方案由Cara Neel设计，利用了语音、图像和动画来为用户提供清晰的指令。Text-Free UI Kit包含两个设计概念，两者均采用了语音界面和AR体验。首个概念是一款移动导航应用程序Polaris，允许用户通过语音命令和AR路标前往目的地；第二个概念则是一款虚拟助手ARtie，能够帮助用户识别不熟悉的对象和位置，并帮助用户解决日常生活中可能遇到的问题。Cara Neel还为其他AR设计者提供了一个由不同图标和组件组成的库，帮助设计者创建无文本的UI交互界面。\n\nAdobe推出无需掌握编程技巧的AR创作工具Aero\n\n11月5日，Adobe正式发行了旗下AR创作工具Adobe Aero。该工具允许设计师在AR环境中构建和分享沉浸式体验，并无需掌握任何编程技巧。\n\n与其他AR创作工具相比，Adobe Aero具备如下的功能。可视化创作：Aero能够提供直观且不牺牲质量的创作体验。用户可以使用可视化UI构建AR体验，而分步说明则将引导用户构建独特的AR场景；",
    "poster_avatar": "/public/img/1575015590957-1.jpg",
    "topic_createdTime": "2019-11-29T08:24:28.048Z",
    "created_time": ISODate("2019-11-29T08:24:35.688Z"),
    "last_modified_time": ISODate("2019-11-29T08:24:35.689Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("collections").insert([ {
    _id: ObjectId("5de0df095dd0a380dbc1acbc"),
    "topic_id": "5de0def05dd0a380dbc1acbb",
    "collector_id": "5de0de4f5dd0a380dbc1acba",
    "collector_avatar": "/public/img/1575018084252-下载 (1).jpeg",
    "collector_nickname": "殃国娇颜",
    "poster_nickname": "殃国娇颜",
    "topic_title": "全新一代帕萨特来了！还是你儿时的样子吗？",
    "topic_content": "“帕萨特”这三个字几乎充斥了我的童年，可以说它启蒙了我对“好车”的概念，真皮座椅、实木内饰都让童年的我对它刮目相看。时间回到2000年，当时上海大众生产的帕萨特B5正式投放国内市场，宽大圆润的造型可以说正中大家的下怀，成为当时国产轿车中的标杆产品，时至今日帕萨特在国内市场已经累计销售270万台，可以说是B级车中的常青树，而惊人的销量背后，自然离不开优秀的产品力，而我也有幸在这么多年以后，以媒体的身份去体会全新一代帕萨特，下面我们就来了解一下这台再熟悉不过的“帕萨特”。",
    "poster_avatar": "/public/img/1575018084252-下载 (1).jpeg",
    "topic_createdTime": "2019-11-29T09:03:44.867Z",
    "created_time": ISODate("2019-11-29T09:04:09.875Z"),
    "last_modified_time": ISODate("2019-11-29T09:04:09.875Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("collections").insert([ {
    _id: ObjectId("5de0e0cc5dd0a380dbc1acbe"),
    "topic_id": "5de0def05dd0a380dbc1acbb",
    "collector_id": "5ddf83c8b78aa66cfb5b025e",
    "collector_avatar": "/public/img/1575015920996-2.jpg",
    "collector_nickname": "gaofei",
    "poster_nickname": "殃国娇颜",
    "topic_title": "全新一代帕萨特来了！还是你儿时的样子吗？",
    "topic_content": "“帕萨特”这三个字几乎充斥了我的童年，可以说它启蒙了我对“好车”的概念，真皮座椅、实木内饰都让童年的我对它刮目相看。时间回到2000年，当时上海大众生产的帕萨特B5正式投放国内市场，宽大圆润的造型可以说正中大家的下怀，成为当时国产轿车中的标杆产品，时至今日帕萨特在国内市场已经累计销售270万台，可以说是B级车中的常青树，而惊人的销量背后，自然离不开优秀的产品力，而我也有幸在这么多年以后，以媒体的身份去体会全新一代帕萨特，下面我们就来了解一下这台再熟悉不过的“帕萨特”。",
    "poster_avatar": "/public/img/1575018084252-下载 (1).jpeg",
    "topic_createdTime": "2019-11-29T09:03:44.867Z",
    "created_time": ISODate("2019-11-29T09:11:40.329Z"),
    "last_modified_time": ISODate("2019-11-29T09:11:40.329Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("collections").insert([ {
    _id: ObjectId("5de0e1045dd0a380dbc1acc2"),
    "topic_id": "5de0de315dd0a380dbc1acb9",
    "collector_id": "5ddf83c8b78aa66cfb5b025e",
    "collector_avatar": "/public/img/1575015920996-2.jpg",
    "collector_nickname": "gaofei",
    "poster_nickname": "王思聪",
    "topic_title": "吃个热狗怎么呢？嗯？",
    "topic_content": "谁不让我吃热狗的，滚出来！",
    "poster_avatar": "/public/img/1575017936343-7c1ed21b0ef41bd5a7f81d995ada81cb39db3d37.png",
    "topic_createdTime": "2019-11-29T09:00:33.624Z",
    "created_time": ISODate("2019-11-29T09:12:36.871Z"),
    "last_modified_time": ISODate("2019-11-29T09:12:36.871Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("collections").insert([ {
    _id: ObjectId("5de0e29d5dd0a380dbc1acd8"),
    "topic_id": "5de0dfdf5dd0a380dbc1acbd",
    "collector_id": "5de0d8745dd0a380dbc1aca9",
    "collector_avatar": "/public/img/1575016586255-5.jpg",
    "collector_nickname": "言晚",
    "poster_nickname": "gaofei",
    "topic_title": "美食之都，吃货的聚集地——成都美食介绍",
    "topic_content": "成都被誉为“网红城市”，因为社交软件上时常能见到成都的一些“网红店”，以及不少网络红人，成都也因此一炮走红，成为不少人向往的旅游胜地，那么既然要去成都旅行，可千万别忘了平常成都本地的正宗小吃！\n\n担担面\n\n四川担担面的名头应该是非常响亮的了。担担面以四川出了名的麻、辣、鲜、香著名。四川人的辣那也是全国闻名的了，担担面更是无辣不欢的老饕们的最爱。担担面最开始以摊贩挑担贩卖而得名，此菜色泽亮红，一眼便能得知它辣的特点。担担面麻辣酸味突出，辣而不燥，鲜而不腻，堪称四川面食中的王者！ 担担面采用细滑的面条，以红辣椒油、川冬菜、肉末、花椒、红酱油、豌豆尖和葱花等为佐料。夹一筷油红香辣的担担面，入口香气四溢，刺激的辣味直击脑髓，一碗下肚，面泛红光，大汗淋漓，十分痛快。\n\n麻婆豆腐\n\n麻婆豆腐的名声可谓是家喻户晓了，它的踪影几乎遍布全国，非常的受欢迎，但因为各地的口味不同，特别对“辣”的感觉不同，配方做出了修改，想吃到最正宗的麻婆豆腐，非得到四川不可！作为省会成都，那麻婆豆腐，可谓是再正宗不过了。 麻婆豆腐主要的特点就是“麻、辣、鲜、香” 缺一不可，花椒的麻，干辣椒的辣，肉末的鲜，火候的香。麻婆豆腐色泽鲜红，红的发热，豆腐十分细嫩，口感润滑，入口辣劲儿十足，你若是灌水解了辣，酸酸的麻劲儿还会纠缠你许久，一碗小小的麻婆豆腐，能让你即便在大冬天都大汗淋漓、浑身发热！夫妻肺片\n\n夫妻肺片作为川菜也是大名鼎鼎的川菜，也被不少人误解，所谓肺片并不真的是猪牛羊的肺脏！而是以牛头皮、牛心、牛舌、牛肚、牛肉为主料进行研制的卤味，然后切片再撒上一层花椒、辣椒、香葱，最后浇一勺热油，碗里滋滋响，香气网上冒，这就是一碗正宗的夫妻肺片了！ 川菜自然是以麻辣为主，但夫妻肺片辣味较浅，突出一个麻香！ 牛心牛舌等经过卤制本就卤香十足，再经过花椒、干辣椒、香葱等香料泼油体香，那香味儿，没入口就将垂涎三尺了，夫妻肺片越嚼越香，是四川最著名的下酒菜，一壶小酒，一盘夫妻肺片，那就是朋友小聚的不二选择。口感劲道，卤香浓郁，回味无穷。棒棒鸡\n\n这道菜可能不如前几道那么声名远扬，但也是四川人最喜爱的凉菜之一。 棒棒鸡是选用良种汉阳鸡，煮熟后用木棒捶至松软后食用，棒棒鸡味怪，麻、辣、酸、甜、鲜、咸、香，七味俱全，各种风味多而不杂，混而不乱，口感松软，作为餐前开胃凉菜可以说是再合适不过了，丰富清爽的口味很好地唤醒了食客的味觉，使人胃口大开，如果你在四川成都用餐，那么千万别忘了点一盘棒棒鸡，它能让你胃口大开！龙抄手\n\n别误会，这名字这么霸气，其实只是一碗小小的馄饨，南方叫云吞，别处的馄饨口味比较清淡大众，但您可别忘了这可是无辣不欢的四川成都，馄饨照例还是以面皮裹住馅儿，鲜以猪肉、鸡蛋、各类蔬菜为主，但酱汤确实红彤彤、辣油油的！龙抄手煮熟出锅后，要往那碗里放入川盐、辣油、芝麻、胡椒和原汤，再将捞干的龙抄手放入碗里，龙抄手的辣并没有其他川菜那么强劲，微微的辣度，加上微微的麻感，混合着香料的浓香，一碗热腾腾的龙抄手能让人浑身暖和地舒服。",
    "poster_avatar": "/public/img/1575015920996-2.jpg",
    "topic_createdTime": "2019-11-29T09:07:43.109Z",
    "created_time": ISODate("2019-11-29T09:19:25.484Z"),
    "last_modified_time": ISODate("2019-11-29T09:19:25.484Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("collections").insert([ {
    _id: ObjectId("5de0e2b65dd0a380dbc1acd9"),
    "topic_id": "5de0dfdf5dd0a380dbc1acbd",
    "collector_id": "5ddf83c8b78aa66cfb5b025e",
    "collector_avatar": "/public/img/1575015920996-2.jpg",
    "collector_nickname": "gaofei",
    "poster_nickname": "gaofei",
    "topic_title": "美食之都，吃货的聚集地——成都美食介绍",
    "topic_content": "成都被誉为“网红城市”，因为社交软件上时常能见到成都的一些“网红店”，以及不少网络红人，成都也因此一炮走红，成为不少人向往的旅游胜地，那么既然要去成都旅行，可千万别忘了平常成都本地的正宗小吃！\n\n担担面\n\n四川担担面的名头应该是非常响亮的了。担担面以四川出了名的麻、辣、鲜、香著名。四川人的辣那也是全国闻名的了，担担面更是无辣不欢的老饕们的最爱。担担面最开始以摊贩挑担贩卖而得名，此菜色泽亮红，一眼便能得知它辣的特点。担担面麻辣酸味突出，辣而不燥，鲜而不腻，堪称四川面食中的王者！ 担担面采用细滑的面条，以红辣椒油、川冬菜、肉末、花椒、红酱油、豌豆尖和葱花等为佐料。夹一筷油红香辣的担担面，入口香气四溢，刺激的辣味直击脑髓，一碗下肚，面泛红光，大汗淋漓，十分痛快。\n\n麻婆豆腐\n\n麻婆豆腐的名声可谓是家喻户晓了，它的踪影几乎遍布全国，非常的受欢迎，但因为各地的口味不同，特别对“辣”的感觉不同，配方做出了修改，想吃到最正宗的麻婆豆腐，非得到四川不可！作为省会成都，那麻婆豆腐，可谓是再正宗不过了。 麻婆豆腐主要的特点就是“麻、辣、鲜、香” 缺一不可，花椒的麻，干辣椒的辣，肉末的鲜，火候的香。麻婆豆腐色泽鲜红，红的发热，豆腐十分细嫩，口感润滑，入口辣劲儿十足，你若是灌水解了辣，酸酸的麻劲儿还会纠缠你许久，一碗小小的麻婆豆腐，能让你即便在大冬天都大汗淋漓、浑身发热！夫妻肺片\n\n夫妻肺片作为川菜也是大名鼎鼎的川菜，也被不少人误解，所谓肺片并不真的是猪牛羊的肺脏！而是以牛头皮、牛心、牛舌、牛肚、牛肉为主料进行研制的卤味，然后切片再撒上一层花椒、辣椒、香葱，最后浇一勺热油，碗里滋滋响，香气网上冒，这就是一碗正宗的夫妻肺片了！ 川菜自然是以麻辣为主，但夫妻肺片辣味较浅，突出一个麻香！ 牛心牛舌等经过卤制本就卤香十足，再经过花椒、干辣椒、香葱等香料泼油体香，那香味儿，没入口就将垂涎三尺了，夫妻肺片越嚼越香，是四川最著名的下酒菜，一壶小酒，一盘夫妻肺片，那就是朋友小聚的不二选择。口感劲道，卤香浓郁，回味无穷。棒棒鸡\n\n这道菜可能不如前几道那么声名远扬，但也是四川人最喜爱的凉菜之一。 棒棒鸡是选用良种汉阳鸡，煮熟后用木棒捶至松软后食用，棒棒鸡味怪，麻、辣、酸、甜、鲜、咸、香，七味俱全，各种风味多而不杂，混而不乱，口感松软，作为餐前开胃凉菜可以说是再合适不过了，丰富清爽的口味很好地唤醒了食客的味觉，使人胃口大开，如果你在四川成都用餐，那么千万别忘了点一盘棒棒鸡，它能让你胃口大开！龙抄手\n\n别误会，这名字这么霸气，其实只是一碗小小的馄饨，南方叫云吞，别处的馄饨口味比较清淡大众，但您可别忘了这可是无辣不欢的四川成都，馄饨照例还是以面皮裹住馅儿，鲜以猪肉、鸡蛋、各类蔬菜为主，但酱汤确实红彤彤、辣油油的！龙抄手煮熟出锅后，要往那碗里放入川盐、辣油、芝麻、胡椒和原汤，再将捞干的龙抄手放入碗里，龙抄手的辣并没有其他川菜那么强劲，微微的辣度，加上微微的麻感，混合着香料的浓香，一碗热腾腾的龙抄手能让人浑身暖和地舒服。",
    "poster_avatar": "/public/img/1575015920996-2.jpg",
    "topic_createdTime": "2019-11-29T09:07:43.109Z",
    "created_time": ISODate("2019-11-29T09:19:50.197Z"),
    "last_modified_time": ISODate("2019-11-29T09:19:50.197Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("collections").insert([ {
    _id: ObjectId("5de0e3455dd0a380dbc1acda"),
    "topic_id": "5de0dd105dd0a380dbc1acb5",
    "collector_id": "5ddf83c8b78aa66cfb5b025e",
    "collector_avatar": "/public/img/1575015920996-2.jpg",
    "collector_nickname": "gaofei",
    "poster_nickname": "妳愛我嗎？",
    "topic_title": "有个二货主人真是。。",
    "topic_content": "有个二货主人真是。。",
    "poster_avatar": "/public/img/1575017609800-下载 (2).jpeg",
    "topic_createdTime": "2019-11-29T08:55:44.478Z",
    "created_time": ISODate("2019-11-29T09:22:13.643Z"),
    "last_modified_time": ISODate("2019-11-29T09:22:13.643Z"),
    __v: NumberInt("0")
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for comments
// ----------------------------
db.getCollection("comments").drop();
db.createCollection("comments");

// ----------------------------
// Documents of comments
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("forumProject");
db.getCollection("comments").insert([ {
    _id: ObjectId("5de0e0e05dd0a380dbc1acbf"),
    "comment_content": "挺好看的嘛",
    "topic_id": "5de0def05dd0a380dbc1acbb",
    "conmmenter_avatar": "/public/img/1575015920996-2.jpg",
    "comment_nickname": "gaofei",
    "commenter_id": "5ddf83c8b78aa66cfb5b025e",
    "created_time": ISODate("2019-11-29T09:12:00.549Z"),
    "last_modified_time": ISODate("2019-11-29T09:12:00.549Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5de0e0f05dd0a380dbc1acc0"),
    "comment_content": "大晚上，让我看这个！",
    "topic_id": "5de0dfdf5dd0a380dbc1acbd",
    "conmmenter_avatar": "/public/img/1575015920996-2.jpg",
    "comment_nickname": "gaofei",
    "commenter_id": "5ddf83c8b78aa66cfb5b025e",
    "created_time": ISODate("2019-11-29T09:12:16.29Z"),
    "last_modified_time": ISODate("2019-11-29T09:12:16.29Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5de0e0f85dd0a380dbc1acc1"),
    "comment_content": "真的是，饿到不行",
    "topic_id": "5de0dfdf5dd0a380dbc1acbd",
    "conmmenter_avatar": "/public/img/1575015920996-2.jpg",
    "comment_nickname": "gaofei",
    "commenter_id": "5ddf83c8b78aa66cfb5b025e",
    "created_time": ISODate("2019-11-29T09:12:24.91Z"),
    "last_modified_time": ISODate("2019-11-29T09:12:24.91Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5de0e10d5dd0a380dbc1acc3"),
    "comment_content": "王哥，",
    "topic_id": "5de0de315dd0a380dbc1acb9",
    "conmmenter_avatar": "/public/img/1575015920996-2.jpg",
    "comment_nickname": "gaofei",
    "commenter_id": "5ddf83c8b78aa66cfb5b025e",
    "created_time": ISODate("2019-11-29T09:12:45.62Z"),
    "last_modified_time": ISODate("2019-11-29T09:12:45.62Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5de0e1205dd0a380dbc1acc4"),
    "comment_content": "笑死我，继承我的花呗？",
    "topic_id": "5de0dd105dd0a380dbc1acb5",
    "conmmenter_avatar": "/public/img/1575015920996-2.jpg",
    "comment_nickname": "gaofei",
    "commenter_id": "5ddf83c8b78aa66cfb5b025e",
    "created_time": ISODate("2019-11-29T09:13:04.558Z"),
    "last_modified_time": ISODate("2019-11-29T09:13:04.558Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5de0e1985dd0a380dbc1acca"),
    "comment_content": "666，大晚上有点东西啊",
    "topic_id": "5de0dfdf5dd0a380dbc1acbd",
    "conmmenter_avatar": "/public/img/1575016093531-3.jpg",
    "comment_nickname": "啦啦啦啦",
    "commenter_id": "5de0b487b07c402cc7d1a00f",
    "created_time": ISODate("2019-11-29T09:15:04.37Z"),
    "last_modified_time": ISODate("2019-11-29T09:15:04.37Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5de0e1a45dd0a380dbc1accb"),
    "comment_content": "真帅！",
    "topic_id": "5de0def05dd0a380dbc1acbb",
    "conmmenter_avatar": "/public/img/1575016093531-3.jpg",
    "comment_nickname": "啦啦啦啦",
    "commenter_id": "5de0b487b07c402cc7d1a00f",
    "created_time": ISODate("2019-11-29T09:15:16.572Z"),
    "last_modified_time": ISODate("2019-11-29T09:15:16.572Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5de0e1b35dd0a380dbc1accc"),
    "comment_content": "加油！",
    "topic_id": "5de0dd8f5dd0a380dbc1acb7",
    "conmmenter_avatar": "/public/img/1575016093531-3.jpg",
    "comment_nickname": "啦啦啦啦",
    "commenter_id": "5de0b487b07c402cc7d1a00f",
    "created_time": ISODate("2019-11-29T09:15:31.575Z"),
    "last_modified_time": ISODate("2019-11-29T09:15:31.575Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5de0e20d5dd0a380dbc1accd"),
    "comment_content": "大家快举报得了，居心何在",
    "topic_id": "5de0dfdf5dd0a380dbc1acbd",
    "conmmenter_avatar": "/public/img/1575016293522-4.jpg",
    "comment_nickname": "ー￡゛走了ノ没留下什么",
    "commenter_id": "5de0d74a5dd0a380dbc1aca7",
    "created_time": ISODate("2019-11-29T09:17:01.757Z"),
    "last_modified_time": ISODate("2019-11-29T09:17:01.757Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5de0e21d5dd0a380dbc1accf"),
    "comment_content": "赞！",
    "topic_id": "5de0def05dd0a380dbc1acbb",
    "conmmenter_avatar": "/public/img/1575016293522-4.jpg",
    "comment_nickname": "ー￡゛走了ノ没留下什么",
    "commenter_id": "5de0d74a5dd0a380dbc1aca7",
    "created_time": ISODate("2019-11-29T09:17:17.908Z"),
    "last_modified_time": ISODate("2019-11-29T09:17:17.908Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5de0e22e5dd0a380dbc1acd0"),
    "comment_content": "搞笑！",
    "topic_id": "5de0dd105dd0a380dbc1acb5",
    "conmmenter_avatar": "/public/img/1575016293522-4.jpg",
    "comment_nickname": "ー￡゛走了ノ没留下什么",
    "commenter_id": "5de0d74a5dd0a380dbc1aca7",
    "created_time": ISODate("2019-11-29T09:17:34.344Z"),
    "last_modified_time": ISODate("2019-11-29T09:17:34.344Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5de0e23b5dd0a380dbc1acd1"),
    "comment_content": "哈哈啊哈，悲催",
    "topic_id": "5de0dc555dd0a380dbc1acb3",
    "conmmenter_avatar": "/public/img/1575016293522-4.jpg",
    "comment_nickname": "ー￡゛走了ノ没留下什么",
    "commenter_id": "5de0d74a5dd0a380dbc1aca7",
    "created_time": ISODate("2019-11-29T09:17:47.727Z"),
    "last_modified_time": ISODate("2019-11-29T09:17:47.727Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5de0e2695dd0a380dbc1acd2"),
    "comment_content": "吃饭去啦！",
    "topic_id": "5de0dfdf5dd0a380dbc1acbd",
    "conmmenter_avatar": "/public/img/1575016586255-5.jpg",
    "comment_nickname": "言晚",
    "commenter_id": "5de0d8745dd0a380dbc1aca9",
    "created_time": ISODate("2019-11-29T09:18:33.61Z"),
    "last_modified_time": ISODate("2019-11-29T09:18:33.61Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5de0e2745dd0a380dbc1acd4"),
    "comment_content": "666",
    "topic_id": "5de0def05dd0a380dbc1acbb",
    "conmmenter_avatar": "/public/img/1575016586255-5.jpg",
    "comment_nickname": "言晚",
    "commenter_id": "5de0d8745dd0a380dbc1aca9",
    "created_time": ISODate("2019-11-29T09:18:44.591Z"),
    "last_modified_time": ISODate("2019-11-29T09:18:44.591Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5de0e2855dd0a380dbc1acd5"),
    "comment_content": "牛逼！",
    "topic_id": "5de0dd105dd0a380dbc1acb5",
    "conmmenter_avatar": "/public/img/1575016586255-5.jpg",
    "comment_nickname": "言晚",
    "commenter_id": "5de0d8745dd0a380dbc1aca9",
    "created_time": ISODate("2019-11-29T09:19:01.887Z"),
    "last_modified_time": ISODate("2019-11-29T09:19:01.887Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5de0e28e5dd0a380dbc1acd6"),
    "comment_content": "666",
    "topic_id": "5de0dc555dd0a380dbc1acb3",
    "conmmenter_avatar": "/public/img/1575016586255-5.jpg",
    "comment_nickname": "言晚",
    "commenter_id": "5de0d8745dd0a380dbc1aca9",
    "created_time": ISODate("2019-11-29T09:19:10.27Z"),
    "last_modified_time": ISODate("2019-11-29T09:19:10.27Z"),
    __v: NumberInt("0")
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for follows
// ----------------------------
db.getCollection("follows").drop();
db.createCollection("follows");

// ----------------------------
// Documents of follows
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("forumProject");
db.getCollection("follows").insert([ {
    _id: ObjectId("5de0db285dd0a380dbc1acb1"),
    "friend_nickname": "丶花少",
    "friend_avatar": "/public/img/1575017124098-下载 (4).jpeg",
    friendID: "5de0da8e5dd0a380dbc1acaf",
    userID: "5de0da8e5dd0a380dbc1acaf",
    "user_nickname": "丶花少",
    "user_avatar": "/public/img/1575017124098-下载 (4).jpeg",
    "created_time": ISODate("2019-11-29T08:47:36.768Z"),
    "last_modified_time": ISODate("2019-11-29T08:47:36.768Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("follows").insert([ {
    _id: ObjectId("5de0e13f5dd0a380dbc1acc5"),
    "friend_nickname": "妳愛我嗎？",
    "friend_avatar": "/public/img/1575017609800-下载 (2).jpeg",
    friendID: "5de0dc775dd0a380dbc1acb4",
    userID: "5ddf83c8b78aa66cfb5b025e",
    "user_nickname": "gaofei",
    "user_avatar": "/public/img/1575015920996-2.jpg",
    "created_time": ISODate("2019-11-29T09:13:35.343Z"),
    "last_modified_time": ISODate("2019-11-29T09:13:35.343Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("follows").insert([ {
    _id: ObjectId("5de0e1425dd0a380dbc1acc6"),
    "friend_nickname": "殃国娇颜",
    "friend_avatar": "/public/img/1575018084252-下载 (1).jpeg",
    friendID: "5de0de4f5dd0a380dbc1acba",
    userID: "5ddf83c8b78aa66cfb5b025e",
    "user_nickname": "gaofei",
    "user_avatar": "/public/img/1575015920996-2.jpg",
    "created_time": ISODate("2019-11-29T09:13:38.711Z"),
    "last_modified_time": ISODate("2019-11-29T09:13:38.711Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("follows").insert([ {
    _id: ObjectId("5de0e1475dd0a380dbc1acc7"),
    "friend_nickname": "王思聪",
    "friend_avatar": "/public/img/1575017936343-7c1ed21b0ef41bd5a7f81d995ada81cb39db3d37.png",
    friendID: "5de0ddaa5dd0a380dbc1acb8",
    userID: "5ddf83c8b78aa66cfb5b025e",
    "user_nickname": "gaofei",
    "user_avatar": "/public/img/1575015920996-2.jpg",
    "created_time": ISODate("2019-11-29T09:13:43.859Z"),
    "last_modified_time": ISODate("2019-11-29T09:13:43.859Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("follows").insert([ {
    _id: ObjectId("5de0e1635dd0a380dbc1acc8"),
    "friend_nickname": "少女病`",
    "friend_avatar": "/public/img/1575017800873-7.jpeg",
    friendID: "5de0dd345dd0a380dbc1acb6",
    userID: "5ddf83c8b78aa66cfb5b025e",
    "user_nickname": "gaofei",
    "user_avatar": "/public/img/1575015920996-2.jpg",
    "created_time": ISODate("2019-11-29T09:14:11.552Z"),
    "last_modified_time": ISODate("2019-11-29T09:14:11.552Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("follows").insert([ {
    _id: ObjectId("5de0e1815dd0a380dbc1acc9"),
    "friend_nickname": "gaofei",
    "friend_avatar": "/public/img/1575015920996-2.jpg",
    friendID: "5ddf83c8b78aa66cfb5b025e",
    userID: "5de0b487b07c402cc7d1a00f",
    "user_nickname": "啦啦啦啦",
    "user_avatar": "/public/img/1575016093531-3.jpg",
    "created_time": ISODate("2019-11-29T09:14:41.514Z"),
    "last_modified_time": ISODate("2019-11-29T09:14:41.514Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("follows").insert([ {
    _id: ObjectId("5de0e2125dd0a380dbc1acce"),
    "friend_nickname": "gaofei",
    "friend_avatar": "/public/img/1575015920996-2.jpg",
    friendID: "5ddf83c8b78aa66cfb5b025e",
    userID: "5de0d74a5dd0a380dbc1aca7",
    "user_nickname": "ー￡゛走了ノ没留下什么",
    "user_avatar": "/public/img/1575016293522-4.jpg",
    "created_time": ISODate("2019-11-29T09:17:06.332Z"),
    "last_modified_time": ISODate("2019-11-29T09:17:06.332Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("follows").insert([ {
    _id: ObjectId("5de0e26d5dd0a380dbc1acd3"),
    "friend_nickname": "gaofei",
    "friend_avatar": "/public/img/1575015920996-2.jpg",
    friendID: "5ddf83c8b78aa66cfb5b025e",
    userID: "5de0d8745dd0a380dbc1aca9",
    "user_nickname": "言晚",
    "user_avatar": "/public/img/1575016586255-5.jpg",
    "created_time": ISODate("2019-11-29T09:18:37.599Z"),
    "last_modified_time": ISODate("2019-11-29T09:18:37.599Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("follows").insert([ {
    _id: ObjectId("5de0e29a5dd0a380dbc1acd7"),
    "friend_nickname": "殃国娇颜",
    "friend_avatar": "/public/img/1575018084252-下载 (1).jpeg",
    friendID: "5de0de4f5dd0a380dbc1acba",
    userID: "5de0d8745dd0a380dbc1aca9",
    "user_nickname": "言晚",
    "user_avatar": "/public/img/1575016586255-5.jpg",
    "created_time": ISODate("2019-11-29T09:19:22.005Z"),
    "last_modified_time": ISODate("2019-11-29T09:19:22.005Z"),
    __v: NumberInt("0")
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for topics
// ----------------------------
db.getCollection("topics").drop();
db.createCollection("topics");

// ----------------------------
// Documents of topics
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("forumProject");
db.getCollection("topics").insert([ {
    _id: ObjectId("5de0d5bc5dd0a380dbc1aca3"),
    "img_src": [
        "/public/img/1575015868036-4610b912c8fcc3ce816273d1ab5b168dd53f2051.jpeg",
        "/public/img/1575015868037-c9fcc3cec3fdfc03362df891ee214791a4c22661.jpeg",
        "/public/img/1575015868038-7a899e510fb30f2401ac73d8f28b1146ac4b03de.jpeg",
        "/public/img/1575015868039-aec379310a55b319cd936cce79b74223cefc17c2.jpeg",
        "/public/img/1575015868040-58ee3d6d55fbb2fb5b4849057554e0a14623dc6d.jpeg",
        "/public/img/1575015868041-10dfa9ec8a1363277290d613ab9160e908fac7b0.jpeg",
        "/public/img/1575015868042-ac345982b2b7d0a2ba08f1a8f1f1b60c4a369ae2.jpeg"
    ],
    img: "/public/img/1575015868036-4610b912c8fcc3ce816273d1ab5b168dd53f2051.jpeg",
    clickNum: NumberInt("1"),
    commentNum: NumberInt("0"),
    likeNum: NumberInt("1"),
    plate: "technology",
    title: "Adobe发布低门槛AR创作Aero、Dimension 3.0等，带来AR营销机遇！",
    content: "此前，在9月20日的《在新媒介方面“上下求索”的Adobe，最终选择了AR》一文中，VRPinea曾探讨了Adobe在新媒介方面的漫漫探索，并最终选择了AR（感兴趣的读者可点击蓝字自行阅读）。\n\n而本月，于美国当地时间11月2日-6日举办的MAX大会上，Adobe展示了旗下一系列设计工具的最新动态，其中包括最新推出的AR设计工具Aero、以及支持AR的Dimension 3.0，Adobe在AR方面的布局徐徐展开。细谈Adobe在AR方面的布局\n\n在明确了AR的发展方向后，Adobe逐步展开了在此方面的行动。Adobe先是展示了两款基于AR设计的无文本UI概念，随后又正式发行了AR制作工具Aero，并在MAX大会上展示了Dimension 3.0支持AR的新消息。\n\nAdobe XD提出无文本UI设计：Text-Free UI Kit for Adobe XD\n\n在此前体验多人开放世界VR游戏《故土》的时候，小编为游戏惊艳的画面和开放的世界而着迷。但与此同时，小编也发现《故土》这样的VR游戏存在一个问题：由于是针对PC/VR用户同时开发，《故土》的UI设计基本选择了传统网游所采用的文本为主的UI设计。这一UI在传统的2D显示器上问题不大，但在全景的VR环境中体验并不算佳。\n\n此外，过多文本的UI设计也较为影响阅读困难人群以及视障人群的用户体验。目前，世界文盲比例仍高达20%，这一受众群体很难与存在大量文本的UI交互。而对于视障群体而言，在文本不易于识别的情况下，有着高对比度和简单形状的图标能够提供情景上下文。但慢慢随着语音界面以及AR技术的发展，创建UI时文本已逐渐不再是必备的组件。语音界面允许用户通过语音命令与应用进行交互；AR体验也可以在消除潜在视觉干扰的同时添加有用的信息：通过图像和动画来提供清晰的指令，能帮助用户在不需要阅读的情况下与UI交流。\n\n为此， Adobe于10月31日提出了一种用以取代文本UI的设计方案：Text-Free UI Kit for Adobe XD。该方案由Cara Neel设计，利用了语音、图像和动画来为用户提供清晰的指令。Text-Free UI Kit包含两个设计概念，两者均采用了语音界面和AR体验。首个概念是一款移动导航应用程序Polaris，允许用户通过语音命令和AR路标前往目的地；第二个概念则是一款虚拟助手ARtie，能够帮助用户识别不熟悉的对象和位置，并帮助用户解决日常生活中可能遇到的问题。Cara Neel还为其他AR设计者提供了一个由不同图标和组件组成的库，帮助设计者创建无文本的UI交互界面。\n\nAdobe推出无需掌握编程技巧的AR创作工具Aero\n\n11月5日，Adobe正式发行了旗下AR创作工具Adobe Aero。该工具允许设计师在AR环境中构建和分享沉浸式体验，并无需掌握任何编程技巧。\n\n与其他AR创作工具相比，Adobe Aero具备如下的功能。可视化创作：Aero能够提供直观且不牺牲质量的创作体验。用户可以使用可视化UI构建AR体验，而分步说明则将引导用户构建独特的AR场景；",
    nickname: "寂寞ゝ专属.",
    "user_id": "5de0d2696e78ad79c2e2c64a",
    icon: "/public/img/1575015590957-1.jpg",
    "created_time": ISODate("2019-11-29T08:24:28.048Z"),
    "last_modified_time": ISODate("2019-11-29T08:24:28.048Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("topics").insert([ {
    _id: ObjectId("5de0d65b5dd0a380dbc1aca5"),
    "img_src": [
        "/public/img/1575016027486-f11ee6ba113554fcb5bc0c713f8889fe8617.gif",
        "/public/img/1575016027687-94cad1c8a786c91742d1a9563922b0ca3ac757b0.jpeg",
        "/public/img/1575016027694-5243fbf2b21193137bab20e39527ccd290238d9b.jpeg",
        "/public/img/1575016027696-5243fbf2b2119313a4d96b119527ccd290238d9a.jpeg"
    ],
    img: "/public/img/1575016027486-f11ee6ba113554fcb5bc0c713f8889fe8617.gif",
    clickNum: NumberInt("0"),
    commentNum: NumberInt("0"),
    likeNum: NumberInt("0"),
    plate: "technology",
    title: "John Carmack转战AGI通用人工智能领域，并让自己儿子参与进来！",
    content: "近日，John Carmack发表Facebook博文宣布，其将从Facebook离职，但仍是Oculus的“首席技术官顾问”，会在开发项目中发表意见，不过该工作只占用其很少时间。离职后，Carmack将投身于AGI通用人工智能领域。John Carmack表示：AGI通用人工智能十分具有潜能、非常有价值。其将按照“帕斯卡概率逻辑”，从事这方面的工作，并采取“维多利亚时代的绅士科学家”策略，在家中进行探索研究，而且会让自己的儿子参与进来。\n\nVRPinea独家点评：从游戏、航天、VR再到AGI，卡马克一直在挑战！\n\n美军版HoloLens更多细节曝光：80度FOV、8小时续航、文本翻译......\n\n此前，美国陆军与微软合作为军队开发集成视觉增强系统（Integrated Visual Augmentation System/IVAS）。日前，专注于IT创业的媒体Business Insider在弗吉尼亚州的皮克特堡进行了体验并表示：IVAS仍在研发中心，但基础软件已经能够支持士兵执行复杂任务。IVAS基于微软HoloLens头显，传感器属于数字式，视场达80度，同时提供弱光感知或热敏功能。该系统支持士兵通过数字空间访问一系列有价值的作战工具，如地图绘制、定向运动、目标跟踪、面部识别和文本翻译。此外，可穿戴式电池供能可提供6至8个小时续航动力。\n\nVRPinea独家点评：感觉美军版的系统好像很强大。\n\neden labs推出手持式VR一体机Snacker\n\n近日，南非VR公司eden labs推出手持式VR一体机：Snacker。Snacker设计基于创维S1 VR头显，搭载两块LC显示屏、双目分辨率达1920x2160、刷新率达72Hz、视场角达105°、电池容量达3500mAh、60GB闪存与256GB SD卡，并支持WLAN、4G与5G。此外，Snacker还配备一个XR管理平台，用户在平板电脑上对头显中的内容进行远程控制，在选择VR内容后，只需戴上Snacker头显即可观看。除了内容管理，该XR平台也会为管理者提供用户行为的分析数据。该手持式VR头显适用于多种展示场景，如：360°地图、VR展厅、VR画廊、VR视频展示，或向客户展示沉浸式VR场景、应用、内容等。Oculus与Unity推免费VR开发教程，适用所有开发者\n\n近日，Oculus与Unity合作，推出免费的VR内容开发课程。VR课程共包含11个单元，主要专注于Oculus Rift S、Quest平台的内容开发，并为开发者提供关于VR开发的灵感和经验。VR课程的内容由Oculus或Unity的内容专家制作，该专家分别拥有VR工程、空间音频设计、测试/质检、分发等方面的经验。此外，Oculus与Unity推出的并不是入门课程，主要是帮助已有Unity、VR开发经验的中级水平开发者们提升开发水平。因此，开发者们可以根据自己的需求来学习不同的单元。即使专业的VR开发人员也可体验课程，重温空间音频或移动等方面的知识经验。",
    nickname: "gaofei",
    "user_id": "5ddf83c8b78aa66cfb5b025e",
    icon: "/public/img/1575015920996-2.jpg",
    "created_time": ISODate("2019-11-29T08:27:07.727Z"),
    "last_modified_time": ISODate("2019-11-29T08:27:07.727Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("topics").insert([ {
    _id: ObjectId("5de0d71d5dd0a380dbc1aca6"),
    "img_src": [
        "/public/img/1575016221721-908fa0ec08fa513d6cfd9efc5d5a95feb2fbd97e.jpeg",
        "/public/img/1575016221722-0eb30f2442a7d933d95668fcf27c111672f0017b.jpeg",
        "/public/img/1575016221724-b151f8198618367aa05839af4e444bd1b21ce5a8.jpeg",
        "/public/img/1575016221725-a2cc7cd98d1001e9ec9fa68ce739bbe955e7974b.jpeg",
        "/public/img/1575016221725-42a98226cffc1e1723ec803a15a73606738de923.jpeg",
        "/public/img/1575016221726-d52a2834349b033b04861e714af9f6d6d439bdc8.jpeg",
        "/public/img/1575016221727-d833c895d143ad4b0e439d8ddd359aaaa50f06cf.jpeg"
    ],
    img: "/public/img/1575016221721-908fa0ec08fa513d6cfd9efc5d5a95feb2fbd97e.jpeg",
    clickNum: NumberInt("0"),
    commentNum: NumberInt("0"),
    likeNum: NumberInt("0"),
    plate: "technology",
    title: "vivo S5正式发布 拍照黑科技引领行业审美新潮流",
    content: "2019年11月14日，以“美好之夜”为主题的vivo S5新品发布会在杭州艺尚小镇国际秀场举行。作为S系列第二代重磅产品，vivo S5凭借突破常规的ID设计和着重升级的前后置乐趣拍照，让手机行业再次看到了vivo S系列对年轻消费者的深刻洞察。vivo一直致力于用前沿科技打造创新潮品，做让消费者惊喜、热爱的手机。此前推出的潮美中端旗舰S系列手机定位年轻消费群体，将颜值与艺术、科技与时尚结合，通过极具品牌识别性的设计，成为广受年轻人青睐的实力派潮流手机系列。此次重磅推出的第二代vivo S5新品，更是延续了S系列的产品定位，以高颜值的配色设计和创新的自拍理念，满足年轻消费群体的视觉享受和情感体验。vivo S5后置摄像头独特的菱形设计，灵感来源于美学上的几何空间结构，将艺术与科技深度结合，体现vivo S5独具匠心的审美主张。同时，vivo S5新品还将大自然中神秘的奇光异彩复刻到手机后盖上，配合色泽晶莹的流光渐变效果，让人仿佛置身光影交叠的婆娑秘境，开启一场梦幻之旅。此外，vivo S5搭载的4800万后置超清四摄及3200万质感肌肤自拍，满足年轻人对拍摄和美的一切“摄想”。\n\n活动当天，作为vivo S5的代言人，蔡徐坤空降发布会现场，为vivo S5新机助阵。颜值与实力兼具的蔡徐坤拥有多重身份，作为创作型歌手，他不断寻求突破、发现自我，创造极具个人特色的音乐风格；作为年轻的时尚领袖，他时而潮流，时而复古，造型百变深受年轻人喜爱。蔡徐坤不设限的人生态度和年轻时尚的气质与vivo S5十分契合，此次再度携手合作，将非凡创造和时尚美感结合，为vivo S5增添了更多时尚张力。发布会上，蔡徐坤以一身“冰岛恋歌”装惊艳亮相，向在场媒体和粉丝介绍了vivo S5上他的专属滤镜以及拍照姿势功能，瞬间点燃粉丝热情，嗨翻“美好之夜”。最后，蔡徐坤用vivo S5与在场粉丝一起合影，定格这一美好时刻。蔡徐坤指出：“和vivo S系列的每一次合作，都是一次成长与突破，就像vivo S5手机的菱形设计一样，打破现有桎梏，去创造独一无二的美。”蔡徐坤称这就是我们年轻人的个性审美和创新精神所在，年轻就要与众不同。vivo S系列产品总监张佳瑶认为，每个人对美的理解各不相同，但是每个人追求美，表达美，展现美的诉求却是相通的。vivo S系列正是这样一个为美好赋能的产品系列，它不断尝试打破自己的次元壁，用更年轻、新颖、极致的产品体验，和年轻人一起解码美好生活的更多可能性。在手机产品不断与时俱进的今天，越来越多年轻人对新手机的期待已然超越了工具本身，他们已经把手机当做生活的重要伙伴，一起感知生活确幸，记录每一个闪耀时刻。vivo S系列手机将继续聚焦年轻人的内心态度和价值观，传递出属于他们的情感主张。\n\n每一代人的消费习惯和消费情感都在发生变化，品牌只有不断进行创新和升级，才能满足用户日益多元化的消费需求。作为国内手机行业的领航者，vivo始终深入洞察年轻人的生活态度和审美变化，和年轻人一起成长，以独特的创造力融合新科技，为用户提供更符合需求，更极致的产品和服务，乐享美好生活。",
    nickname: "啦啦啦啦",
    "user_id": "5de0b487b07c402cc7d1a00f",
    icon: "/public/img/1575016093531-3.jpg",
    "created_time": ISODate("2019-11-29T08:30:21.733Z"),
    "last_modified_time": ISODate("2019-11-29T08:30:21.733Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("topics").insert([ {
    _id: ObjectId("5de0d7f85dd0a380dbc1aca8"),
    "img_src": [
        "/public/img/1575016440166-438954067501.png",
        "/public/img/1575016440175-438954067502.png",
        "/public/img/1575016440178-438954067503.png",
        "/public/img/1575016440188-438954067504.png",
        "/public/img/1575016440192-438954067505.png",
        "/public/img/1575016440200-438954067506.png"
    ],
    img: "/public/img/1575016440166-438954067501.png",
    clickNum: NumberInt("5"),
    commentNum: NumberInt("0"),
    likeNum: NumberInt("0"),
    plate: "game",
    title: "《沙盒：进化》像素风沙盒游戏拿什么吸引玩家",
    content: "说起沙盒游戏，不难想到《我的世界》或《泰拉瑞亚》，除了这两款游戏之外还有一款游戏也为不少全球玩家所喜欢，它就是《沙盒：进化》。\n\n　　这款由美国知名游戏公司Pixowl制作的像素风沙盒游戏，中文版由东品游戏独家代理发行，自ios上线以来，就备受玩家好评，App Store评分4.8。\n\n　　曾发行过备受好评的《永不言弃》系列、《这是我的战争》、《机械迷城》的东品游戏，在游戏的选择上以品质与精品闻名，这次这款像素风沙盒游戏到底有何过人之处呢？一个有趣的游戏主题，能带给玩家更好的沉浸感。在主题的选择上，《沙盒：进化》的设计颇为巧妙。在游戏中玩家将成为创世神，以上帝视角创作一起进行游戏，不得不承认这样的创世主题每次都能看得人热血澎湃。\n\n　　在创世宏大的游戏主题下，游戏画面的选择也更为重要，更贴近现实的画面更能体现创世的震撼感。但《沙盒：进化》却选择了像素风的美术风格，避免写实画面制作不足削减主题的史诗感，像素风的画面简洁明了，画风平滑细腻，简单而不失生动，在视觉效果上更容易给玩家留下深刻印象。\n\n　　用像素风去呈现创世建造，这种风格迥异的搭配反而让游戏体验更为真实，游戏中创作出来的事物都是生动鲜明的，更能让人体验到作为创世神创作万物的成就感。沙盒游戏以创造与探索为其核心，将游戏的自由度交给玩家去填充，但有时候过于自由的创造环境，会让玩家因缺少目标无从下手。\n\n　　在游戏模式上，《沙盒：进化》为玩家提供了更多选择。故事、创造、世界三大模式，三种不同的游戏模式均已创造为核心，让玩家体验不同的创造之乐。\n\n　　在故事模式中，需要通过挑战获取元素，利用元素组合创造万物探索奇妙的世界，你可能是来无影去无踪的忍者，也可能是绿憨憨的怪物史莱克。特色鲜明的关卡，让每次创作都是惊喜。创造模式中，将沙盒游戏的创作性无限放大，在这个模式中，你可以用不同的元素创造另一个独特的世界，也能还原艺术名著，在这个模式中玩家的脑洞有多大就能创作多大的世界。世界模式的加入，让实时社交系统完美的融入沙盒游戏，创造不再孤独。游戏中玩家可相互分享自己的作品也能评价他人的作品，甚至能进入别人的作品中进行体验。以创造为核心的实时社交，让沙盒游戏内的玩家链接起来，频繁而直接的玩家交流探索，让沙盒的世界更为丰富。《沙盒：进化》三种模式各有特色，其核心依旧在探索与创作上，无论喜欢何种创作方式的玩家都能找到其爱好的模式。模式的划分并没限制玩家的创作，不同模式下明确的目标让玩家能更愿意去探索游戏内那些未知的内容。",
    nickname: "ー￡゛走了ノ没留下什么",
    "user_id": "5de0d74a5dd0a380dbc1aca7",
    icon: "/public/img/1575016293522-4.jpg",
    "created_time": ISODate("2019-11-29T08:34:00.202Z"),
    "last_modified_time": ISODate("2019-11-29T08:34:00.202Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("topics").insert([ {
    _id: ObjectId("5de0d8f15dd0a380dbc1acaa"),
    "img_src": [
        "/public/img/1575016689594-438963465098.jpeg",
        "/public/img/1575016689608-438963465100.jpeg",
        "/public/img/1575016689613-438963465101.jpeg",
        "/public/img/1575016689623-438963465102.jpeg",
        "/public/img/1575016689630-1570786376076.png"
    ],
    img: "/public/img/1575016689594-438963465098.jpeg",
    clickNum: NumberInt("1"),
    commentNum: NumberInt("0"),
    likeNum: NumberInt("0"),
    plate: "game",
    title: "小虎透露最近尝试过上单 但不一定转型",
    content: "LPL全明星周末即将开打，目前RNG和EDG的选手都已经开始出发前往海南，这一次RNG参加全明星的选手还是非常多的，参加正赛的就有Uzi、小明和Karsa（目前自由人），还有小虎将出征solo赛，相信这次的全明星周末一定会非常精彩。在前往全明星的路上，小虎也是在车上开启了直播，并且还为大家透露了一些近况。因为最近大家发现小虎一直有玩上单，都在猜测小虎会不会新赛季转型上路，而且Uzi在直播时就谈到小虎打上路挺猛的，所以不少人询问了这个问题。对此，小虎也进行了答复，直言自己最近确实有玩上单，但不一定会转上单，中路自己也挺想继续打的。接着小虎谈到最近玩一些上路的感受，表示如果遇到一些杰斯、吸血鬼、阿卡丽等正常英雄都还能应付得过来，要是对面给自己整个掘墓、触手妈之类的，玩都不会玩，一局打下来就想自闭，小虎就谈到上次玩杰斯就遇到这种情况了。最后小虎还是透露自己挺想打中路的，到时再看吧！从小虎近期的韩服Rank战绩来看，大部分时间都在玩上路，不过整体效果一般，虽然互有胜负，但是并没有看到特别出彩的地方，相比之下偏AP的上路英雄玩得还行，不过铁男、鳄鱼之类的上单就显得一般了。至于后面是否转型上单还需要看小虎打上单的效果以及队内的调整需求了。今年世界赛小组赛中，小虎在中路的表现不是很好，尤其是在和FNC的生死战中，使用瑞兹打得了较低的伤害，但我们不能通过一场比赛表现不佳就否定小虎的个人能力。以小虎当前的个人能力，在LPL赛区国产中单中也排得上前列，即便大家都希望RNG能够引入新中单，但是引入的新中单真的能比小虎更强吗？这也是值得大家去思考的问题。就连RNG的上单狼行也谈到了小虎的中路，平心而论也没有几个人能打得过的，大家天天说换这个换那个，感觉真的没必要。目前转会期仍在进行中，伴随着Karsa的离开，新打野小龙堡将承担起RNG的野区重任，至于其他路的引援情况还不得而知，相信RNG战队也会努力进行补强，毕竟每支队伍都会努力争取一个好的成绩，大家还是慢慢期待吧！",
    nickname: "言晚",
    "user_id": "5de0d8745dd0a380dbc1aca9",
    icon: "/public/img/1575016586255-5.jpg",
    "created_time": ISODate("2019-11-29T08:38:09.632Z"),
    "last_modified_time": ISODate("2019-11-29T08:38:09.632Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("topics").insert([ {
    _id: ObjectId("5de0d9a05dd0a380dbc1acac"),
    "img_src": [
        "/public/img/1575016863997-e1fe9925bc315c60f75ee666c3c719164b5477e8.jpeg",
        "/public/img/1575016864000-0d338744ebf81a4c839984ee9c5cb25c242da6ee.jpeg",
        "/public/img/1575016864008-267f9e2f0708283828b52a7df5ef7b044d08f19f.jpeg",
        "/public/img/1575016864011-6d81800a19d8bc3ee35e0accd2fd741ba9d345d9.jpeg"
    ],
    img: "/public/img/1575016863997-e1fe9925bc315c60f75ee666c3c719164b5477e8.jpeg",
    clickNum: NumberInt("1"),
    commentNum: NumberInt("0"),
    likeNum: NumberInt("0"),
    plate: "travel",
    title: "百万优惠券礼包送给在青岛人！15条冬季旅游主题路线等你来！",
    content: "2019年11月-2020年3月，青岛市将举办 “冬游青岛暨邮轮旅游嘉年华”主题营销活动。推出了15条冬季旅游主题线路，期间，青岛市文旅局联合市100家景区、酒店、餐馆等，提供价值百万的优惠票、体验券等礼包；还将举办邮轮旅游主题巡展、 “外国人在青岛过中国节”、招募旅游达人青岛体验官等主题活动，并推出15条冬季旅游主题线路。11月29日，冬游青岛暨邮轮旅游嘉年华活动启动。此次活动由青岛市文化和旅游局主办，由青岛市商务局、市体育局、市贸促会、青岛市旅游协会等单位承办。从今年11月至明年3月，将推出系列主题营销活动及15条冬季旅游主题线路，为游客冬季出游提供多层次的旅游资源。活动期间，青岛市文化和旅游局将联动市100家景区、酒店、餐馆、咖啡店、艺术馆等，提供优惠票、体验券、折扣券等礼包产品，通过线上抽奖形式进行派送，总额度超过100万元。将在青岛市的大型购物中心等开展邮轮旅游主题巡展活动，带动邮轮旅游产品销售。结合OPPO手机在全国六个城市发起的“我要上封面——寻找城市新面孔”活动，邀请时尚明星作为召集人，发动网友进行青岛城市街拍。开展“外国人在青岛过中国节”活动，招募20组外国家庭与中国家庭在青岛一起逛美景、尝美食、赏民俗，制成小视频在抖音等网络平台传播推广。开展招募旅游达人青岛体验官活动，组织招募KOL、大V博主、旅游达人等进行青岛旅游体验，通过撰写游记、录制视频等方式分享青岛旅游感受。此次活动期间，青岛市文旅局还整合推出了15条冬季旅游主题线路。突出电影、夜游、购物等时尚元素，推出魅力夜游之旅、时尚电影之旅、文艺清新之旅、休闲购物之旅等线路。串联海岸线各特色景点和文旅项目，推出山海奇观之旅、欧陆风情之旅、冬季海岛之旅等产品。整合全市温泉酒店、滑雪场、特色餐馆等资源，推出冬季美食之旅、海景汤泉之旅、运动康养之旅等冬季特色产品。围绕冬日岛城特色民俗节事、节庆活动，推出田横祭海之旅、欢乐糖球之旅、崂山祈福之旅等特色民俗类旅游产品。围绕海洋文化、工业科技等主题，推出走进名企之旅、博物探索之旅、海洋科技之旅等研学类旅游产品。青岛市文旅局相关负责人表示，希望通过此次活动进一步活跃青岛市冬季旅游市场，发展邮轮旅游新业态，加快打造青岛全季国际旅游目的地。",
    nickname: "人生如戏",
    "user_id": "5de0d9375dd0a380dbc1acab",
    icon: "/public/img/1575016781746-6.jpg",
    "created_time": ISODate("2019-11-29T08:41:04.017Z"),
    "last_modified_time": ISODate("2019-11-29T08:41:04.017Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("topics").insert([ {
    _id: ObjectId("5de0da5b5dd0a380dbc1acae"),
    "img_src": [
        "/public/img/1575017051925-743.png",
        "/public/img/1575017051928-751.jpg",
        "/public/img/1575017051929-752.jpg",
        "/public/img/1575017051930-754.jpg",
        "/public/img/1575017051930-755.jpg",
        "/public/img/1575017051931-756.jpg"
    ],
    img: "/public/img/1575017051925-743.png",
    clickNum: NumberInt("0"),
    commentNum: NumberInt("0"),
    likeNum: NumberInt("0"),
    plate: "movie",
    title: "中国电影金鸡奖最佳女配角吴玉芳",
    content: "在刚刚过去的金鸡百花电影节上，由姚晨监制、主演的电影《送我上青云》获得了广泛关注，一举获得了包括最佳女主角在内的四项提名，不过最终只有吴玉芳拿到最佳女配角的殊荣。吴玉芳老师是电影界的老前辈，早在她21岁的时候，就凭借吴天明导演的《人生》拿到了大众电影百花奖的最佳女主角。\n《人生》是由路遥的同名小说改编而来，其中吴玉芳饰演的是地地道道陕北姑娘，而她本人是上海人，这种演员自身和角色之间的差异，多少给表演带来了一定的难度。\n所以，21岁就能获得百花奖的影后绝对不是一件说起来简简单单事情，一定有着各种的曲折离奇或天赋加成。过去的电影散发着旧时光的记忆，年轻的容貌也抵不住岁月的变迁，不变的是电影的魅力和演员的初心。三十五年的时光，五十五岁的年纪，吴玉芳又一次走上了中国电影的最高舞台，聚光灯下的她仍然散发着独属于演员的魅力。\n《送我上青云》是一部女性主义题材的电影，剧中的男性角色就都显得片面单一，没有生机，而女性角色则显得丰满灵动，魅力无穷。\n影片主人公，也就是姚晨饰演的角色，是一位典型的都市女性，有着良好的教育背景和精神的追求。\n这种人物形象，在现代电影里已经屡见不鲜，完完全全就是一个追求自我的独立女性。\n一个人不能太压抑，也不能太自我，太压抑了就会向内汇聚伤害自我，太自我就会向外展露伤害他人。姚晨饰演的角色就是这样一个既压抑又自我的人，她压抑的太久以至于不能打开心结。\n外在行事上又与内心世界形成了强烈的反差，堵着气，咬着牙，不低头，不服输。\n这种强悍的人生态度没有什么不好，就是有点锋芒毕露，稍不留心自身的光就会扫到身边的人。\n吴玉芳饰演的这个角色，也就是影片中姚晨的妈妈，她有着和女儿完全不同的人生态度和处世哲学。\n国内的影视剧总会塑造同一种妈妈，就是那种为家庭为儿女牺牲自我的妈妈，这就抹杀了妈妈的多样性，也就是抹杀了中年女演员塑造人物的多样性。\n吴玉芳这次饰演的妈妈，于以往中国电影里的妈妈形象全然不同，让观众看到了妈妈的多样性。电影中的吴玉芳天真烂漫，活波可爱，卖萌撒娇，有点黏人，完全没有中年女性的成熟圆滑，有的只是满眼的纯真。\n她年轻的时候是陶瓷厂的厂花，喜欢聆听瓷片烧裂的声音，后来经历了婚姻的失败，还是喜欢聆听这种美妙的声音。\n一个女人年轻的时候拥有少女心，这是自然赋予的天性；年老的时候仍然有着少女心，这是上天给予的幸运。\n中国的大银幕上不缺隐忍压抑的中年妇女，也不缺市井泼辣的中年妇女，更不缺成熟世故的中年妇女，缺的是有着少女心的中年妇女。有着少女心的中年妇女，没有丧失女性的灵气，渴望被爱的同时也有能力去关爱他人。姚晨饰演的角色看似一直在追求自我，但在现实环境中从来没有活出自我，而吴玉芳饰演的角色从来没有追求自我，反而却一直活在自我里。\n她也并没有完全沉浸在自我里不可自拔，当得知女儿的病情之后，她还是倒在了寒风里。\n那一刻，她是一个饱经风霜的母亲。\n人世间的事情十有八九不如意，悲悲切切只会悲悲切切，轻轻松松才会快快乐乐。我喜欢吴玉芳演得这个角色，她演出了另一种妈妈的形象，给了观众审美上的多样性。人物塑造的成功，一方面离不开编剧和导演最初的设定，另一方面更不离不开演员的理解和表演。\n吴玉芳饰演的这个角色前后有着性格上的变化，这就给演员的表演提供便利，更加容易演出层次感。\n好几次都是大开大合，张弛有度，她拿捏的准确到位，一下就让剧中角色鲜活了起来。\n一部好电影遇到一个好演员，是应有的待遇，而一个好演员遇到一部好电影，是上天的馈赠。\n是好风凭借力，送我上青云。",
    nickname: "香了一口※",
    "user_id": "5de0d9d65dd0a380dbc1acad",
    icon: "/public/img/1575016947448-下载 (5).jpeg",
    "created_time": ISODate("2019-11-29T08:44:11.934Z"),
    "last_modified_time": ISODate("2019-11-29T08:44:11.934Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("topics").insert([ {
    _id: ObjectId("5de0db165dd0a380dbc1acb0"),
    "img_src": [
        "/public/img/1575017238173-2ced0318a94559321bfcfbebe0e5a69b.jpg",
        "/public/img/1575017238174-949bf42e02403ae7b3de31b5428f66ee.jpg",
        "/public/img/1575017238180-13a541701cf05805fc2df1a20c6931b3.jpg",
        "/public/img/1575017238188-e0dd22b5a0de9102757efc7d79d76eca.jpg",
        "/public/img/1575017238192-7c9f0cab89f5038a83970fc0a0677c8b.jpg",
        "/public/img/1575017238192-550d5b9687641dfdb6a3f1cb0dc32d6d.jpg"
    ],
    img: "/public/img/1575017238173-2ced0318a94559321bfcfbebe0e5a69b.jpg",
    clickNum: NumberInt("2"),
    commentNum: NumberInt("0"),
    likeNum: NumberInt("0"),
    plate: "music",
    title: "QQ音乐冬季恋歌原创大赛投票进行中，你的最爱可能就差你这一票",
    content: "凛冬已至，温暖我们的除了手里的奶茶，还应该有萦绕心头的爱情。11月27日，由QQ音乐开放平台发起的“冬季恋歌——情歌主题原创歌曲征集”活动正式进入作品投票阶段，邀请你选出自己心仪的冬日恋歌。本次大赛于11月13日上线，面向全网征集有关#心动、#恋爱、#思念主题的原创音乐作品，一方面旨在挖掘年轻原创歌手，让更多新人有展现的舞台，另一面是希望传递更多甜蜜恋歌，用音乐给广大用户送来冬日暖意。目前，活动进入投票阶段，QQ音乐开放平台从众多作品投稿中，综合歌曲质量和播放量评选出前二十强，邀请全网乐迷和用户进行投票。基于最终投票结果，进入十强的音乐作品和创作者将有机会获得千万级曝光以及特别企划推广，从QQ音乐开放平台走上成名的“高速公路”。“醉国风”原创国风大赛、“破茧行动”歌曲征集计划、“舞池派对”原创歌曲大赛以及“冬季恋歌——情歌主题原创歌曲征集”，QQ音乐开放平台正通过一系列征集活动，让有才华的音乐人和音乐达人发声，让不同风格的优质作品进入大众视野，被更多乐迷倾听和分享，真正的让大众生活充满音乐。",
    nickname: "丶花少",
    "user_id": "5de0da8e5dd0a380dbc1acaf",
    icon: "/public/img/1575017124098-下载 (4).jpeg",
    "created_time": ISODate("2019-11-29T08:47:18.195Z"),
    "last_modified_time": ISODate("2019-11-29T08:47:18.195Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("topics").insert([ {
    _id: ObjectId("5de0dc555dd0a380dbc1acb3"),
    "img_src": [
        "/public/img/1575017557030-f12d8ae7064a4c98a20ff932ceeb8dc3.gif"
    ],
    img: "/public/img/1575017557030-f12d8ae7064a4c98a20ff932ceeb8dc3.gif",
    clickNum: NumberInt("2"),
    commentNum: NumberInt("2"),
    likeNum: NumberInt("0"),
    plate: "funny",
    title: "拍张结婚照那叫一个真不容易",
    content: "拍张结婚照那叫一个真不容易",
    nickname: "Bitter 祭末",
    "user_id": "5de0db705dd0a380dbc1acb2",
    icon: "/public/img/1575017346967-下载 (3).jpeg",
    "created_time": ISODate("2019-11-29T08:52:37.075Z"),
    "last_modified_time": ISODate("2019-11-29T08:52:37.075Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("topics").insert([ {
    _id: ObjectId("5de0dd105dd0a380dbc1acb5"),
    "img_src": [
        "/public/img/1575017744459-b7cab1bbda9449d28eb4bc785b7fa486.gif"
    ],
    img: "/public/img/1575017744459-b7cab1bbda9449d28eb4bc785b7fa486.gif",
    clickNum: NumberInt("8"),
    commentNum: NumberInt("3"),
    likeNum: NumberInt("1"),
    plate: "funny",
    title: "有个二货主人真是。。",
    content: "有个二货主人真是。。",
    nickname: "妳愛我嗎？",
    "user_id": "5de0dc775dd0a380dbc1acb4",
    icon: "/public/img/1575017609800-下载 (2).jpeg",
    "created_time": ISODate("2019-11-29T08:55:44.478Z"),
    "last_modified_time": ISODate("2019-11-29T08:55:44.478Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("topics").insert([ {
    _id: ObjectId("5de0dd8f5dd0a380dbc1acb7"),
    "img_src": [
        "/public/img/1575017871812-f11f3a292df5e0fee56a29319b62f4ad5edf729c.jpeg"
    ],
    img: "/public/img/1575017871812-f11f3a292df5e0fee56a29319b62f4ad5edf729c.jpeg",
    clickNum: NumberInt("3"),
    commentNum: NumberInt("1"),
    likeNum: NumberInt("0"),
    plate: "sports",
    title: "国际乒联奥地利公开赛正赛展开",
    content: "当地时间11月14日，2019国际乒联世界巡回赛奥地利公开赛进入正赛阶段，中国选手在混双、男双等项目上顺利晋级。\n\n首次搭档混双比赛的林高远/朱雨玲顺利从资格赛突围，首轮他们3比0横扫去年国际乒联世界巡回赛总决赛混双冠军中国香港组合黄镇廷/杜凯琹。男双方面，世乒赛季军组合梁靖崑/林高远首轮迎战法国组合弗洛雷/莱贝松，双方苦战5局，最终中国组合把握住最后的关键球以12比10赢下决胜局战胜对手晋级。从资格赛中突围的中国队唯一一对女双组合顾玉婷/孙铭阳正赛首轮1比3不敌韩国组合崔孝珠/梁夏银，无缘次轮。\n\n经历了前两天的资格赛，男单赛场中国队10名参赛队员中仅周雨和赵子豪两人成功突围晋级正赛。国乒女队的8名队员中，张瑞、王艺迪、顾玉婷、钱天一4人成功突围，晋级女单正赛。\n\n由于小将王楚钦在与队友赵子豪的男单资格赛最后一轮比赛中情绪失控，故意扔掉球拍，造成不良社会影响。中国乒协决定给予王楚钦停赛三个月处罚，对负有管理责任的主管教练刘国正给予停赛一个月处罚，并责令两人立即回国。由此，王楚钦原本与樊振东、刘诗雯搭档的男双、混双比赛也退出了此次比赛的争夺。",
    nickname: "少女病`",
    "user_id": "5de0dd345dd0a380dbc1acb6",
    icon: "/public/img/1575017800873-7.jpeg",
    "created_time": ISODate("2019-11-29T08:57:51.813Z"),
    "last_modified_time": ISODate("2019-11-29T08:57:51.813Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("topics").insert([ {
    _id: ObjectId("5de0de315dd0a380dbc1acb9"),
    "img_src": [
        "/public/img/1575018033616-timg.gif"
    ],
    img: "/public/img/1575018033616-timg.gif",
    clickNum: NumberInt("3"),
    commentNum: NumberInt("1"),
    likeNum: NumberInt("1"),
    plate: "funny",
    title: "吃个热狗怎么呢？嗯？",
    content: "谁不让我吃热狗的，滚出来！",
    nickname: "王思聪",
    "user_id": "5de0ddaa5dd0a380dbc1acb8",
    icon: "/public/img/1575017936343-7c1ed21b0ef41bd5a7f81d995ada81cb39db3d37.png",
    "created_time": ISODate("2019-11-29T09:00:33.624Z"),
    "last_modified_time": ISODate("2019-11-29T09:00:33.624Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("topics").insert([ {
    _id: ObjectId("5de0def05dd0a380dbc1acbb"),
    "img_src": [
        "/public/img/1575018224826-0dc5a6248209139dc0e1afce8c.jpeg",
        "/public/img/1575018224830-51a0e1e68c9c01590a01fe32a4.jpeg",
        "/public/img/1575018224842-e588af486cd6ab421bfdccb4b3.jpeg",
        "/public/img/1575018224845-cdfe2d06e78719cddcded45699.jpeg",
        "/public/img/1575018224848-87c262ce538defb232983dbaae.jpeg",
        "/public/img/1575018224850-8307cd59cc4080cbdb85961c8b.jpeg",
        "/public/img/1575018224852-55a0524f8fbcc62ac268744fd3.jpeg",
        "/public/img/1575018224860-67d5b07226ac4cc1db17cc890c.jpeg",
        "/public/img/1575018224863-0c0570b64c72bdb8782475efab.jpeg"
    ],
    img: "/public/img/1575018224826-0dc5a6248209139dc0e1afce8c.jpeg",
    clickNum: NumberInt("10"),
    commentNum: NumberInt("4"),
    likeNum: NumberInt("2"),
    plate: "car",
    title: "全新一代帕萨特来了！还是你儿时的样子吗？",
    content: "“帕萨特”这三个字几乎充斥了我的童年，可以说它启蒙了我对“好车”的概念，真皮座椅、实木内饰都让童年的我对它刮目相看。时间回到2000年，当时上海大众生产的帕萨特B5正式投放国内市场，宽大圆润的造型可以说正中大家的下怀，成为当时国产轿车中的标杆产品，时至今日帕萨特在国内市场已经累计销售270万台，可以说是B级车中的常青树，而惊人的销量背后，自然离不开优秀的产品力，而我也有幸在这么多年以后，以媒体的身份去体会全新一代帕萨特，下面我们就来了解一下这台再熟悉不过的“帕萨特”。",
    nickname: "殃国娇颜",
    "user_id": "5de0de4f5dd0a380dbc1acba",
    icon: "/public/img/1575018084252-下载 (1).jpeg",
    "created_time": ISODate("2019-11-29T09:03:44.867Z"),
    "last_modified_time": ISODate("2019-11-29T09:03:44.867Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("topics").insert([ {
    _id: ObjectId("5de0dfdf5dd0a380dbc1acbd"),
    "img_src": [
        "/public/img/1575018463102-u=2823126596,3464658823&fm=173&app=25&f=JPEG.jpeg",
        "/public/img/1575018463103-u=2009916676,3674509921&fm=173&app=25&f=JPEG.jpeg",
        "/public/img/1575018463106-u=981577409,3623096268&fm=173&app=25&f=JPEG.jpeg",
        "/public/img/1575018463107-u=3359104995,2214992943&fm=173&app=25&f=JPEG.jpeg",
        "/public/img/1575018463107-u=181788804,3816109640&fm=173&app=25&f=JPEG.jpeg"
    ],
    img: "/public/img/1575018463102-u=2823126596,3464658823&fm=173&app=25&f=JPEG.jpeg",
    clickNum: NumberInt("29"),
    commentNum: NumberInt("5"),
    likeNum: NumberInt("2"),
    plate: "food",
    title: "美食之都，吃货的聚集地——成都美食介绍",
    content: "成都被誉为“网红城市”，因为社交软件上时常能见到成都的一些“网红店”，以及不少网络红人，成都也因此一炮走红，成为不少人向往的旅游胜地，那么既然要去成都旅行，可千万别忘了平常成都本地的正宗小吃！\n\n担担面\n\n四川担担面的名头应该是非常响亮的了。担担面以四川出了名的麻、辣、鲜、香著名。四川人的辣那也是全国闻名的了，担担面更是无辣不欢的老饕们的最爱。担担面最开始以摊贩挑担贩卖而得名，此菜色泽亮红，一眼便能得知它辣的特点。担担面麻辣酸味突出，辣而不燥，鲜而不腻，堪称四川面食中的王者！ 担担面采用细滑的面条，以红辣椒油、川冬菜、肉末、花椒、红酱油、豌豆尖和葱花等为佐料。夹一筷油红香辣的担担面，入口香气四溢，刺激的辣味直击脑髓，一碗下肚，面泛红光，大汗淋漓，十分痛快。\n\n麻婆豆腐\n\n麻婆豆腐的名声可谓是家喻户晓了，它的踪影几乎遍布全国，非常的受欢迎，但因为各地的口味不同，特别对“辣”的感觉不同，配方做出了修改，想吃到最正宗的麻婆豆腐，非得到四川不可！作为省会成都，那麻婆豆腐，可谓是再正宗不过了。 麻婆豆腐主要的特点就是“麻、辣、鲜、香” 缺一不可，花椒的麻，干辣椒的辣，肉末的鲜，火候的香。麻婆豆腐色泽鲜红，红的发热，豆腐十分细嫩，口感润滑，入口辣劲儿十足，你若是灌水解了辣，酸酸的麻劲儿还会纠缠你许久，一碗小小的麻婆豆腐，能让你即便在大冬天都大汗淋漓、浑身发热！夫妻肺片\n\n夫妻肺片作为川菜也是大名鼎鼎的川菜，也被不少人误解，所谓肺片并不真的是猪牛羊的肺脏！而是以牛头皮、牛心、牛舌、牛肚、牛肉为主料进行研制的卤味，然后切片再撒上一层花椒、辣椒、香葱，最后浇一勺热油，碗里滋滋响，香气网上冒，这就是一碗正宗的夫妻肺片了！ 川菜自然是以麻辣为主，但夫妻肺片辣味较浅，突出一个麻香！ 牛心牛舌等经过卤制本就卤香十足，再经过花椒、干辣椒、香葱等香料泼油体香，那香味儿，没入口就将垂涎三尺了，夫妻肺片越嚼越香，是四川最著名的下酒菜，一壶小酒，一盘夫妻肺片，那就是朋友小聚的不二选择。口感劲道，卤香浓郁，回味无穷。棒棒鸡\n\n这道菜可能不如前几道那么声名远扬，但也是四川人最喜爱的凉菜之一。 棒棒鸡是选用良种汉阳鸡，煮熟后用木棒捶至松软后食用，棒棒鸡味怪，麻、辣、酸、甜、鲜、咸、香，七味俱全，各种风味多而不杂，混而不乱，口感松软，作为餐前开胃凉菜可以说是再合适不过了，丰富清爽的口味很好地唤醒了食客的味觉，使人胃口大开，如果你在四川成都用餐，那么千万别忘了点一盘棒棒鸡，它能让你胃口大开！龙抄手\n\n别误会，这名字这么霸气，其实只是一碗小小的馄饨，南方叫云吞，别处的馄饨口味比较清淡大众，但您可别忘了这可是无辣不欢的四川成都，馄饨照例还是以面皮裹住馅儿，鲜以猪肉、鸡蛋、各类蔬菜为主，但酱汤确实红彤彤、辣油油的！龙抄手煮熟出锅后，要往那碗里放入川盐、辣油、芝麻、胡椒和原汤，再将捞干的龙抄手放入碗里，龙抄手的辣并没有其他川菜那么强劲，微微的辣度，加上微微的麻感，混合着香料的浓香，一碗热腾腾的龙抄手能让人浑身暖和地舒服。",
    nickname: "gaofei",
    "user_id": "5ddf83c8b78aa66cfb5b025e",
    icon: "/public/img/1575015920996-2.jpg",
    "created_time": ISODate("2019-11-29T09:07:43.109Z"),
    "last_modified_time": ISODate("2019-11-29T09:07:43.109Z"),
    __v: NumberInt("0")
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("forumProject");
db.getCollection("users").insert([ {
    _id: ObjectId("5ddf83c8b78aa66cfb5b025e"),
    avatar: "/public/img/1575015920996-2.jpg",
    bio: "Hello，记录美好生活！",
    gender: NumberInt("-1"),
    status: NumberInt("0"),
    email: "1329372653@qq.com",
    nickname: "gaofei",
    password: "123456",
    "created_time": ISODate("2019-11-28T08:22:32.859Z"),
    "last_modified_time": ISODate("2019-11-28T08:22:32.859Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5de0b487b07c402cc7d1a00f"),
    avatar: "/public/img/1575016093531-3.jpg",
    bio: "Hello，记录美好生活！",
    gender: NumberInt("1"),
    status: NumberInt("0"),
    email: "912455894@qq.com",
    nickname: "啦啦啦啦",
    password: "123456",
    "created_time": ISODate("2019-11-29T06:02:47.205Z"),
    "last_modified_time": ISODate("2019-11-29T06:02:47.205Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5de0d2696e78ad79c2e2c64a"),
    avatar: "/public/img/1575015590957-1.jpg",
    bio: "Hello，记录美好生活！",
    gender: NumberInt("-1"),
    status: NumberInt("0"),
    email: "1@qq.com",
    nickname: "寂寞ゝ专属.",
    password: "123456",
    "created_time": ISODate("2019-11-29T08:10:17.856Z"),
    "last_modified_time": ISODate("2019-11-29T08:10:17.857Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5de0d74a5dd0a380dbc1aca7"),
    avatar: "/public/img/1575016293522-4.jpg",
    bio: "Hello，记录美好生活！",
    gender: NumberInt("1"),
    status: NumberInt("0"),
    email: "2@qq.com",
    nickname: "ー￡゛走了ノ没留下什么",
    password: "123456",
    "created_time": ISODate("2019-11-29T08:31:06.202Z"),
    "last_modified_time": ISODate("2019-11-29T08:31:06.202Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5de0d8745dd0a380dbc1aca9"),
    avatar: "/public/img/1575016586255-5.jpg",
    bio: "Hello，记录美好生活！",
    gender: NumberInt("-1"),
    status: NumberInt("0"),
    email: "3@qq.com",
    nickname: "言晚",
    password: "123456",
    "created_time": ISODate("2019-11-29T08:36:04.367Z"),
    "last_modified_time": ISODate("2019-11-29T08:36:04.367Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5de0d9375dd0a380dbc1acab"),
    avatar: "/public/img/1575016781746-6.jpg",
    bio: "Hello，记录美好生活！",
    gender: NumberInt("-1"),
    status: NumberInt("0"),
    email: "4@qq.com",
    nickname: "人生如戏",
    password: "123456",
    "created_time": ISODate("2019-11-29T08:39:19.686Z"),
    "last_modified_time": ISODate("2019-11-29T08:39:19.686Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5de0d9d65dd0a380dbc1acad"),
    avatar: "/public/img/1575016947448-下载 (5).jpeg",
    bio: "Hello，记录美好生活！",
    gender: NumberInt("-1"),
    status: NumberInt("0"),
    email: "5@qq.com",
    nickname: "香了一口※",
    password: "123456",
    "created_time": ISODate("2019-11-29T08:41:58.162Z"),
    "last_modified_time": ISODate("2019-11-29T08:41:58.162Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5de0da8e5dd0a380dbc1acaf"),
    avatar: "/public/img/1575017124098-下载 (4).jpeg",
    bio: "Hello，记录美好生活！",
    gender: NumberInt("-1"),
    status: NumberInt("0"),
    email: "6@qq.com",
    nickname: "丶花少",
    password: "123456",
    "created_time": ISODate("2019-11-29T08:45:02.512Z"),
    "last_modified_time": ISODate("2019-11-29T08:45:02.512Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5de0db705dd0a380dbc1acb2"),
    avatar: "/public/img/1575017346967-下载 (3).jpeg",
    bio: "Hello，记录美好生活！",
    gender: NumberInt("-1"),
    status: NumberInt("0"),
    email: "7@qq.com",
    nickname: "Bitter 祭末",
    password: "123456",
    "created_time": ISODate("2019-11-29T08:48:48.669Z"),
    "last_modified_time": ISODate("2019-11-29T08:48:48.669Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5de0dc775dd0a380dbc1acb4"),
    avatar: "/public/img/1575017609800-下载 (2).jpeg",
    bio: "Hello，记录美好生活！",
    gender: NumberInt("-1"),
    status: NumberInt("0"),
    email: "8@qq.com",
    nickname: "妳愛我嗎？",
    password: "123456",
    "created_time": ISODate("2019-11-29T08:53:11.632Z"),
    "last_modified_time": ISODate("2019-11-29T08:53:11.632Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5de0dd345dd0a380dbc1acb6"),
    avatar: "/public/img/1575017800873-7.jpeg",
    bio: "Hello，记录美好生活！",
    gender: NumberInt("-1"),
    status: NumberInt("0"),
    email: "9@qq.com",
    nickname: "少女病`",
    password: "123456",
    "created_time": ISODate("2019-11-29T08:56:20.911Z"),
    "last_modified_time": ISODate("2019-11-29T08:56:20.911Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5de0ddaa5dd0a380dbc1acb8"),
    avatar: "/public/img/1575017936343-7c1ed21b0ef41bd5a7f81d995ada81cb39db3d37.png",
    bio: "Hello，记录美好生活！",
    gender: NumberInt("-1"),
    status: NumberInt("0"),
    email: "10@qq.com",
    nickname: "王思聪",
    password: "123456",
    "created_time": ISODate("2019-11-29T08:58:18.994Z"),
    "last_modified_time": ISODate("2019-11-29T08:58:18.994Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5de0de4f5dd0a380dbc1acba"),
    avatar: "/public/img/1575018084252-下载 (1).jpeg",
    bio: "Hello，记录美好生活！",
    gender: NumberInt("-1"),
    status: NumberInt("0"),
    email: "11@qq.com",
    nickname: "殃国娇颜",
    password: "123456",
    "created_time": ISODate("2019-11-29T09:01:03.401Z"),
    "last_modified_time": ISODate("2019-11-29T09:01:03.401Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5e4a27910cb2afe7559ae7d9"),
    avatar: "/public/img/1581918166606-avatar.jpg",
    bio: "Hello，记录美好生活！",
    gender: NumberInt("-1"),
    status: NumberInt("0"),
    email: "110@qq.com",
    nickname: "110",
    password: "12345678",
    "created_time": ISODate("2020-02-17T05:41:37.223Z"),
    "last_modified_time": ISODate("2020-02-17T05:41:37.223Z"),
    __v: NumberInt("0")
} ]);
session.commitTransaction(); session.endSession();
