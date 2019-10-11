/***********************************************************
 **  @project T-NEM
 **  @file Index
 **  @author Brice Daupiard <brice.daupiard@smartiiz.com>
 **  @Date 01/10/2019
 **  @Description Mongo Initializator
 ***********************************************************/

import mongoose from "mongoose";
import {monConfig} from "../mongo";
import * as Schema from "./schema/mongodb/index";

const Mongo: any = mongoose;

// Load default data user collection
// Field can be adapted into schema/mongodb/index.ts
let Users: any = null;

if (monConfig && monConfig.database) {
    Mongo.connect(
        `mongodb://${monConfig.username}:${monConfig.password}` +
        `@${monConfig.host}:${monConfig.port}/${monConfig.database}`,
        monConfig.options
    );
    Users = Mongo.model("Users", new Mongo.Schema(Schema.UsersAccountProperty));
    Users.findOne({
        Level: 99
    }, (err: any, data: any) => {
        console.log("data", data);
        if (!data) {
            new Users({
                Username : "admin",
                Password : "admin",
                FirstName : "Administrator",
                LastName : "Magueule",
                Level : 99
            }).save();
            console.log("Account created");
        }
    });
}

// Add Other Table here

export {mongoose, Mongo, Users};
