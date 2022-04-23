import client from "./connections/dbConnection";
import myConfig from "./connections/liquibaseConnection.js";
import { defaultConfig } from "./configs/default";
import express from "express";
import bodyParser from "body-parser";
import router from "./routes/users";
import rout from "./routes/auth";
import { strategy } from "./middleware/passport";
import { genKeyPair } from "./genKeyPair";
import passport from "passport";

const app = express();
app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));
app.listen(defaultConfig.appPort, ()=>{
    console.log(`Server is listening to http://localhost:${defaultConfig.appPort}`);
})

myConfig.status();
myConfig.update();
client.connect()

app.use(passport.initialize());
passport.use(strategy);

app.use('/users', router);
app.use('/auth',rout);

export {app,client};