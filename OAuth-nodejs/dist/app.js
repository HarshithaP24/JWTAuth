"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_bodyParser2.default.json({ type: 'application/json' }));
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.listen(8080, function () {
    console.log("Server is listening to http://localhost:8080");
});

var clientId = "715f0caf454d59870f3b";
var clientSecret = "f501f836db90882735282480fe60d4880714e68d";

app.get("/oauth/redirect", function (req, res) {
    console.log("check the req", req);
    var reqToken = req.query.code; // receives the authroization-code in the requestBody when the redirect url is called
    (0, _axios2.default)({
        //making a post request to github authorization server to get the access token.
        method: "post",
        url: "https://github.com/login/oauth/access_token?client_id=" + clientId + "&client_secret=" + clientSecret + "&code=" + reqToken,
        headers: {
            accept: "application/json"
        }
    }).then(function (response) {
        console.log("check response", response);
        var accessToken = response.data.access_token; // received an access token with which u can access the protected resource
        res.redirect("/welcome.html?access_token=" + accessToken);
    });
});

app.use(_express2.default.static(__dirname + "/public"));

exports.default = app;
//# sourceMappingURL=app.js.map