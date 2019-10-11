/***********************************************************
 **  @project T-NEM
 **  @file Mongo
 **  @author Brice Daupiard <brice.daupiard@smartiiz.com>
 **  @Date 01/10/2019
 **  @Description Mongo db configuration file
 ***********************************************************/

export const monConfig = {
  username: "",
  password: "",
  host: "",
  port: 21017,
  database: "",
  options: {
    useNewUrlParser: true,
    server: {
      socketOption: {
        keepAlive: 300000,
        connectTimeoutMS: 30000
      }
    },
    replset: {
      socketOptions: {
        keepAlive: 300000,
        connectTimeoutMS: 30000
      }
    }
  }
};
