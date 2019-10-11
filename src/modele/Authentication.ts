/***********************************************************
 **  @project T-NEM
 **  @file Authentication
 **  @author Brice Daupiard <brice.daupiard@smartiiz.com>
 **  @Date 01/10/2019
 **  @Description Authentication model
 ***********************************************************/

import {CONFIG, express, Strategy} from "../global";

const Login: any = (req: express.Request, res: express.Response) => {
    // defined into Strategy config file
    Strategy.passport.authenticate("local-login",
        {
            failureRedirect: "/loginFailure",
            session: false
        }, (err: any, user: any, info: any) => {
            if (!err && !info) {
                req.login(user, {session: false}, (OnErr: any) => {
                    if (OnErr) {
                        res.send(OnErr);
                    }
                    // generate a signed son web token with the contents of
                    // user object and return it in the response
                    const token = Strategy.jwt.sign({data: user},
                        CONFIG.jwt.secret,
                        CONFIG.jwt.expire
                    );
                    res.json({passport: token, info, user});
                });

            } else {
                res.sendStatus(500).json({
                    err,
                    info
                });
            }
        })(req, res);
};

const Logout: any = (req: express.Request, res: express.Response) => {
    // prout
};

export {Login, Logout};
