/* eslint-disable no-console */

module.exports = function (app) {
  const db = app.get('knexClient')
  const tableName = 'users'
  db.schema.hasTable(tableName).then(exists => {
    if(!exists) {
      db.schema.createTable(tableName, table => {
        table.increments('id')
        table.string('username')
        table.string('firstname')
        table.string('lastname')
        table.string('email')
        table.binary('hash')
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e))
    }
  })
  
  return db
}
