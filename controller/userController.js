const User = require('../model/User');
const mongoose = require('mongoose');


exports.postUser = async (req, res) => {
    console.log(req.body);
    
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });
  
    try {
      await User.create(newUser);
      
      res.redirect('/');
       
    } catch (error) {
      console.log(error);
    }
  };


  exports.home = async(req, res) => {
    try {
      
      res.render('home');
      
    } catch (error) {
      console.log(error);
    }
  }
  exports.homepage = async(req, res) => {
    try {
      const user = await User.aggregate([{ $sort : { _id : -1 } }]);
      
      res.render('home',{
        
        user,
        


      });
      
    } catch (error) {
      console.log(error);
    }
  }