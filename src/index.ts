/***********************************************************
 **  @project T-NEM
 **  @file Index
 **  @author Brice Daupiard <brice.daupiard@smartiiz.com>
 **  @Date 01/10/2019
 **  @Description Main Express Application
 ***********************************************************/

import * as bodyParser from "body-parser";
import * as Global from "./global";

const express = Global.express;
import session from "express-session";
import path = require("path");

import jwt = require("jsonwebtoken");

class CoreApplication {
    private app: Global.express.Application;
    private Routes: any = Global.Route;

    constructor() {
        this.app = Global.express();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded(Global.CONFIG.urlencoded));
        // Midleware
        this.app.use(Global.Middleware);
        // Initialize passport rules
        Global.Strategy.passport.serializeUser(this.serialize);
        Global.Strategy.passport.deserializeUser(this.deserialize);
        Global.Strategy.LocalLoginStrategy(Global.CONFIG.LocalLoginStrategyDatabase);
        Global.Strategy.SecurityCheck();

        // Define middleware
        this.app.use(session(Global.CONFIG.SESSION));
        this.app.use(Global.Strategy.passport.initialize());
        this.app.use(Global.Strategy.passport.session());
        // Comment if loggin is not usefull
        this.login();

        // Load routes
        this.initializeRoutes();

        // Start App
        this.app.listen(Global.CONFIG.API_PORT, () => {
            console.log("Server listen %d", Global.CONFIG.API_PORT);
        });
    }

    private serialize(user: any, callback: any) {
        callback(null, user.No_);
    }

    private deserialize(id: any, callback: any) {
        callback(null, id);
    }

    private initializeRoutes() {
        for (const route in this.Routes) {
            if (this.Routes[route]) {
                this.app.use("/", this.Routes[route]);
            }
        }
        // Declare static folder available for all;
        this.app.use("/public", Global.express.static(path.join(__dirname, Global.CONFIG.PUBLIC_PATH)));
    }

    private login() {
        this.app.use("/loginFailure",
            (req: Global.express.Request, res: Global.express.Response, next: any) => {
                res.sendStatus(403);
            });
    }

}

export default new CoreApplication();
