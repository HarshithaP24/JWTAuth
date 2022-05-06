import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));
app.listen(8080, ()=>{
    console.log(`Server is listening to http://localhost:8080`);
})


const clientId = "715f0caf454d59870f3b";
const clientSecret = "f501f836db90882735282480fe60d4880714e68d";

app.get("/oauth/redirect",(req,res) => {
    console.log("check the req",req);
    const reqToken = req.query.code; // receives the authroization-code in the requestBody when the redirect url is called
    axios({
        //making a post request to github authorization server to get the access token.
        method:"post",
        url:`https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${reqToken}`,
        headers:{
            accept:"application/json",
        },
    }).then((response) => {
        console.log("check response",response);
        const accessToken = response.data.access_token; // received an access token with which u can access the protected resource
        res.redirect(`/welcome.html?access_token=${accessToken}`);
    });
});


app.use(express.static(__dirname + "/public"));

export default app;