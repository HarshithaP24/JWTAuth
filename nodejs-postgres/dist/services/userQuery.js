"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUser = exports.insertInto = exports.insert = exports.insertQuery = exports.getQuery = undefined;

var _messages = require("pg-protocol/dist/messages");

var _connectionParameters = require("pg/lib/connection-parameters");

var _connectionParameters2 = _interopRequireDefault(_connectionParameters);

var _app = require("../app");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getQuery = exports.getQuery = function getQuery(req, res) {
    // client.connect();
    _app.client.query('select roles.role_code, users.id, users.username, users.tenantid from public.eg_test_userrole_v1 as roles inner join public.eg_test_user_table as users on roles.user_id = users.id').then(function (result) {
        // let responseJosn={};
        // result.rows.forEach(obj => {
        // })
        res.send(result.rows);
        console.log("query run successfully");
    }).catch(function (err) {
        res.send(err.message);
    });
    // .finally(() => {
    //     client.end();
    // })
};

var insertQuery = exports.insertQuery = function insertQuery(req, res) {
    var data = req.body;
    var insertQuery = "insert into eg_test_user_table(title, salutation, dob, locale, username, password, pwdexpirydate, mobilenumber, altcontactnumber, emailid, createddate, lastmodifieddate, createdby, lastmodifiedby, active, name, gender, pan, aadhaarnumber, type, version, guardian, guardianrelation, signature, accountlocked, bloodgroup, photo, identificationmark, tenantid, id, uuid, accountlockeddate)\n        values ('" + data.title + "', '" + data.salutation + "', '" + data.dob + "', '" + data.locale + "', '" + data.username + "', '" + data.password + "', '" + data.pwdexpirydate + "', '" + data.mobilenumber + "', '" + data.altcontactnumber + "', '" + data.emailid + "', '" + data.createddate + "', '" + data.lastmodifieddate + "', " + data.createdby + ", " + data.lastmodifiedby + ", " + data.active + ", '" + data.name + "', " + data.gender + ", '" + data.pan + "', '" + data.aadhaarnumber + "', '" + data.type + "', '" + data.version + "', '" + data.guardian + "', '" + data.guardianrelation + "', '" + data.signature + "', " + data.accountlocked + ", '" + data.bloodgroup + "', '" + data.photo + "', '" + data.identificationmark + "', '" + data.tenantid + "', " + data.id + ", " + data.uuid + ", " + data.accountlockeddate + ")";

    //console.log("check query1: "+insertQuery);
    // client.connect();
    _app.client.query(insertQuery).then(function (result) {
        res.send('Insertion was successful');
    }).catch(function (err) {
        res.send(err.message);
    });
    // .finally(() => {
    //     client.end();
    // })
};

var insert = exports.insert = function insert(req, res) {
    var data = req.body;
    var insertQuery = "insert into eg_test_user_table(title, salutation, dob, locale, username, password, pwdexpirydate, mobilenumber, altcontactnumber, emailid, createddate, lastmodifieddate, createdby, lastmodifiedby, active, name, gender, pan, aadhaarnumber, type, version, guardian, guardianrelation, signature, accountlocked, bloodgroup, photo, identificationmark, tenantid, id, uuid, accountlockeddate)\n        values ('" + data.title + "', '" + data.salutation + "', '" + data.dob + "', '" + data.locale + "', '" + data.username + "', '" + data.password + "', '" + data.pwdexpirydate + "', '" + data.mobilenumber + "', '" + data.altcontactnumber + "', '" + data.emailid + "', '" + data.createddate + "', '" + data.lastmodifieddate + "', " + data.createdby + ", " + data.lastmodifiedby + ", " + data.active + ", '" + data.name + "', " + data.gender + ", '" + data.pan + "', '" + data.aadhaarnumber + "', '" + data.type + "', '" + data.version + "', '" + data.guardian + "', '" + data.guardianrelation + "', '" + data.signature + "', " + data.accountlocked + ", '" + data.bloodgroup + "', '" + data.photo + "', '" + data.identificationmark + "', '" + data.tenantid + "', " + data.id + ", " + data.uuid + ", " + data.accountlockeddate + ")";

    //console.log("check query2: ",insertQuery);
    res = _app.client.query(insertQuery);
    return res;
};

var insertInto = exports.insertInto = function insertInto(req, res) {
    var data = req.body;
    var insertQuery = "";
    var selectQuery = "select id,tenantid from eg_test_user_table where id = " + data.id + " AND tenantid='" + data.tenantid + "'";
    _app.client.query(selectQuery).then(function (result) {
        console.log("check id: ", result.rows);
        data.roles.forEach(function (role) {
            insertQuery = "insert into eg_test_userrole_v1(role_code, role_tenantid, user_id, user_tenantid, lastmodifieddate) values ('" + role + "', '" + result.rows[0].tenantid + "', " + result.rows[0].id + " , '" + data.tenantid + "', '" + data.lastmodifieddate + "');";
            res = _app.client.query(insertQuery);
        });
    });
    return res;
};

var getUser = exports.getUser = function getUser(req, callback) {
    var user = req.username ? req.username : req.body.username;

    var getQuery = "select * from eg_test_user_table where username = '" + user + "'";
    _app.client.query(getQuery).then(function (result) {
        console.log("res: ", result.rows);
        return callback(result.rows);
    });
};
//# sourceMappingURL=userQuery.js.map