var log = require("./log");

const _db_properties = {
  host: 'db',
//  host: '127.0.0.1',
  port: 5432,
  database: 'widget_repo',
  user: 'cj',
  password: 'cj',
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000
};

const _server_config = {
  
}

module.exports = {
  dbprops : _db_properties,
  logprops : log.properties,
  logpath : log.path
}
