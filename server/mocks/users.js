module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  usersRouter.get('/:id', function(req, res) {
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


    res.send({
      'users': [ users[req.params.id]]
    });
  });

  usersRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  usersRouter.get('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.put('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/users', usersRouter);
};
