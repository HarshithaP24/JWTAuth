"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.genKeyPair = undefined;

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _crypto = require("crypto");

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var genKeyPair = exports.genKeyPair = function genKeyPair() {

    // Generates an object where the keys are stored in properties `privateKey` and `publicKey`
    var keyPair = _crypto2.default.generateKeyPairSync('rsa', {
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
    try {
        _fs2.default.writeFileSync(__dirname.replace("dist", "src") + '/id_rsa_pub.pem', keyPair.publicKey);
    } catch (err) {
        console.log("err: ", err.message);
    }
    // Create the private key file
    _fs2.default.writeFileSync(__dirname.replace("dist", "src") + '/id_rsa_priv.pem', keyPair.privateKey);
};

genKeyPair();
//# sourceMappingURL=genKeyPair.js.map