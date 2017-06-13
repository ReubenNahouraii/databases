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
    get: function () {
      
      
    }, // a function which produces all the messages
    post: function (messageObject, callback) {
      
        // select id in user where name = same as mss Obj name 
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
        // if userid exists from results.id callback of resultsid   then insert values ti that id into the messages table
        
          // else need to go and insert that name into the user table then get thae id from results and finally insert into the messafeg table
          
           
      
      // let sql = `insert into messages values (null, '${messageobject.message}', (select userid from user where name = '${messageobject.name}')`; /// select from user id where name = julia

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



