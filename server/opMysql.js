const mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '04181022',
    port: '3306',
    database: 'word'
});
connection.connect((res) => {
    console.log("连接数据库成功");
}
)
module.exports = function (sql) {
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        })
    })
}
