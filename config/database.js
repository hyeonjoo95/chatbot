const mysql = require('mysql');

const mysqlConnection = {
    init: function() {
        return mysql.createConnection({
						host: process.env.host,
						port: process.env.port,
						user: process.env.user,
						password: process.env.password,
						database: process.env.database,
                        multipleStatements: true,
        });
    },
    open: function(con) {
        con.connect(err => {
            if(err) {
                console.log("MySQL 연결 실패 : ", err);
            }
        });
    },
    close: function(con) {
        con.end(err => {
            if(err) {
                console.log("MySQL 종료 실패 : ", err);
            }
        })
    }
}

module.exports = mysqlConnection; // #5