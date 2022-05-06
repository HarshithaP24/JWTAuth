Node version used : 12.18.3

Steps to run the project:
1. Clone the project.
2. go to folder "nodejs-postgres" in the terminal and enter npm install.
3. This installs all the node-modules as specified according to package.json file.
4. Run the pgAdmin tool(Database) in the background as we are using liquibase to create and update the tables.
5. Enter npm start to run the project.


API endpoints in the code ---->
http://localhost:3300/users/_get :
- returns role_codes, userId, username and tenantId for all users present from the users table and their corresponding roles from the roles table.
- sample response: 
		{
			"role_code": "RO",
			"id": "65",
			"username": "namra",
			"tenantid": "polkra"
		},
		{
			"role_code": "RO",
			"id": "72",
			"username": "gayat",
			"tenantid": "pb.secunder"
		},
		{
			"role_code": "VRO",
			"id": "72",
			"username": "gayat",
			"tenantid": "pb.secunder"
		}


http://localhost:3300/users/_insert :
 - inserts user info directly into the users table.
 - sample request body :
		{
			"title": "title",
			"salutation": "Mrs",
			"dob": "1990-07-23 00:00:00",
			"locale": "en_IN",
			"username": "anonymous",
			"password": "dsjfgsjfbsdjkfh",
			"pwdexpirydate": "01-01-2060",
			"mobilenumber": "8529637412",
			"altcontactnumber": "1235689745",
			"emailid": "abc@gmail.com",
			"createddate": "01-01-2020",
			"lastmodifieddate": "01-01-2022",
			"createdby": 1,
			"lastmodifiedby": 1,
			"active": true,
			"name": "anonymous",
			"gender": 2,
			"pan": "DUQOO8907H",
			"aadhaarnumber": "852396587895",
			"type": "SYSTEM",
			"version": 3,
			"guardian": "name",
			"guardianrelation": "relation",
			"signature": "0fef5a6f-fb86-493d-9ecf-8f4b37fa498c",
			"accountlocked": false,
			"bloodgroup": "AB_POSITIVE",
			"photo": "54fc046d-12be-4733-b88c-cf7c06402980",
			"identificationmark": "ghvgh", 
			"tenantid": "tyuii",
			"id": 96,
			"uuid": null,
			"accountlockeddate": null
		}

http://localhost:3300/auth/register :
-  used register a user with unique uid and tenantId.
- the user record is inserted into the user table (except the roles info) and also corresponding record of roles for this user is inserted into the roles table.
- if insertion is succeessful the a success message is returned else an error message is returned.	
-  sample request body is :
		{
			"title": "title",
			"salutation": "Mrs",
			"dob": "1990-07-23 00:00:00",
			"locale": "en_IN",
			"username": "Bharat",
			"password": "123",
			"pwdexpirydate": "01-01-2060",
			"mobilenumber": "8529637412",
			"altcontactnumber": "1235689745",
			"emailid": "abc@gmail.com",
			"createddate": "01-01-2020",
			"lastmodifieddate": "01-01-2022",
			"createdby": 1,
			"lastmodifiedby": 1,
			"active": true,
			"name": "anonymous",
			"gender": 2,
			"pan": "DUQOO8907H",
			"aadhaarnumber": "852396587895",
			"type": "SYSTEM",
			"version": 3,
			"guardian": "name",
			"guardianrelation": "relation",
			"signature": "0fef5a6f-fb86-493d-9ecf-8f4b37fa498c",
			"accountlocked": false,
			"bloodgroup": "AB_POSITIVE",
			"photo": "54fc046d-12be-4733-b88c-cf7c06402980",
			"identificationmark": "ghvgh",
			"tenantid": "pb.fatehgarh",
			"id": 21,
			"uuid": null,
			"accountlockeddate": null,
			"roles": [
				"DRV",
				"VRO"
			]
		}

		
http://localhost:3300/auth/login :
- u can login by providing the username and password.
- the given credentials are verified against the data present in user table using username.
- if creedentials are valid the user receives a access token in response else receives an error message.
- sample request body: 
	{
		"username": "testing",
		"password": "12345"
	}
	
http://localhost:3300/auth/protectedResource :
- This is protected resource which can be accessed by providing a valid access token.
- the access token should be provided in the headers section by mentioning the key as 'Authorization' and value as the access token received when the user login is successfull.
	
http://localhost:3300/auth/verify :
- u can verify the validity of the token by providing the token in request body.
- the token is verified and if valid, the user receives a validation successfull message else receives an error message.
- sample request body: 
	{
		"token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9............."
	}
	