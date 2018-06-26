/* eslint no-unused-vars: 0 */
exports.up = knex => knex.schema.createTable('users', table => {
  table.increments('id').primary()
  table.string('username')
  table.string('firstname')
  table.string('lastname')
  table.string('email')
  table.binary('hash')
})

exports.down = knex => knex.schema.dropTable('users')
