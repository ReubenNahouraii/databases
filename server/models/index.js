var db = require('../db');


let insertIntoMessages = function(userId, messageObject, callback) { // callback with userid
  // takes in userId
  let sql = `insert into messages values (null, '${messageObject.message}', '${userId}')`;
  db.con.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      callback(err);
      return;
    }
    callback(null);
    
  });
};

module.exports = {
  messages: {
    get: function (callback) {    
      let sql = `select m.message, u.name from messages m INNER JOIN users u on m.userId = u.userId`; 
      db.con.query(sql, (err, results) => {
        if (err) {
          console.log(err);
          callback(err);
        }
        callback(null, results);
      });
    }, // a function which produces all the messages
    post: function (messageObject, callback) {
      let sql = `select userId from users where name = '${messageObject.name}'`;
      db.con.query(sql, (err, results) => {
        console.log('RESULTS', results);
        if (err) {
          console.log(err);
          callback(err);
          return;
        }
        let userIdObj = results[0];
        if (userIdObj !== undefined) {
          insertIntoMessages(userIdObj.userId, messageObject, callback);
        } else {
          // inset users first
          let sql = `insert into users values (null,'${messageObject.name}')`;
          db.con.query(sql, (err, results) => {
            if (err) {
              console.log(err);
              callback(err);
              return;
            }
            insertIntoMessages(results.insertId, messageObject, callback);
          });
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
          return;
        }
        callback(null, data);
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



