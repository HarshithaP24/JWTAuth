Node version used : 12.18.3

Steps to run the project :
1. Clone the project.
2. go to folder "OAuth-nodejs" in the terminal and enter npm install.
3. This installs all the node-modules as specified according to package.json file.
4. Enter npm start to run the project.

Code Explaination :
1. Before the start of the project u need to register a Github OAuth App. Use the link https://github.com/settings/applications/new 
2. On registering u receive a clientId and a clientSecret for your registered application.
3. On running the project u start from welcome.html where u request github for authorization-code by providing your cliendId and also a redirect url.
4. On receiving the authorization code you request for access-token using the code, clientId and clientSceret.
5. using this access-token u will be able to access information about the user.
6. Here we are trying to access user information from a third party app using Github authorization.


OAuth token validity :
OAuth applications can use a special API method for checking OAuth token validity without running afoul of normal rate limits for failed login attempts.

Authentication works differently with this particular endpoint. You must use Basic Authentication when accessing it, where the username is the OAuth application client_id and the password is its client_secret. Invalid tokens will return 404 NOT FOUND.

You can do this with curl:
curl -u client_id:client_secret https://api.github.com/applications/:client_id/tokens/:token