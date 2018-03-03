const hasher = require('../../lib/crypto').getHash

exports.seed = (knex, Promise) => {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([
        {
          id: 1,
          username: 'adam',
          firstname: 'Adam',
          lastname: 'Kuhn',
          email: 'adamk@gmail.com',
          hash: hasher('adam')
        },
        {
          id: 2,
          username: 'maddie',
          firstname: 'Madeleine',
          lastname: 'Brighouse',
          email: 'madeleinebrighouse@gmail.com',
          hash: hasher('madeleine')
        },
        {
          id: 3,
          username: 'peter',
          firstname: 'Peter',
          lastname: 'Sim',
          email: 'ps.in.nz@gmail.com',
          hash: hasher('peter')
        },
        {
          id: 4,
          username: 'tim',
          firstname: 'Timothy',
          lastname: 'Tolley',
          email: 'timothytolley@gmail.com',
          hash: hasher('timothy')
        },
        {
          id: 5,
          username: 'tyler',
          firstname: 'Tyler',
          lastname: 'Griffin',
          email: 'tylerg99@gmail.com',
          hash: hasher('tyler')
        }
      ])
    })
}
