/* eslint no-unused-vars: 0 */
exports.seed = (knex, Promise) =>{
  return knex('users').del()
    .then(() => {
      return knex('users').insert([
        {
          id: 1,
          username: 'adam',
          firstname: 'Adam',
          lastname: 'Kuhn',
          email: 'adamk@gmail.com',
          hash: '010203'
        },
        {
          id: 2,
          username: 'maddie',
          firstname: 'Madeleine',
          lastname: 'Brighouse',
          email: 'madeleinebrighouse@gmail.com',
          hash: '010203'
        },
        {
          id: 3,
          username: 'peter',
          firstname: 'Peter',
          lastname: 'Sim',
          email: 'ps.in.nz@gmail.com',
          hash: '010203'
        },
        {
          id: 4,
          username: 'tim',
          firstname: 'Timothy',
          lastname: 'Tolley',
          email: 'timothytolley@gmail.com',
          hash: '010203'
        },
        {
          id: 5,
          username: 'tyler',
          firstname: 'Tyler',
          lastname: 'Griffin',
          email: 'tylerg99@gmail.com',
          hash: '010203'
        }
      ])
    })
}
