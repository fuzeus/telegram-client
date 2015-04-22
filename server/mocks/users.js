module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  var users = {
    'joeschmidt': {
      id: 'joeschmidt',
      name: 'Joe Schmidt',
      email: 'joeschmidt@schmidt.com'
    },
    'carollovell': {
      id: 'carollovell',
      name: 'Carol Lovell',
      email: 'carol@lovelegos.com'
    },
    'krysrutledge': {
      id: 'krysrutledge',
      name: 'Krys Rutledge',
      email: 'krys@hulkitup.com'
    }
  };

  var allUsersArray = Object.keys(users).map(function(key) { return users[key]; });

  usersRouter.get('/:id', function(req, res) {
    res.send({
      user: users[req.params.id]
    });
  });

  usersRouter.post('/', function(req, res) {
    if (req.body.user.meta.operation === 'signup') {
      var user = {
        id: req.body.user.id,
        name: req.body.user.name,
        email: req.body.user.email
      };
      res.send({
        user: user
      });
    } else if (req.body.user.meta.operation === 'login') {
      if (users[req.body.user.id]) {
        res.send({
          user: users[req.body.user.id]
        });
      } else {
        res.status(404).send('Invalid username/password!');
      }
    } else {
      res.status(404).send('Invalid operation!');
    }
  });

  app.use('/api/users', usersRouter);
};
