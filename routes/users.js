const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database')
const emailserver = require("../app")
var formidable = require('formidable');




// Register

router.post('/picture', (req,res)=>{

  console.log("picture me aya");
  var username = req.body.username;
  let sampleFile = req.files.file;
  //Use the mv() method to place the file somewhere on your server

  sampleFile.mv('frontend-angular/src/assets/'+username+'.jpg', function(err) {

    const pathtofrontend = 'assets/' + username+'.jpg';
    if(!err){
      res.json(
      {
        imagepath: pathtofrontend,
      }
    );
  }


  });
  
})


router.post('/updatereward',(req,res,next)=>{

// console.log("COINS me aya");
// console.log(req.body.reward)

let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    reward: req.body.reward
  });

User.savecoins(newUser,(err,user)=>{

  console.log("TALAL")
  console.log(user)
  if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({success: true, msg:'User registered'});
    }


})

});

router.post('/register', (req, res, next) => {
  console.log("register")
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    reward: req.body.reward
  });

res.json({success: true, msg:'User registered'})

  User.addUser(newUser, (err, user) => {

    if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({success: true, msg:'User registered'});
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
   const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch) {
        // console.log(user.toObject())
        const token = jwt.sign(user.toObject(), config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'Bearer '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            reward:user.reward
          }
        });

// sending mail
   emailserver.send({
   text:    "Your Child " + user.username + " has just logged in to sparklecrowd!!", 
   from:    "SparkleCrowd", 
   to:      user.email,
   cc:      "",
   subject: "SparkleCrowd Logged-In Message"
}, function(err, message) { console.log(err || message); });


      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {

var fs = require('fs');
fs.exists('frontend-angular/src/assets/'+req.user.username+'.jpg', function(exists) {

    if (exists){
      console.log("TRUE")
      res.json({user: req.user,
            pathtofrontend:'assets/' + req.user.username+'.jpg'
         });
    }else{
      res.json({user: req.user,
            pathtofrontend:undefined
         });

    }
});




  
  // console.log(req.user)
});


module.exports = router;
