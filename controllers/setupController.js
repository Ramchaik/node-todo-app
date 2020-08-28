const Todo = require('../models/todo');

module.exports = function (app) {
  app.get('/api/setupTodos', async (req, res) => {
    const starterTodo = [
      {
        username: 'John',
        todo: 'go to market',
        isDone: false,
        hasAttachment: false,
      },
      {
        username: 'Jane',
        todo: 'clean room',
        isDone: false,
        hasAttachment: false,
      },
      {
        username: 'Tom',
        todo: 'buy bread',
        isDone: false,
        hasAttachment: false,
      },
    ];

    try {
      const todos = await Todo.create(starterTodo);
      res.send(todos);
    } catch (error) {
      console.error(error);
    }
  });
};
