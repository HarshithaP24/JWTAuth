import { Router } from "express";
import randtoken from "rand-token";
import jwt from "jsonwebtoken";
import { insert,getUser,insertInto } from "../services/userQuery";
import { issueJWT } from "../lib/utils";
// import { passport } from "../app";
import passport from "passport";
import path from "path";
import fs from "fs";

const pathToKey = path.join(__dirname.replace("dist","src"), '..', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

const router = Router();

router.get('/protectedResource', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.status(200).json({ success: true, msg: "You are successfully authenticated to this route!"});
});

router.post('/register',(req, res, next) => {
    try{
        insert(req,res).then(()=>{
        });   
        let result = insertInto(req,res);
        //console.log("success",result);
        res.json({success: true, msg: "User Registered Successfully", userId: req.body.id,});
    }
    catch(err){
        res.json({sucess:false, msg: err});
    }
})

router.post('/login',(req,res,next) => {
    let uname = req.body.username
    let pswd = req.body.password
    try{
        getUser(req,function(result){
            //console.log("check result: ",result);
            console.log("result: ",result[0].username,result[0].password,result.length);
            if(result && (uname===result[0].username) && (pswd===result[0].password))
            {
                var user = {
                    "username":result[0].username,
                    "id": result[0].id
                }
                var jwt =  issueJWT(user);
                res.json({sucess:true, msg: "User is Validated",token: jwt.token,expiresIn:jwt.expiresIn});
            }else{
                res.json({sucess:false, msg: "Authentication Failed"});
            }
        });  
    }
    catch(err){
        res.json({sucess:false, msg: err});
    }
})

router.post('/verify',(req,res,next) => {
    var token = req.body.token;
    var secret = PUB_KEY; 
    try{
        jwt.verify(token,secret, {algorithms : 'RS256'});
        res.json({success:true, msg:token + " is valid"})
    }
    catch(err){
        res.json({success:false, msg:err})
    }
})

router.post('/token',(req,res,next) => {
    var username = req.body.username
    var refreshToken = req.body.refreshToken
    if((refreshToken in refreshTokens) && (refreshTokens[refreshToken] === username)) {
        var user = {
            'username': username,
            'role': 'Admin'
        }
        var token = jwt.sign(user, secret, {expiresIn: 300})
        res.json({token: 'JWT ' + token})
    }
    else{
        res.send(401)
    }
})

router.post('/token/reject', (req,res,next) => {
    var refreshToken = req.body.refreshToken;
    if(refreshToken in refreshTokens)
    {
        delete refreshTokens[refreshToken];
    }
    res.send(204)
})

export default router;