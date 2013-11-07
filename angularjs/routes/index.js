
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.angular = function(req, res){
  res.render('angular');
};

exports.signup = function(req, res){
  res.render('signup');
};

exports.admin = function(req, res){
  res.render('admin');
};
