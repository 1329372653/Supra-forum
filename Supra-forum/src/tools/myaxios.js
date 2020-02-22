import axios from 'axios'
import QS from 'qs';

// axios.defaults.baseURL = "http://49.234.217.92:9000"
//设置超时时间
axios.defaults.timeout = 10000;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//请求方法的封装
export default function myaxios(method, url, params) {
    if (method == "GET") {
        return axios.get(url, { params: params })
    } else if (method == "POST") {
        var params = QS.stringify(params);
        return axios.post(url, params)
    }
}

export const loginURL = "/api/login"; //post
export const registerURL = "/api/register" //post
export const getsessionURL = "/api/getsession" //get
export const loginoutURL = "/api/logout" //get
export const modifypersonURL = "/api/modifyperson" //post
export const posttopicURL = "/api/posttopic" //post
export const gettopicAllURL = "/api/get/topic" //get
export const gettopicByPlate = "/api/get/topicByPlate" //post
export const gettopicById = "/api/get/topicById" //post
export const getcomment = "/api/get/topic/comment" //post
export const commitComment = "/api/commit/comment" //post
export const addFriendURL = "/api/addFriend" //post
export const judgeFriendURL = "/api/judgeFriend" //post
export const deleteFriendURL = "/api/delete/friend" //post
export const getMyTopicsURL = "/api/getMyTopics" //post
export const deleteMyTopicURL = "/api/delete/myTopic" //post
export const getMyCommentURL = "/api/getMyComments" //post
export const deleteMyCommentURL = "/api/delete/myComment" //post
export const getMyFriendsURL = "/api/getMyFriends" //post
export const modifyPasswordURL = "/api/modifyPassword" //post
export const getSearchURL = "/api/search" //post
export const getMyFansURL = "/api/getMyFans" //post
export const addCollectionURL = "/api/add/collection" //post
export const getMyCollection = "/api/get/myCollection" //post
export const deleteCollectionURL = "/api/delete/collection" //post
export const getHostPostURL = "/api/get/hostPost" //get
export const getLunboDataURL = "/api/get/lunboData" //get
export const uploadimg = "/api/uploadimg" //post