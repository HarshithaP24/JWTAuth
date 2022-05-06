import jsonwebtoken from "jsonwebtoken";
import path from "path";
import fs from "fs";

// const pathToKey = path.join(__dirname.replace("dist","src"), '..', 'id_rsa_pub.pem');
// const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');
const pathToKey = path.join(__dirname.replace("dist","src"), '..', 'id_rsa_priv.pem');
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8');

export const issueJWT = function(user){
    const name = user.username;
    const id = user.id;
    const expiresIn = '1d';

    const payload = {
        sub : id,
        subName: name,
        issuedDate : Date.now()
    };
    //console.log("check all",pathToKey," : ",payload.sub," : ",payload.issuedDate," : ",PUB_KEY);
    const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, { expiresIn: expiresIn, algorithm: 'RS256' }); // mentioning to sign using algrthm RS256
    return {
        token: 'bearer '+ signedToken,
        expiresIn: expiresIn
    }

}