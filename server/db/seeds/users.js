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
          hash: hasher('adamdeltage')
        },
        {
          id: 2,
          username: 'maddie',
          firstname: 'Madeleine',
          lastname: 'Brighouse',
          email: 'madeleinebrighouse@gmail.com',
          hash: hasher('madeleinedeltage')
        },
        {
          id: 3,
          username: 'peter',
          firstname: 'Peter',
          lastname: 'Sim',
          email: 'ps.in.nz@gmail.com',
          hash: hasher('peterdeltage')
        },
        {
          id: 4,
          username: 'tim',
          firstname: 'Timothy',
          lastname: 'Tolley',
          email: 'timothytolley@gmail.com',
          hash: hasher('timothydeltage')
        },
        {
          id: 5,
          username: 'tyler',
          firstname: 'Tyler',
          lastname: 'Griffin',
          email: 'tylergriffin70@gmail.com',
          hash: hasher('tylerdeltage')
        },
        {
          id: 6,
          username: 'deltage',
          firstname: 'deltage',
          lastname: 'deltage',
          email: 'deltage.master@gmail.com',
          hash: hasher('delta')
        }
      ])
    })
}
