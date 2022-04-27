// const mailgun = require("mailgun-js");
// const DOMAIN = process.env.mailGunDOMAIN;
// const mg = mailgun({apiKey: process.env.mailGunAPI, domain: DOMAIN});


// function sendMail(name, subject, email, text) {
//   var data = {
//   	from: "Mailgun Sandbox <postmaster@sandbox3b4ba5531d7542c590c322f2a3dcc09e.mailgun.org>",
//   	to: "lmutes8@gmail.com",
//   	subject: subject+' from: '+email,
//   	text: name+': '+text
//   };

//   mg.messages().send(data, function (error, body) {
//   	console.log(body);
//   });
// };

// module.exports = { sendMail };
