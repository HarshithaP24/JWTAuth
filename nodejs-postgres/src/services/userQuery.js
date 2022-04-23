import { CommandCompleteMessage } from "pg-protocol/dist/messages";
import ConnectionParameters from "pg/lib/connection-parameters";
import { client } from "../app";

export const getQuery = function(req, res){
    // client.connect();
    client
        .query('Select * from eg_test_user_table')
        .then(result => {
            res.send(result.rows);
            console.log("query run successfully");
        })
        .catch(err => {
            res.send(err.message);
        })
        // .finally(() => {
        //     client.end();
        // })
}

export const insertQuery = function(req, res){
    let data = req.body; 
    let insertQuery = `insert into eg_test_user_table(title, salutation, dob, locale, username, password, pwdexpirydate, mobilenumber, altcontactnumber, emailid, createddate, lastmodifieddate, createdby, lastmodifiedby, active, name, gender, pan, aadhaarnumber, type, version, guardian, guardianrelation, signature, accountlocked, bloodgroup, photo, identificationmark, tenantid, id, uuid, accountlockeddate)
        values ('${data.title}', '${data.salutation}', '${data.dob}', '${data.locale}', '${data.username}', '${data.password}', '${data.pwdexpirydate}', '${data.mobilenumber}', '${data.altcontactnumber}', '${data.emailid}', '${data.createddate}', '${data.lastmodifieddate}', ${data.createdby}, ${data.lastmodifiedby}, ${data.active}, '${data.name}', ${data.gender}, '${data.pan}', '${data.aadhaarnumber}', '${data.type}', '${data.version}', '${data.guardian}', '${data.guardianrelation}', '${data.signature}', ${data.accountlocked}, '${data.bloodgroup}', '${data.photo}', '${data.identificationmark}', '${data.tenantid}', ${data.id}, ${data.uuid}, ${data.accountlockeddate})`
        
    //console.log("check query1: "+insertQuery);
    // client.connect();
    client
        .query(insertQuery)
        .then(result=>{
            res.send('Insertion was successful')
        })
        .catch(err => {
            res.send(err.message);
        })
        // .finally(() => {
        //     client.end();
        // })
}

export const insert = function(req,res){
    let data = req.body;
    let insertQuery = `insert into eg_test_user_table(title, salutation, dob, locale, username, password, pwdexpirydate, mobilenumber, altcontactnumber, emailid, createddate, lastmodifieddate, createdby, lastmodifiedby, active, name, gender, pan, aadhaarnumber, type, version, guardian, guardianrelation, signature, accountlocked, bloodgroup, photo, identificationmark, tenantid, id, uuid, accountlockeddate)
        values ('${data.title}', '${data.salutation}', '${data.dob}', '${data.locale}', '${data.username}', '${data.password}', '${data.pwdexpirydate}', '${data.mobilenumber}', '${data.altcontactnumber}', '${data.emailid}', '${data.createddate}', '${data.lastmodifieddate}', ${data.createdby}, ${data.lastmodifiedby}, ${data.active}, '${data.name}', ${data.gender}, '${data.pan}', '${data.aadhaarnumber}', '${data.type}', '${data.version}', '${data.guardian}', '${data.guardianrelation}', '${data.signature}', ${data.accountlocked}, '${data.bloodgroup}', '${data.photo}', '${data.identificationmark}', '${data.tenantid}', ${data.id}, ${data.uuid}, ${data.accountlockeddate})`    
        
    //console.log("check query2: ",insertQuery);
    res = client.query(insertQuery);
    return res;
}

export const insertInto = function(req,res){
    let data = req.body;
    let insertQuery = "";
    let selectQuery = `select id,tenantid from eg_test_user_table where id = ${data.id} AND tenantid='${data.tenantid}'`
    client.query(selectQuery).then(result => {
        console.log("check id: ",result.rows);
        data.roles.forEach(role => {
            insertQuery = `insert into eg_test_userrole_v1(role_code, role_tenantid, user_id, user_tenantid, lastmodifieddate) values ('${role}', '${result.rows[0].tenantid}', ${result.rows[0].id} , '${data.tenantid}', '${data.lastmodifieddate}');` 
            res = client.query(insertQuery);
        });
    });
    return res;
}

export const getUser = function(req,callback){
    let user = req.username ? req.username : req.body.username ;

    let getQuery = `select * from eg_test_user_table where username = '${user}'`;
    client
        .query(getQuery)
        .then(result => {
            console.log("res: ",result.rows);
            return callback(result.rows);         
        })
}