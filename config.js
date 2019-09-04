const CONF = {
  port : '5757',
  rootPathname: '',
  appid:'',
  appSecret:'',
  userQcloudLogin:true,
  mysql:{
    host:'127.0.0.1',
    port :'3307',
    user:'MYSQLMeng',
    db:'',
    pass:'',
    char:'utf8mb4'
  },
  cos:{
    region:'ap-nanning',
    fileBucker:'qcloudtest',
    uploadFolder:''
  },
  wxLoginExpiras:'7200',
  wxMessageToken:'abcdefgh'
}
module.exports = CONF