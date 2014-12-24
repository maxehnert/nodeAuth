module.exports = function(app, passport){

  // Home Page with login links
  app.get('/', function(req, res){
    res.render('index.ejs'); //load the index.ejs file
  });

  //Login Page Show the login form
  app.get('/login', function(req, res){
    //render the page and pass in any flash data if it exists
    res.render('login.ejs', { message: req.flash('loginMessage')});
  });

  // Process the login form
  //app.post('login', do passport stuff);

  // Signup Page show the signup form
  app.get('/signup', function(req, res){

  // render the page and pass in any flash data if it exists
    res.render('signup.ejs', { message: req.flash('signupMessage')});
  });

   // process the signup form
    // app.post('/signup', do all our passport stuff here);

  //Profile Page
  //you want this protected so you have to be logged in to visit it
  // we will use route middlewate to verify this (loggedin function)
  app.get('/profile', function(req, res){
    req.logout();
    res.redirect('/');
  });
};

// route middleware to make sure a user s logged in
function isLoggedIn(req, res, next){

  // if use is authenticated in the session, carry on
  if(res.isAuthenticated())
    return next();

  //if they aren't - redirext them to the home page
  res.redirect('/');
}
