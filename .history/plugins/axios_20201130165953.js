import * as axios from "@nuxtjs/axios";
let options = {};


if (process.env.environment === 'test') {
    baseURL =   ’测试环境的请求地址'
  } else if (process.env.environment === 'presentation') {
    baseURL = '演示环境的请求地址'
  } else if (process.env.environment === 'release') {
    baseURL = '预发布环境的请求地址'
  } else if (process.env.environment === 'production') {
    baseURL = '正式环境的请求地址'
  }
//需要全路径才能工作
if (process.server) {
  options.baseURL = `http://${process.env.HOST || "localhost"}:${process.env
    .PORT || 3000}/api`;
}

export default axios.create(options);
