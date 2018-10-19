var email   = require("emailjs");
var server  = email.server.connect({
   user:    "luminite143@gmail.com", 
   password:"Monu@7257", 
   host:    "smtp.gmail.com", 
   ssl:     true

});
 
// send the message and get a callback with an error or details of the message that was sent
server.send({
   text:    "Kesa hai Haseeb", 
   from:    "SparkleCrowd", 
   to:      "haseebzia146@gmail.com",
   cc:      "",
   subject: "my mail"
}, function(err, message) { console.log(err || message); });