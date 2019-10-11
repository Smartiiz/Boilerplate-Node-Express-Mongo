/***********************************************************
 **  @project T-NEM
 **  @file Global
 **  @author Brice Daupiard <brice.daupiard@smartiiz.com>
 **  @Date 01/10/2019
 **  @Description Contain all global function callable in the whole project
 ***********************************************************/

import {CONFIG} from "./config";
import { express, Middleware } from "./config/cors";
import * as Database from "./config/database";
import * as Strategy from "./config/strategy";
import * as Route from "./route";
export {
    CONFIG,
    Middleware,
    express,
    Strategy,
    Database,
    Route
};
