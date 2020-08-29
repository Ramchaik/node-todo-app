const Todos = require('../models/todo');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');

module.exports = function (app) {
  app.use(bodyParser.json());
  app.use(urlencoded({ extended: true }));

  app.get('/api/todos/:uname', async (req, res) => {
    const { uname: username } = req.params;

    try {
      const todos = await Todos.find({ username }).exec();

      res.send(todos);
    } catch (error) {
      console.log('error', error);
      res.status(500).send({ msg: 'Something went wrong' });
    }
  });

  app.get('/api/todo/:id', async (req, res) => {
    const { id } = req.params;

    try {
      const todo = await Todos.findById(id).exec();

      res.send(todo);
    } catch (error) {
      console.log('error', error);
      res.status(500).send({ msg: 'Something went wrong' });
    }
  });

  app.post('/api/todo', async (req, res) => {
    const { id, username, todo, isDone, hasAttachment } = req.body;
    let newTodo = {
      username,
      todo,
      isDone,
      hasAttachment,
    };

    try {
      if (id) await Todos.findByIdAndUpdate(id, newTodo);
      else newTodo = await Todos.create(newTodo);

      if (!newTodo) throw new Error('Not able to create');

      res.status(201).send(newTodo);
    } catch (error) {
      console.log('error', error);
      res.status(500).send({ msg: 'Something went wrong' });
    }
  });

  app.delete('/api/todo', async (req, res) => {
    const { id } = req.body;
    try {
      await Todos.findByIdAndRemove(id);

      res.send('Success');
    } catch (error) {
      console.log('error', error);
      res.status(500).send({ msg: 'Something went wrong' });
    }
  });
};
