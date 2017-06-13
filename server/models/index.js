var db = require('../db');


let insertIntoMessages = function(userId, messageObject) {
  // takes in userId
  let sql = `insert into messages values (null, '${messageObject.message}', '${userId}')`;
  db.con.query(sql, (err, results) => {
    if (err) {
      console.log(err);
    }
    
  });
};

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (messageObject) {
      let userId = `select userId where name = '${messageObject.name}'`;
      let sql = ``;
      db.con.query(sql, (err, results) => {
        if (err) {
          console.log(err);
        }
        
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      let sql = `select * from users`;
      db.con.query(sql, (err, data) => {
        if (err) {
          console.log(err);
        }
        callback(data);
      }); 
    },
    post: function (userObject) {
      let sql = `insert into users values (null, '${userObject.name}')`; 
      db.con.query(sql, (err, results) => {
        if (err) {
          console.log(err);
        }
      });  
      
    }
  }
};



