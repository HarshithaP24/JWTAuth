import JwtStrategy from "passport-jwt/lib/strategy";
import { ExtractJwt } from "passport-jwt/lib";
import { insert,getUser } from "../services/userQuery";
import path from "path";
import fs from "fs";

const pathToKey = path.join(__dirname.replace("dist","src"), '..', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

const options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : PUB_KEY,
    algorithms : 'RS256',
    passReqToCallback: true
}
//console.log("check options: ",options.jwtFromRequest," : ",options.secretOrKey);

export const strategy = new JwtStrategy(options,function(req, jwtPayload, done){
    console.log("------- Using Custom Strategy --------")
    console.log("check req url: ",req.route.path); //displays the protectedResource url using this strategy
    console.log("check jwtPayload: ",jwtPayload);

    let user = {
        username: jwtPayload.subName
    }
    try{
        getUser(user,function(result){
            if(result.length > 0){
                //console.log("err");
                return done(null,result);
            }
            else {
                //console.log("fail");
                return done(null, false);
            }
        });
    }
    catch(err)
    {
        return done(err, false);
    }
})