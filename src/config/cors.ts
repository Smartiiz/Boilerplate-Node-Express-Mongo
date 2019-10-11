/***********************************************************
 **  @project T-NEM
 **  @file Index
 **  @author Brice Daupiard <brice.daupiard@smartiiz.com>
 **  @Date 01/10/2019
 **  @Description Cors preflight verification browser
 ***********************************************************/

import express from "express";

const Middleware = (req: express.Request, res: express.Response, next: any) => {
    res.header("Access-Control-Allow-Origin", req.get("origin"));
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, " +
        "Access-Control-Allow-Headers, Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Credentials", "true");
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }
    return next();
};

export default Middleware;
export {express, Middleware};
