const client = require('./connections/dbConnection.js')
const myConfig = require('./connections/liquibaseConnection.js')
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(3300, ()=>{
    console.log("Server is listening to port 3300");
})

myConfig.status();
myConfig.update();

client.connect();

app.post('/_get',(req,res)=>{
    console.log("check: ",req.query)
    client
        .query('Select * from eg_test_user_table')
        .then(result => {
            res.send(result.rows);
            console.log("query run successfully");
        })
        .catch(err => {
            res.send(err.message);
        })
        .finally(() => {
            client.end();
        })
});

app.post('/_insert', (req, res)=> {
    const data = req.body;
    let insertQuery = `insert into eg_test_user_table(title, salutation, dob, locale, username, password, pwdexpirydate, mobilenumber, altcontactnumber, emailid, createddate, lastmodifieddate, createdby, lastmodifiedby, active, name, gender, pan, aadhaarnumber, type, version, guardian, guardianrelation, signature, accountlocked, bloodgroup, photo, identificationmark, tenantid, id, uuid, accountlockeddate)
        values ('${data.title}', '${data.salutation}', '${data.dob}', '${data.locale}', '${data.username}', '${data.password}', '${data.pwdexpirydate}', '${data.mobilenumber}', '${data.altcontactnumber}', '${data.emailid}', '${data.createddate}', '${data.lastmodifieddate}', ${data.createdby}, ${data.lastmodifiedby}, ${data.active}, '${data.name}', ${data.gender}, '${data.pan}', '${data.aadhaarnumber}', '${data.type}', '${data.version}', '${data.guardian}', '${data.guardianrelation}', '${data.signature}', ${data.accountlocked}, '${data.bloodgroup}', '${data.photo}', '${data.identificationmark}', '${data.tenantid}', ${data.id}, ${data.uuid}, ${data.accountlockeddate})`
                
    client
        .query(insertQuery)
        .then(result=>{
            res.send('Insertion was successful')
        })
        .catch(err => {
            res.send(err.message);
        })
        .finally(() => {
            client.end();
        })
});