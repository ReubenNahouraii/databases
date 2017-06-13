var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, (err) => {
        if (err) {
          console.log(err);
          return;
        }
        res.status(201).end(JSON.stringify(req.body));
      });
      
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get( data => {
        res.status(200).end(JSON.stringify(data));
      });
    },
    post: function (req, res) {
      models.users.post(req.body);
      res.status(201).end(JSON.stringify(req.body));
    }
  }
};

