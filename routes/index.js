var express = require('express');

var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://<your email>@gmail.com:<your app password>.gmail.com');


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
    from: '"Web Contact Page" <' + email +'>', // sender address
    to: '<youremail.com>', // list of receivers
    subject: 'Contact Form', // Subject line
    //text: 'Hello world 🐴', // plaintext body gmail accepts html so I won't bother
    html: '<b>'+ name  +' '+ lname + '</b>' +
    '<b>' + email+ '</b>' // html body
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
