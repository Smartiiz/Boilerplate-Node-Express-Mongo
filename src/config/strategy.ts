/***********************************************************
 **  @project T-NEM
 **  @file Strategy
 **  @author Brice Daupiard <brice.daupiard@smartiiz.com>
 **  @Date 01/10/2019
 **  @Description Strategy router (Mongo, Mysql, Mssql, Psql)
 ***********************************************************/

import jwt = require("jsonwebtoken");
import passport from "passport";
import passportJWT = require("passport-jwt");
import {Strategy} from "passport-local";
import path = require("path");
import * as Global from "../global";

const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;

const SecurityCheck = () => {
    passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: Global.CONFIG.jwt.secret
    }, (jwtPayload: any, cb: any) => {
        if (jwtPayload) {
            cb(null, jwtPayload);
        } else {
            cb(true, null);
        }
    }));
};

const LocalLoginStrategy = (method: string) => {
    switch (method) {
        case "mysql":
            return mysql();
            break;
        case "msql":
            return msql();
            break;
        case "mongo":
            return mongo();
            break;
        default:
            return mongo();
    }
};

const mysql = () => {
    // prout
};

const msql = () => {
    // prout
};

const mongo = async () => {
    console.log(">> Login strategy mongo database");
    passport.use("local-login",
        new Strategy(
            async (username: string, password: string, done: any) => {
                const user = await Global.Database.Users.findOne({
                    Username: username
                });
                console.log("user", user);
                if (user && user.Password === password) {
                    done(null, user);
                } else {
                    done({
                        status: "error",
                        msg: "User not found"
                    }, null);
                }
            }
        )
    );
};

export {passport, passportJWT, Strategy, path, jwt, SecurityCheck, LocalLoginStrategy};
