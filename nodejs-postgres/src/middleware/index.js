import passport from "passport";
import JwtStrategy from "passport-jwt/lib/strategy";
import { ExtractJwt } from "passport-jwt/lib";
import { app } from "../app";

app.use(passport.initialize);
app.use(passport.session);
var opts = {}

passport.serializeUser((user,done)=>{
    done(null,user.username);
})

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = SECRET

passport.use(new JwtStrategy(opts,function(jwtPayload, done){
    var expirationDate = new Date(jwtPayload.exp * 1000)
    if(expirationDate < newDate())
    {
        return done(null,false);
    }
    var user = jwtPayload;
    done(null,user);
}))