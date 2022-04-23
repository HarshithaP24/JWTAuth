import { genKeyPair } from "../genKeyPair";

export const defaultConfig =   ({
  db: {
    provider: "pg",
    host: "localhost",
    user: "egov_demo",
    port: 5435,
    password: "bstcBel123",
    database: "bel_cb_dev", 
  },
  appPort: 3300
  // PUB_KEY: genKeyPair.PUB_KEY,
  // PRIV_KEY: genKeyPair.PRIV_KEY 
});