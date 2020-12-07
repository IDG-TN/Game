module.exports = {
  //测试&开发
  test: {
    NODE_ENV: "test",
    ENV_API: "http://164.52.2.101:81/list"
  },
  //生产
  production: {
    NODE_ENV: "production",
    ENV_API: ""
  }
};
