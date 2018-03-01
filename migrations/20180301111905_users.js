/* eslint no-unused-vars: 0 */
exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('users', table => {
      table.increments('id')
      table.string('username')
      table.string('firstname')
      table.string('lastname')
      table.string('email')
      table.binary('hash')
    })
  ])
}

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('users')
  ])
}
