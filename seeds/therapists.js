/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const mockdata = [
  {
    'id': 1234,
    "first_name": 'Blu',
    "last_name": 'Banks',
    'email': 'b.b123@gmail.com',
    'password': '2840dhw!',
    'license_number': 56476
  },

  {
    'id': 56789,
    "first_name": 'Sunny',
    "last_name": 'Sunflower',
    'email': 's.sunflower@gmail.com',
    'password': 'fehfiuhfo',
    'license_number': 90876
  }
]

exports.seed = async function(knex) {
  return knex('therapists')
    .del()
    .then(() => {
      return knex('therapists').insert(mockdata);
    })
  
};
