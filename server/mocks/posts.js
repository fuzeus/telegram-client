module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    res.send({
      'posts': [
        {
          id: 1,
          body: 'This is literally the coolest post ever!',
          createdDate: new Date(),
          author: 'joeschmidt'



        },
        {
          id: 2,
          body: 'This is literally the coolest post ever!',
          createdDate: new Date(),
          author: 'carollovell'
        },
        {
          id: 3,
          body: 'This is literally the coolest post ever!',
          createdDate: new Date(),
          author: 'krysrutledge'


        }
      ]
    });
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/posts', postsRouter);
};
