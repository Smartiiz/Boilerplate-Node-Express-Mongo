/***********************************************************
 **  @project T-NEM
 **  @file Index
 **  @author Brice Daupiard <brice.daupiard@smartiiz.com>
 **  @Date 01/10/2019
 **  @Description Main configuration file
 ***********************************************************/

export const CONFIG = {
    API_PORT: 3001,
    SESSION: {
        secret: "tHiSiSasEcRetStr",
        resave: true,
        saveUninitialized: true
    },
    jwt: {
        jwtFromRequest: "",
        secret: "SmartiizSecrets",
        issuer: "brice.daupiard@smartiiz.com",
        audience: "smartiiz.com",
        expire: {
            expiresIn: "30m"
        }
    },
    jwtSession : {
        session : false
    },
    LocalLoginStrategyDatabase: "mongo",
    urlencoded: {extended: true},
    PUBLIC_PATH : "../public"

};
