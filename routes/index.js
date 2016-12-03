var express = require('express');

var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
<<<<<<< HEAD
var transporter = nodemailer.createTransport('smtps://<your stuff>@gmail.com:<your stuff>@smtp.gmail.com');
=======
var transporter = nodemailer.createTransport('smtps://<your email>@gmail.com:<your app password>.gmail.com');
>>>>>>> f7ce31ab46f4d44bf7aedd5b7635a48ad962e4cd


var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index');

});
router.post('/',function (req,res,next) {
  var name = req.body.fName;
  var lname = req.body.lName;
  var email = req.body.email;

  var mailOptions = {
<<<<<<< HEAD
    from: '"Web Contact Page" <lzhernandez96@gmail.com>', // sender address
    to:  email, // list of receivers
    subject: 'Sorry', // Subject line
    text: 'Sorry ' + name + " but we no longer have any Kool-Aid to give out at this time", // plaintext body gmail accepts html so I won't bother
    html: '<b> Sorry ' + name + " but we no longer have any Kool-Aid to give out at this time"
=======
    from: '"Web Contact Page" <' + email +'>', // sender address
    to: '<youremail.com>', // list of receivers
    subject: 'Contact Form', // Subject line
    //text: 'Hello world 🐴', // plaintext body gmail accepts html so I won't bother
    html: '<b>'+ name  +' '+ lname + '</b>' +
    '<b>' + email+ '</b>' // html body
>>>>>>> f7ce31ab46f4d44bf7aedd5b7635a48ad962e4cd
  };
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });


  res.render('index');


})

module.exports = router;
