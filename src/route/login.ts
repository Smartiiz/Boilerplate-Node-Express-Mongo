/***********************************************************
 **  @project T-NEM
 **  @file Login
 **  @author Brice Daupiard <brice.daupiard@smartiiz.com>
 **  @Date 01/10/2019
 **  @Description Login Route file
 ***********************************************************/

import {express} from "../global";
import {Login as LoginModel} from "../modele/Authentication";

const Login: express.Router = express.Router();

// Middlware connected Global.Strategy.passport.authenticate("jwt", Global.CONFIG.jwtSession),
Login.post("/login", LoginModel);

export { Login };
