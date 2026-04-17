//Write an ExpressJS application that creates a login form containing 
//fields for username and password along with a submit button. The 
//form data should be sent to the server using the POST method. 
//Implement an authentication middleware that checks whether the 
//entered username is "admin" and the password is "1234". If the 
//credentials are correct, the application should display the message 
//"Login Successful". Otherwise, it should display "Invalid 
//Credentials".
const express = require("express")
const app = express()