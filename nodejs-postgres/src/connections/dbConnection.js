//connection to PGAdmin database
import Client from "pg/lib/client";
import { defaultConfig } from "../configs/default.js";

const client = new Client({
    host: defaultConfig.db.host,
    user: defaultConfig.db.user,
    port: defaultConfig.db.port,
    password: defaultConfig.db.password,
    database: defaultConfig.db.database, 
});

export default client;
