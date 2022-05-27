const express = require('express');
const dotenv = require('dotenv').config() ;
const mysqlConObj   = require('../config/database.js');
const db = mysqlConObj.init();
const router = express.Router();

mysqlConObj.open(db);

/**
 * @path {GET} http://localhost:3000/chatbot/skill/start
 * @description 요청 데이터 값이 없고 반환 값이 있는 GET Method
**/
router.get('/skill/start', (req, res) => {
  var sql = "SELECT contents FROM welcome_talk order by rand() limit 1;" + 
            "SELECT id FROM card_data;"
  var card_list = [];

  db.query(sql,  (error, rows) => {
    if (error) throw error;
    
    rows[1].forEach(element => {
      card_list.push(element.id);
    });

    const result = {
      message: 'success',
      welcome_talk: rows[0][0].contents,
      card_list: card_list
    };

    res.send(result);
  });
});

/**
 * @path {GET} http://localhost:3000/chatbot/card/pick/:card_id
 * @description 요청 데이터 값이 있고 반환 값이 있는 GET Method
**/
router.get('/card/pick/:card_id', (req, res) => {
  var params = req.params;
  
  db.query('SELECT * from card_data where id=?', params.card_id, (error, rows) => {
    if (error) throw error;
    
    const result = {
      message: 'success',
      id: rows[0].id,
      title: rows[0].title,
      commentary: rows[0].commentary
    };

    res.send(result);
  });
});

module.exports = router;