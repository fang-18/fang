import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c",
    siteTitle: "我的个人空间",
    github: "https://github.com/fang-18",
    qq: "487427230",
    qqQrCode:
      "",
    weixin: "16626727144",
    weixinQrCode:
      "",
    mail: "487424230@qq.com",
    icp: "广东ICP备1314号",
    githubName: "fang-18",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});
