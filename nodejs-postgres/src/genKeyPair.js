import fs from "fs";
import crypto from "crypto";

export const genKeyPair = function() {
    
    // Generates an object where the keys are stored in properties `privateKey` and `publicKey`
    const keyPair = crypto.generateKeyPairSync('rsa', {
        modulusLength: 4096, // bits - standard for RSA keys
        publicKeyEncoding: {
            type: 'pkcs1', // "Public Key Cryptography Standards 1" 
            format: 'pem' // Most common formatting choice
        },
        privateKeyEncoding: {
            type: 'pkcs1', // "Public Key Cryptography Standards 1"
            format: 'pem' // Most common formatting choice
        }
    });

    // let res ={
    //     "PUB_KEY" : keyPair.publicKey,
    //     "PRIV_KEY" : keyPair.privateKey
    // }
    // return res;
    //console.log("chcek pub,priv",__dirname.replace("dist","src"),"::",keyPair.privateKey,":",keyPair.publicKey);
    // Create the public key file
    try{
    fs.writeFileSync(__dirname.replace("dist","src") + '/id_rsa_pub.pem', keyPair.publicKey); 
    }
    catch(err) {
        console.log("err: ",err.message)
    }
    // Create the private key file
    fs.writeFileSync(__dirname.replace("dist","src") + '/id_rsa_priv.pem', keyPair.privateKey);
}

genKeyPair();